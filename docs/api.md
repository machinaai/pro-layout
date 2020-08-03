---
title: Pro-Layout API
order: 9
side: false
nav:
  title: API
  order: 1
---

# Layout API

Pro-Layout proporciona una API robusta para personalizar varios comportamientos. Como se muestra en la demostración a continuación.

## Demo

<code src="./demo/api.tsx" />

## API

> Todo método `Render` se puede pasar con el sufijo en `false` para evitar que se procese.

| Parámetros | Descripción | Tipo | Valor predeterminado |
| --- | --- | --- | --- |
| pure | Si se deben eliminar todas las interfaces integradas | boolean | - |
| title | El título en la esquina superior izquierda del diseño. | ReactNode | `'React Designer'` |
| logo | La url del logotipo en la esquina superior izquierda del diseño. | ReactNode \| ()=>ReactNode | - |
| loading | Estado de carga | boolean | - |
| menuHeaderRender | Renderiza el logo y el título | ReactNode \| (logo,title)=>ReactNode | - |
| onMenuHeaderClick | Evento de clic en la cabeza del Menú | `(e: React.MouseEvent<HTMLDivElement>) => void` | - |
| contentStyle | estilo de área de contenido de diseño | CSSProperties | - |
| layout | Modo de diseño de Menú, side: navegación derecha, mix: mezcla de navegación top: modo mixto| 'side' \| 'top' \| 'mix' | `'side'` |
| splitMenus | Ya sea para dividir automáticamente los datos del Menú, solo tendrá efecto el modo de mezcla | boolean | false |
| contentWidth |  Modo de contenido, Fluido: ancho fijo 1200px, Fijo: adaptativo | 'Fluid' \| 'Fixed' | `'Fluid'` |
| navTheme | Tema de navegación | 'light' \| 'dark' | `'dark'` |
| headerHeight | Altura personalizada del header | number | 48 |
| fixedHeader | Si se debe arreglar el encabezado en la parte superior | boolean | `false` |
| fixSiderbar | Si se debe fijar la barra de navegación | boolean | `false` |
| breakpoint | Activa un punto responsivo [Break Point](https://ant.design/components/grid-cn/#Col) | `Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' }` | `lg` |
| menu | En cuanto a la configuración del Menú, solo la configuración regional y local pueden desactivar la globalización del Menú | { locale: boolean, defaultOpenAll: boolean } | `{ locale: true }` |
| iconfontUrl | Configuración de iconos| string | - |
| locale | Configuración de idioma del diseño actual | 'es-ES' \| 'en-US' | navigator.language |
| settings | Configuración | [`Settings`](#Settings) | [`Settings`](#Settings) | - |
| siderWidth | Ancho del Menú lateral | number | 256 |
| collapsed | Controla el colapso y la expansión del Menú. | boolean | true |
| onCollapse | Colapso y evento de colapso del Menú | (collapsed: boolean) => void | - |
| headerRender | Método de renderizado de encabezado personalizado | (props: BasicLayoutProps) => ReactNode | - |
| itemRender | El nodo hijo de breadcrumbs personalizados, el nodo se usa de forma predeterminada | `(route: Route, params: any, routes: Array<Route>, paths: Array<string>) => React.ReactNode` | - |
| rightContentRender | Personaliza el método de renderizado a la derecha de la cabeza | (props: HeaderViewProps) => ReactNode | - |
| collapsedButtonRender | Cómo personalizar el botón contraído | (collapsed: boolean) => ReactNode | - |
| footerRender | Personalizar el método de renderizado del Pié de Página | (props: BasicLayoutProps) => ReactNode | - |
| pageTitleRender | Cómo personalizar el título de la página | (props: BasicLayoutProps) => ReactNode | - |
| menuRender | El método de renderizado del Menú personalizado | (props: HeaderViewProps) => ReactNode | - |
| menuContentRender | El método de representación del contenido del Menú. | (props: HeaderViewProps) => ReactNode | - |
| menuItemRender | El método de representación del elemento de Menú personalizado | [(itemProps: MenuDataItem) => ReactNode](#MenuDataItem) | - |  | subMenuItemRender | Personalice el método de representación que tiene elementos de subMenú | [(itemProps: MenuDataItem) => ReactNode](#MenuDataItem) | - |  | menuDataRender | El método de representación de menuData se utiliza para personalizar menuData| `(menuData: MenuDataItem[]) => MenuDataItem[]` | - |  | breadcrumbRender | Datos de breadcrumbs personalizados | (route)=>route | - |  | route | Se usa para generar Menús y breadcrumbs. El diseño de umi tendrá automáticamente | [route](#Route) | - |  | disableMobile | Impedir el cambio automático a la página móvil | boolean | false |  | links | Accesos directos que se muestran en la esquina inferior derecha del Menú | ReactNode[] | - |  | menuProps | Las propiedades pasaron al componente del Menú antd, referencia (https://ant.design/components/menu/) | MenuProps | undefined |

ProLayout admite la mayoria de las propuedades de [Menu](https://ant.design/components/menu/#Menu) através de `menuProps` 

### SettingDrawer

> SettingDrawer proporciona una interfaz gráfica para establecer la configuración del diseño. No se recomienda su uso en un entorno productivo.

| Parámetro | Descripción | Tipo | Valores predeterminados |
| --- | --- | --- | --- |
| settings |  Configuraciones | [`Settings`](#Settings) | [`Settings`](#Settings) | - |
| onSettingChange | [`Settings`](#Settings) Cambiar evento | (settings: [`Settings`](#Settings) ) => void | - |
| hideHintAlert | Ocultar el mensaje de Alerta | boolean | - |
| hideLoading | Eliminear la carga de mensaje cuando se cambia el tema | boolean | - |
| hideCopyButton | Eliminar el botón de Copiar Configuración | boolean | - |

### PageContainer

PageContainer encapsula el componente PageHeader y agrega tabList y contenido. Complete el título y la ruta de exploración de acuerdo con la ruta actual. Depende del atributo de ruta del diseño. Por supuesto, puede pasar parámetros para anular el valor predeterminado. PageContainer admite todos los atributos de [Tabs] y [PageHeader]

| Parámetro | Descripción | Tipo | Valores predeterminados |
| --- | --- | --- | --- |
| content | Área de contenido | ReactNode | - |
| extraContent | Área de contenido adicional, ubicada a la derecha del contenido | ReactNode | - |
| tabList | Lista de títulos | `Array<{key: string, tab: ReactNode}>` | - |
| tabActiveKey | Elemento de pestaña resaltado activa | string | - |
| onTabChange | Cambiar la funcion de llamada al cambiar la pestaña `(key) => void` | - |
| tabBarExtraContent | Elementos adicionales del tab bar | React.ReactNode | - |
| footer | La barra de operación en la parte inferior flotará hacia la parte inferior. | React.ReactNode[] | - |

### FooterToolbar

Igual que la configuración de Pié de Página de PageContainer, pero admite configuraciones cada vez más flexibles. Esta barra de acción se posiciona hasta el fondo.

| Parámetro | Descripción | Tipo | Valores predeterminados |
| --- | --- | --- | --- |
| extra | Área de contenido izquierda | ReactNode | - |
| children | Área de contenido derecha | ReactNode[] | - |
| renderContent | Área de contenido personalizado, puede hacer configuraciones más personalizadas | `renderContent?: (props,dom) => ReactNode;` | - |

### PageLoading

Una página de carga simple

| Parámetro | Descripción         | Tipo      | Valores predeterminados |
| ---- | ------------ | --------- | ------ |
| tip  | Pequeñas instrucciones al cargar | ReactNode | -      |

### RouteContext

RouteContext puede proporcionar datos integrados de diseño. Por ejemplo, isMobile y collapsed, puede consumir estos datos para personalizar algunos comportamientos.

```tsx | pure
import { RouteContext, RouteContextType } from '@machinaai/pro-layout';

const Page = () => (
  <RouteContext.Consumer>
    {(value: RouteContextType) => {
      return value.title;
    }}
  </RouteContext.Consumer>
);
```

### GridContent

GridContent encapsula componentes [Fijo] (https://designer.reboot.vc/dashboardanalysis?layout=top&contentWidth=Fixed) y [Fluido] (https://designer.reboot.vc/dashboardanalysis?layout=top). Puede verificar el efecto de vista previa en [vista previa] 

| Parámetro         | Descripción     | Tipo               | Valores predeterminados |
| ------------ | -------- | ------------------ | ------ |
| contentWidth | Modo de contenido | 'Fluid' \| 'Fixed' | -      |

### getMenuData

Genere menuData y breadcrumb según la información del enrutador.

```js
import { getMenuData } from '@machinaai/pro-layout';

const { breadcrumb, menuData } = getMenuData(
  routes,
  menu,
  formatMessage,
  menuDataRender,
);
```

| Parámetro | Descripción | Tipo | Valores predeterminados |
| --- | --- | --- | --- |
| routes | Información de configuración de enrutamiento | [route[]](#Route) | - |
| menu | Elementos de configuración del Menú, predeterminado `{locale: true}` | `{ locale: boolean }` | - |
| menuDataRender | El método de renderizado utiliza para personalizar menuData | `(menuData: MenuDataItem[]) => MenuDataItem[]` | - |
| formatMessage | Método formatMessage de react-intl | `(data: { id: any; defaultMessage?: string }) => string;` | - |

### getPageTitle

getPageTitle encapsula la lógica basada en el título generado en menuData.

```js
import { getPageTitle } from '@machinaai/pro-layout';

const title = getPageTitle({
  pathname,
  breadcrumb,
  menu,
  title,
  formatMessage,
});
```

| Parámetro | Descripción | Tipo | Valores predeterminados |
| --- | --- | --- | --- |
| pathname | pathname actual | location.pathname | - |
| breadcrumb | Colección de MenuDataItem | `{ [path: string]: MenuDataItem }` | - |
| menu | Elementos de configuración, por defecto `{locale: true}` | `{ locale: boolean }` | - |
| title | Titulo | string | 'React Designer' |
| formatMessage | Método formatMessage de react-intl | `(data: { id: any; defaultMessage?: string }) => string;` | - |

## Estructura de Datos

> Con el fin de facilitar la visualización y el uso, mecanografiado se utiliza aquí para escribir.

### Settings

```ts | pure
// Se puede importar con: import { Settings } from '@machinaai/pro-layout/defaultSettings'
// Para obtener este tipo
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
// Se puede importar con: import { MenuDataItem } from '@machinaai/pro-layout'
// para obtener este tipo

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
// Se puede importar con: import { RouterTypes } from '@machinaai/pro-layout/typings'
// para obtener este tipo
export interface Route {
  path: string;
  routes: Array<{
    exact?: boolean;
    icon: string;
    name: string;
    path: string;
    // Menú secundario opcional
    children?: Route['routes'];
  }>;
}
```
