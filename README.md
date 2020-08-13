English | [changelog](./changelog.en-US.md)

![](https://codecov.io/gh/ant-design/nbe-layout/branch/master/graph/badge.svg) [![](https://img.shields.io/npm/dw/@machinaai/nbe-layout.svg)](https://www.npmjs.com/package/@machinaai/nbe-layout) [![npm package](https://img.shields.io/npm/v/@machinaai/nbe-layout.svg?style=flat-square?style=flat-square)](https://www.npmjs.com/package/@machinaai/nbe-layout) [![](https://img.shields.io/github/issues/ant-design/nbe-layout.svg)](https://github.com/machinaai/nbe-layout/issues)

<h1 align="center">React Designer Layout</h1>

<div align="center">

![image](https://raw.githubusercontent.com/machinaai/logos/master/demo/screen_demo.gif)

An out-of-box UI solution for enterprise applications as a React boilerplate. This repository is the layout of React Designer and was developed for quick and easy use of the layout.

</div>

## Usage

```bash
npm i @machinaai/nbe-layout --save
// or
yarn add @machinaai/nbe-layout
```

```jsx | pure
import ProLayout from '@machinaai/nbe-layout';

render(<ProLayout />, document.getElementById('root'));
```

## Demo

[site](https://ant-design.github.io/nbe-layout/)

## API

### ProLayout

> All methods with the suffix `Render` can prevent rendering by passing in `false`.

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| title | layout in the upper left corner title | ReactNode | `'React Designer'` |
| logo | layout top left logo url | ReactNode \| ()=>ReactNode | - |
| pure | Interface that doesn't require extra ui | boolean | - |
| loading | layout loading status | boolean | - |
| menuHeaderRender | render logo and title | ReactNode \| (logo,title)=>ReactNode | - |
| onMenuHeaderClick | menu header click event | `(e: React.MouseEvent<HTMLDivElement>) => void` | - |
| contentStyle | layout content style | CSSProperties | - |
| layout | layout menu mode, side: right navigation, top: top navigation | 'side' \| 'top' | `'side'` |
| contentWidth | content mode of layout, Fluid: fixed width 1200px, Fixed: adaptive | 'Fluid' \| 'Fixed' | `'Fluid'` |
| navTheme | Navigation menu theme | 'light' \| 'dark' | `'dark'` |
| fixedHeader | whether to fix header to top | boolean | `false` |
| fixSiderbar | Whether to fix navigation menu | boolean | `false` |
| breakpoint | [breakpoints](https://ant.design/components/grid/#api) of the responsive layout | `Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' }` | `lg` |
| menu | About the configuration of the menu, only locale, locale can turn off the globalization of the menu | { locale: boolean,defaultOpenAll: boolean } | `{ locale: true }` |
| iconfontUrl | Use [IconFont](https://ant.design/components/icon-cn/#components-icon-demo-iconfont) icon configuration | string | - |
| locale | The language setting of the layout | 'es-ES' \| 'zh-TW' \| 'en-US' | navigator.language |
| settings | layout settings | [`Settings`](#Settings) | [`Settings`](#Settings) | - |
| siderWidth | width of sider menu | number | 256 |
| collapsed | control menu's collapse and expansion | boolean | true |
| onPageChange | Triggered when page switching | (location: Location) => void | - |
| onCollapse | folding collapse event of menu | (collapsed: boolean) => void | - |
| headerRender | custom header render method | (props: BasicLayoutProps) => ReactNode | - |
| headerTitleRender | custom header title render method | (props: BasicLayoutProps) => ReactNode | - |
| headerContentRender | custom header content render method | (props: BasicLayoutProps) => ReactNode | - |
| rightContentRender | header right content render method | (props: HeaderViewProps) => ReactNode | - |
| collapsedButtonRender | custom collapsed button method | (collapsed: boolean) => ReactNode | - |
| footerRender | custom footer render method | (props: BasicLayoutProps) => ReactNode | - |
| pageTitleRender | custom page title render method | (props: BasicLayoutProps) => ReactNode | - |
| menuRender | custom menu render method | (props: HeaderViewProps) => ReactNode | - |
| menuDataRender | The render method of menuData, with the definition of menuData | `(menuData: MenuDataItem[]) => MenuDataItem[]` | - |
| postMenuData | View the menu data before displaying it. Modification will not trigger re-rendering. | `(menuData: MenuDataItem[]) => MenuDataItem[]` | - |
| postMenuData |
| menuItemRender | the render method of a custom menu item | [(itemProps: MenuDataItem) => ReactNode](#MenuDataItem) | - |
| subMenuItemRender | the render method of a custom subMenu item | [(itemProps: MenuDataItem) => ReactNode](#MenuDataItem) | - |
| breadcrumbRender | custom breadcrumbs data | (route)=>route | - |
| route | Used to assist in the generation of menu and bread crumbs. Umi will automatically bring | [route](#Route) | - |
| disableMobile | Disable automatic switch to mobile mode | boolean | false |
| links | Shortcuts displayed in the lower right corner of the menu | ReactNode[] | - |
| menuProps | Props passed to ANTD MENU, SEE (https://ant.design/components/menu-cn/) | MenuProps | undefined |

Layout support for most of [Menu](https://ant.design/components/menu-cn/#Menu) by `menuProps` after 4.5.13.

### SettingDrawer

```js | pure
import { SettingDrawer } from '@machinaai/nbe-layout';
```

> SettingDrawer provides a graphical interface to set the layout configuration. Not recommended for use in a product environment.

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| settings | layout settings | [`Settings`](#Settings) | [`Settings`](#Settings) | - |
| onSettingChange | The setting changes event | (settings: [Settings](#Settings)) => void | - |
| hideHintAlert | remove hint info | boolean | - |

### PageContainer

PageContainer encapsulates the PageHeader component of ant design, adds tabList, and content. Fill in the title and breadcrumb based on the current route. It depends on the route property of the Layout. Of course you can pass in parameters to override the default values. PageContainer supports all the attributes of [Tabs](https://ant.design/components/tabs-cn/) and [PageHeader](https://ant.design/components/page-header-cn/).

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| content | Content area | ReactNode | - |
| extraContent | Extra content area, on the right side of content | ReactNode | - |
| tabList | Tabs title list | `Array<{key: string, tab: ReactNode}>` | - |
| tabActiveKey | The currently highlighted tab item | string | - |
| onTabChange | Switch panel callback | `(key) => void` | - |
| tabBarExtraContent | Extra elements on the tab bar | React.ReactNode | - |

### PageLoading

a simple loading page

| Property | Description | Type      | Default Value |
| -------- | ----------- | --------- | ------------- |
| tip      | loading tip | ReactNode | -             |

### RouteContext

RouteContext can provide built-in data for Layout. For example, isMobile and collapsed, you can consume this data to customize some behavior.

```tsx | pure
import { RouteContext, RouteContextType } from '../index';

const Page = () => (
  <RouteContext.Consumer>
    {(value: RouteContextType) => {
      return value.title;
    }}
  </RouteContext.Consumer>
);
```

### GridContent

GridContent encapsulates [equal width](https://designer.reboot.vc//dashboard/analysis?layout=top&contentWidth=Fixed) and [Fluido](https://designer.reboot.vc//dashboard/) The logic of analysis?layout=top). You can see the preview in [preview](https://designer.reboot.vc//dashboard/analysis).

| Property     | Description  | Type               | Default Value |
| ------------ | ------------ | ------------------ | ------------- |
| contentWidth | Content mode | 'Fluid' \| 'Fixed' | -             |

### getMenuData

Generate menuData and breadcrumb based on the router information.

```js | pure
import { getMenuData } from '@machinaai/nbe-layout';

const { breadcrumb, menuData } = getMenuData(
  routes,
  menu,
  formatMessage,
  menuDataRender,
);
```

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| routes | Routing configuration information | [route[]](#Route) | - |
| menu | Menu configuration item, default `{locale: true}` | `{ locale: boolean }` | - |
| menuDataRender | The render method of menuData, with the definition of menuData | `(menuData: MenuDataItem[]) => MenuDataItem[]` | - |
| formatMessage | The formatMessage method of react-intl | `(data: { id: any; defaultMessage?: string }) => string;` | - |

### getPageTitle

```js | pure
import { getPageTitle } from '@machinaai/nbe-layout';

const title = getPageTitle({
  pathname,
  breadcrumb,
  menu,
  title,
  formatMessage,
});
```

getPageTitle encapsulates the logic based on the title generated on menuData.

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| pathname | Current pathname | location.pathname | - |
| breadcrumb | Collection of MenuDataItem | `{ [path: string]: MenuDataItem }` | - |
| menu | Menu configuration item, default `{locale: true}` | `{ locale: boolean }` | - |
| title | Type of title | string | 'React Designer' |
| formatMessage | The formatMessage method of react-intl | `(data: { id: any; defaultMessage?: string }) => string;` | - |

## Data Structure

> For ease of viewing and use, Typescript is used here to write.

### Settings

```ts | pure
// can be done via import { Settings } from '@machinaai/nbe-layout/defaultSettings' to get this type

export interface Settings {
  /**
   * theme for nav menu
   */
  navTheme: 'light' | 'dark';
  /**
   * primary color of ant design
   */
  primaryColor: string;
  /**
   * nav menu position: `side` or `top`
   */
  layout: 'side' | 'top';
  /**
   * layout of content: `Fluid` or `Fixed`, only works when layout is top
   */
  contentWidth: 'Fluid' | 'Fixed';
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
  pwa: boolean;
  // Your custom iconfont Symbol script Url
  // eg：//at.alicdn.com/t/font_1039637_btcrd5co4w.js
  // Usage: https://github.com/machinaai/ant-design-pro/pull/3517
  iconfontUrl: string;
  colorWeak: boolean;
}
```

### MenuDataItem

```ts | pure
// can be imported { MenuDataItem } from '@machinaai/nbe-layout/typings' to get this type

export interface MenuDataItem {
  authority?: string[] | string;
  children?: MenuDataItem[];
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: string;
  locale?: string;
  name?: string;
  path: string;
  [key: string]: any;
}
```

### Route

```ts | pure
// can be imported { RouterTypes } from '@machinaai/nbe-layout/typings'  to get this type
export interface Route {
  path: string;
  routes: Array<{
    exact?: boolean;
    icon: string;
    name: string;
    path: string;
    // optional secondary menu
    children?: Route['routes'];
  }>;
}
```

## Contributing

Any type of contribution is welcome, here are some examples of how you may contribute to this project:

- Use React Designer in your daily work.
- Submit [issues](http://github.com/ant-design/ant-design-pro/issues) to report bugs or ask questions.
- Propose [pull requests](http://github.com/ant-design/ant-design-pro/pulls) to improve our code.
