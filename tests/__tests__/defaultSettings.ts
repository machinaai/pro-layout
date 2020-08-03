import { MenuProps } from 'antd/es/menu';

export type ContentWidth = 'Fluid' | 'Fixed';

export interface Settings {
  /**
   * theme for nav menu
   */
  navTheme: MenuProps['theme'] | undefined;
  /**
   * nav menu position: `sidemenu` or `topmenu`
   */
  layout: 'sidemenu' | 'topmenu';
  /**
   * layout of content: `Fluid` or `Fixed`, only works when layout is topmenu
   */
  contentWidth: ContentWidth;
  /**
   * sticky header
   */
  fixedHeader: boolean;

  /**
   * sticky siderbar
   */
  fixSiderbar: boolean;
  menu: { locale: boolean };
  title: string;
  // Your custom iconfont Symbol script Url
  // eg：//at.alicdn.com/t/font_1039637_btcrd5co4w.js
  // Usage: https://github.com/machinaai/ant-design-pro/pull/3517
  iconfontUrl: string;
}

const defaultSettings: Settings = {
  navTheme: 'dark',
  layout: 'sidemenu',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: false,
  menu: {
    locale: true,
  },
  title: 'React Designer',
  iconfontUrl: '',
};
export default defaultSettings;
