import './BasicLayout.less';

import React, { CSSProperties, useContext, useEffect, useState } from 'react';
import { BreadcrumbProps as AntdBreadcrumbProps } from 'antd/es/breadcrumb';
import { Layout } from 'antd';
import classNames from 'classnames';
import warning from 'warning';
import useMergeValue from 'use-merge-value';
import { stringify } from 'use-json-comparison';
import useAntdMediaQuery from 'use-media-antd-query';
import Omit from 'omit.js';
import Header, { HeaderViewProps } from './Header';
import {
  MenuDataItem,
  MessageDescriptor,
  Route,
  RouterTypes,
  WithFalse,
} from './typings';
import { getPageTitleInfo, GetPageTitleProps } from './getPageTitle';
import defaultSettings, { PureSettings } from './defaultSettings';
import getLocales, { LocaleType } from './locales';
import { BaseMenuProps } from './SiderMenu/BaseMenu';
import Footer from './Footer';
import RouteContext from './RouteContext';
import SiderMenu from './SiderMenu';
import { SiderMenuProps } from './SiderMenu/SiderMenu';
import { getBreadcrumbProps } from './utils/getBreadcrumbProps';
import getMenuData from './utils/getMenuData';
import { isBrowser, useDeepCompareEffect } from './utils/utils';
import PageLoading from './PageLoading';
import MenuCounter from './SiderMenu/Counter';
import WrapContent from './WrapContent';
import { useDocumentTitle } from './utils/hooks';
import compatibleLayout from './utils/compatibleLayout';

export type BasicLayoutProps = Partial<RouterTypes<Route>> &
  SiderMenuProps &
  HeaderViewProps &
  Partial<PureSettings> & {
    pure?: boolean;
    /**
     * logo url
     */
    logo?: React.ReactNode | WithFalse<() => React.ReactNode>;

    /**
     * Se activa cuando se cambia la página
     */
    onPageChange?: (location?: RouterTypes<Route>['location']) => void;

    loading?: boolean;

    locale?: LocaleType;

    onCollapse?: (collapsed: boolean) => void;

    footerRender?: WithFalse<
      (props: HeaderViewProps, defaultDom: React.ReactNode) => React.ReactNode
    >;

    breadcrumbRender?: (
      routers: AntdBreadcrumbProps['routes'],
    ) => AntdBreadcrumbProps['routes'];
    menuItemRender?: BaseMenuProps['menuItemRender'];
    pageTitleRender?: WithFalse<
      (
        props: GetPageTitleProps,
        defaultPageTitle?: string,
        info?: {
          // Título de la página
          title: string;
          // local de título
          id: string;
          // Título de la página sin valor predeterminado
          pageName: string;
        },
      ) => string
    >;
    menuDataRender?: (menuData: MenuDataItem[]) => MenuDataItem[];
    itemRender?: AntdBreadcrumbProps['itemRender'];

    formatMessage?: (message: MessageDescriptor) => string;
    /**
     * Ya sea que deshabilite el modo móvil, algunos sistemas de administración no necesitan el modo móvil, esta propiedad se puede establecer en true
     */
    disableMobile?: boolean;
    contentStyle?: CSSProperties;
    isChildrenLayout?: boolean;

    className?: string;

    /**
     * Use ambos márgenes de contenido
     */
    disableContentMargin?: boolean;
  };

const headerRender = (
  props: BasicLayoutProps & {
    hasSiderMenu: boolean;
  },
): React.ReactNode => {
  if (props.headerRender === false || props.pure) {
    return null;
  }
  return <Header {...props} />;
};

const footerRender = (props: BasicLayoutProps): React.ReactNode => {
  if (props.footerRender === false || props.pure) {
    return null;
  }
  if (props.footerRender) {
    return props.footerRender({ ...props }, <Footer />);
  }
  return null;
};

const renderSiderMenu = (props: BasicLayoutProps): React.ReactNode => {
  const { layout, isMobile, menuRender } = props;
  if (props.menuRender === false || props.pure) {
    return null;
  }
  if (layout === 'top' && !isMobile) {
    return <SiderMenu {...props} hide />;
  }
  if (menuRender) {
    return menuRender(props, <SiderMenu {...props} />);
  }

  return <SiderMenu {...props} />;
};

const defaultPageTitleRender = (
  pageProps: GetPageTitleProps,
  props: BasicLayoutProps,
): {
  title: string;
  id: string;
  pageName: string;
} => {
  const { pageTitleRender } = props;
  const pageTitleInfo = getPageTitleInfo(pageProps);
  if (pageTitleRender === false) {
    return {
      title: props.title || '',
      id: '',
      pageName: '',
    };
  }
  if (pageTitleRender) {
    const title = pageTitleRender(
      pageProps,
      pageTitleInfo.title,
      pageTitleInfo,
    );
    if (typeof title === 'string') {
      return {
        ...pageTitleInfo,
        title,
      };
    }
    warning(
      typeof title === 'string',
      'nbe-layout: renderPageTitle return value should be a string',
    );
  }
  return pageTitleInfo;
};

export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumb: { [path: string]: MenuDataItem };
};

const getPaddingLeft = (
  hasLeftPadding: boolean,
  collapsed: boolean | undefined,
  siderWidth: number,
): number | undefined => {
  if (hasLeftPadding) {
    return collapsed ? 48 : siderWidth;
  }
  return 0;
};

/**
 * 🌃 Powerful and easy to use beautiful layout
 * 🏄‍ Support multiple topics and layout types
 * @param props
 */
const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const {
    children,
    onCollapse: propsOnCollapse,
    location = { pathname: '/' },
    fixSiderbar,
    navTheme,
    contentStyle,
    route = {
      routes: [],
    },
    layout: defaultPropsLayout,
    style,
    disableContentMargin,
    siderWidth = 208,
    menu,
    isChildrenLayout: propsIsChildrenLayout,
    menuDataRender,
    loading,
    ...rest
  } = props;
  const propsLayout = compatibleLayout(defaultPropsLayout);
  const { prefixCls } = rest;
  const formatMessage = ({
    id,
    defaultMessage,
    ...restParams
  }: {
    id: string;
    defaultMessage?: string;
  }): string => {
    if (props.formatMessage) {
      return props.formatMessage({
        id,
        defaultMessage,
        ...restParams,
      });
    }
    const locales = getLocales();
    if (locales[id]) {
      return locales[id];
    }
    if (defaultMessage) {
      return defaultMessage as string;
    }
    return id;
  };

  const colSize = useAntdMediaQuery();
  const { routes = [] } = route;
  const [menuInfoData, setMenuInfoData] = useMergeValue<{
    breadcrumb?: {
      [key: string]: MenuDataItem;
    };
    breadcrumbMap?: Map<string, MenuDataItem>;
    menuData?: MenuDataItem[];
  }>(() => getMenuData(routes, menu, formatMessage, menuDataRender));

  let renderMenuInfoData: {
    breadcrumb?: {
      [key: string]: MenuDataItem;
    };
    breadcrumbMap?: Map<string, MenuDataItem>;
    menuData?: MenuDataItem[];
  } = {};

  // Si existe menuDataRender, debe mostrarse cada vez, de lo contrario no se puede garantizar la sincronización de datos
  if (menuDataRender) {
    renderMenuInfoData = getMenuData(
      routes,
      menu,
      formatMessage,
      menuDataRender,
    );
  }

  const isMobile =
    (colSize === 'sm' || colSize === 'xs') && !props.disableMobile;

  const { breadcrumb = {}, breadcrumbMap, menuData = [] } = !menuDataRender
    ? menuInfoData
    : renderMenuInfoData;
  /**
   *  Si menuRender no existe, puede hacer una optimización de rendimiento
   *  Mientras los enrutadores no estén actualizados, no es necesario volver a calcular
   */
  useDeepCompareEffect(() => {
    if (!menuDataRender) {
      const infoData = getMenuData(routes, menu, formatMessage, menuDataRender);

      const animationFrameId = requestAnimationFrame(() => {
        setMenuInfoData(infoData);
      });
      return () =>
        window.cancelAnimationFrame &&
        window.cancelAnimationFrame(animationFrameId);
    }
    return () => null;
  }, [props.route, stringify(menu)]);

  // If it is a fix menu, calculate padding
  // don't need padding in phone mode
  const hasLeftPadding = propsLayout !== 'top' && !isMobile;

  const [collapsed, onCollapse] = useMergeValue<boolean>(false, {
    value: props.collapsed,
    onChange: propsOnCollapse,
  });

  // Splicing parameters, adding menuData and formatMessage in props
  const defaultProps = Omit(
    {
      ...props,
      formatMessage,
      breadcrumb,
      layout: compatibleLayout(props.layout) as 'side',
    },
    ['className', 'style'],
  );

  // gen page title
  const pageTitleInfo = defaultPageTitleRender(
    {
      pathname: location.pathname,
      ...defaultProps,
      breadcrumbMap,
    },
    props,
  );

  // gen breadcrumbProps, parameter for pageHeader
  const breadcrumbProps = getBreadcrumbProps({
    ...defaultProps,
    breadcrumbMap,
  });

  // render sider dom
  const siderMenuDom = renderSiderMenu({
    ...defaultProps,
    menuData,
    onCollapse,
    isMobile,
    theme: (navTheme || 'light').toLocaleLowerCase().includes('light')
      ? 'dark'
      : 'light',
    collapsed,
  });

  // render header dom
  const headerDom = headerRender({
    ...defaultProps,
    hasSiderMenu: !!siderMenuDom,
    menuData,
    isMobile,
    collapsed,
    onCollapse,
    theme: (navTheme || 'dark').toLocaleLowerCase().includes('dark')
      ? 'dark'
      : 'light',
  });

  // render footer dom
  const footerDom = footerRender({
    isMobile,
    collapsed,
    ...defaultProps,
  });

  const { isChildrenLayout: contextIsChildrenLayout } = useContext(
    RouteContext,
  );

  // Si se define en parámetros, los parámetros prevalecerán
  const isChildrenLayout =
    propsIsChildrenLayout !== undefined
      ? propsIsChildrenLayout
      : contextIsChildrenLayout;

  const baseClassName = `${prefixCls}-basicLayout`;
  // gen className
  const className = classNames(
    props.className,
    'ant-design-pro',
    baseClassName,
    {
      [`screen-${colSize}`]: colSize,
      [`${baseClassName}-top-menu`]: propsLayout === 'top',
      [`${baseClassName}-is-children`]: isChildrenLayout,
      [`${baseClassName}-fix-siderbar`]: fixSiderbar,
      [`${baseClassName}-mobile`]: isMobile,
    },
  );

  /**
   * Calcule el ancho del control deslizante
   */
  const leftSiderWidth = getPaddingLeft(
    !!hasLeftPadding,
    collapsed,
    siderWidth,
  );

  // Cuando siderMenuDom está vacío, no se necesita padding
  const genLayoutStyle: CSSProperties = {
    position: 'relative',
  };

  // if is some layout children，don't need min height
  if (isChildrenLayout || (contentStyle && contentStyle.minHeight)) {
    genLayoutStyle.minHeight = 0;
  }

  const contentClassName = classNames(`${baseClassName}-content`, {
    [`${baseClassName}-has-header`]: headerDom,
    [`${baseClassName}-content-disable-margin`]: disableContentMargin,
  });

  /**
   * Se activa cuando se cambia la página
   */
  useEffect(() => {
    const { onPageChange } = props;
    if (onPageChange) {
      onPageChange(props.location);
    }
  }, [stringify(props.location)]);
  const [hasFooterToolbar, setHasFooterToolbar] = useState(false);

  useDocumentTitle(pageTitleInfo, props.title);

  return (
    <MenuCounter.Provider>
      <RouteContext.Provider
        value={{
          ...defaultProps,
          breadcrumb: breadcrumbProps,
          menuData,
          isMobile,
          collapsed,
          isChildrenLayout: true,
          title: pageTitleInfo.pageName,
          hasSiderMenu: !!siderMenuDom,
          hasHeader: !!headerDom,
          siderWidth: leftSiderWidth,
          hasFooter: !!footerDom,
          hasFooterToolbar,
          setHasFooterToolbar,
          pageTitleInfo,
        }}
      >
        <div className={className}>
          <Layout
            style={{
              minHeight: '100%',
              ...style,
            }}
            hasSider
          >
            {siderMenuDom}
            <Layout style={genLayoutStyle}>
              {headerDom}
              <WrapContent
                isChildrenLayout={isChildrenLayout}
                {...rest}
                className={contentClassName}
                style={contentStyle}
              >
                {loading ? <PageLoading /> : children}
              </WrapContent>
              {footerDom}
            </Layout>
          </Layout>
        </div>
      </RouteContext.Provider>
    </MenuCounter.Provider>
  );
};

BasicLayout.defaultProps = {
  logo:
    'https://raw.githubusercontent.com/machinaai/pro-layout/nbe-layout/src/assets/logo/nbe-logo.svg',
  ...defaultSettings,
  prefixCls: 'ant-pro',
  siderWidth: 220,
  location: isBrowser() ? window.location : undefined,
};
export default BasicLayout;
