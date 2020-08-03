import pathToRegexp from 'path-to-regexp';
import { MenuDataItem } from './typings';
import { ProSettings } from './defaultSettings';

export const matchParamsPath = (
  pathname: string,
  breadcrumb?: { [path: string]: MenuDataItem },
  breadcrumbMap?: Map<string, MenuDataItem>,
): MenuDataItem => {
  // Internal logic use breadcrumbMap to ensure the order
  // La lógica interna utiliza breadcrumbMap para garantizar el orden de las consultas.
  if (breadcrumbMap) {
    const pathKey = [...breadcrumbMap.keys()].find(key =>
      pathToRegexp(key).test(pathname),
    );
    if (pathKey) {
      return breadcrumbMap.get(pathKey) as MenuDataItem;
    }
  }

  // External users use breadcrumb
  // Usuarios externos usan breadcrumb
  if (breadcrumb) {
    const pathKey = Object.keys(breadcrumb).find(key =>
      pathToRegexp(key).test(pathname),
    );

    if (pathKey) {
      return breadcrumb[pathKey];
    }
  }

  return {
    path: '',
  };
};

export interface GetPageTitleProps {
  pathname?: string;
  breadcrumb?: { [path: string]: MenuDataItem };
  breadcrumbMap?: Map<string, MenuDataItem>;
  menu?: ProSettings['menu'];
  title?: ProSettings['title'];
  pageName?: string;
  formatMessage?: (data: { id: any; defaultMessage?: string }) => string;
}

const getPageTitle = (props: GetPageTitleProps, ignoreTile?: boolean) => {
  const {
    pathname = '/',
    breadcrumb,
    breadcrumbMap,
    formatMessage,
    title = 'React Designer',
    menu = {
      locale: false,
    },
  } = props;
  const pageTitle = ignoreTile ? '' : title;
  if (!pathname) {
    return pageTitle;
  }
  const currRouterData = matchParamsPath(pathname, breadcrumb, breadcrumbMap);
  if (!currRouterData) {
    return pageTitle;
  }
  let pageName = currRouterData.name;
  if (menu.locale !== false && currRouterData.locale && formatMessage) {
    pageName = formatMessage({
      id: currRouterData.locale || '',
      defaultMessage: currRouterData.name,
    });
  }

  if (!pageName) {
    return pageTitle;
  }
  if (ignoreTile) {
    return pageName;
  }
  return `${pageName} - ${title}`;
};

/**
 * Obtenga toda la información sobre pageTile para un empaquetado sencillo
 * @param props
 * @param ignoreTile
 */
const getPageTitleInfo = (
  props: GetPageTitleProps,
  ignoreTile?: boolean,
): {
  // Título de la página
  title: string;
  // local de title
  id: string;
  // Título de la página sin valor predeterminado
  pageName: string;
} => {
  const {
    pathname = '/',
    breadcrumb,
    breadcrumbMap,
    formatMessage,
    title = 'React Designer',
    menu = {
      locale: false,
    },
  } = props;
  const pageTitle = ignoreTile ? '' : title;
  if (!pathname) {
    return {
      title: pageTitle,
      id: '',
      pageName: pageTitle,
    };
  }
  const currRouterData = matchParamsPath(pathname, breadcrumb, breadcrumbMap);
  if (!currRouterData) {
    return {
      title: pageTitle,
      id: '',
      pageName: pageTitle,
    };
  }
  let pageName = currRouterData.name;
  if (menu.locale !== false && currRouterData.locale && formatMessage) {
    pageName = formatMessage({
      id: currRouterData.locale || '',
      defaultMessage: currRouterData.name,
    });
  }

  if (!pageName) {
    return {
      title: pageTitle,
      id: currRouterData.locale || '',
      pageName: pageTitle,
    };
  }
  if (ignoreTile) {
    return {
      title: pageName,
      id: currRouterData.locale || '',
      pageName,
    };
  }
  return {
    title: `${pageName} - ${title}`,
    id: currRouterData.locale || '',
    pageName,
  };
};

export { getPageTitleInfo };

export default getPageTitle;
