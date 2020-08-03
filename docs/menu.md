---
title: Capacidades del Menú
order: 9
side: false
nav:
  title: Capacidades del Menú
  order: 1
---

# menu Varias operaciones

ProLayout proporciona un Menú potente, pero esto inevitablemente encapsulará muchos comportamientos, causando insatisfacción con los usuarios que necesitan una lógica especial. Por lo tanto, proporcionamos muchas API, con la esperanza de satisfacer a la mayoría de las necesidades.

## Cargar menu desde el servidor 

Las principales API utilizadas para cargar el Menú desde el servidor son `menuDataRender` y `menuRender`, `menuDataRender` puede controlar los datos del Menú actual y `menuRender` puede controlar el nodo dom del Menú.
<code src="./demo/dynamicMenu.tsx" />

## Carguar el Menú desde el servidor y uso del ícono

Esto es principalmente una demostración, necesitamos preparar una enumeración para representar el ícono, lo que puede reducir significativamente el tamaño del paquete

<code src="./demo/antd@4MenuIconFormServe.tsx" />

## Personaliza el contenido del Menú

A través de `menuItemRender`,` subMenuItemRender`, `title`,` logo`, `menuHeaderRender`, puede personalizar fácilmente el estilo del Menú. Si realmente no está satisfecho, puede usar `menuRender` para personalizarlo por completo.

<code src="./demo/customizeMenu.tsx" />

## Interoperabilidad con Material

<code src="./demo/materialMenu.tsx" />

## Menú completamente colapsado

<code src="./demo/hideMenu.tsx" />

## Visualización de API relacionada

| Parámetro | Descripción | Tipo | Valores predeterminados |
| --- | --- | --- | --- |
| title | El título en la esquina superior izquierda del diseño. | ReactNode | `'React Designer'` |
| logo | La url del logotipo en la esquina superior izquierda del diseño. | ReactNode \| ()=>ReactNode | - |
| loading | Estado de carga | boolean | - |
| menuHeaderRender | Renderiza el logo y el título | ReactNode \| (logo,title)=>ReactNode | - |
| menuRender | Método de renderizado del Menú personalizado | (props: HeaderViewProps) => ReactNode | - |
| layout | Modo del Menú, side：Navegación derecha，top：Navegación superior, mix: Navegación combinada a la izquierda y arriba | 'side' \| 'top' \| 'mix' | `'side'` |
| breakpoint | Punto de ruptura para el layout responsivo[breakpoint](https://ant.design/components/grid/#Col) | `Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' }` | `lg` |
| menuItemRender | El método de representación del elemento de Menú personalizado | (itemProps: MenuDataItem) => ReactNode | - |
| subMenuItemRender | Personalice el método de representación que tiene elementos de subMenú | (itemProps: MenuDataItem) => ReactNode | - |
| menu | En cuanto a la configuración del Menú, solo la configuración regional y local pueden desactivar la internacionalización del Menú | { locale: boolean, defaultOpenAll: boolean } | `{ locale: true }` |
| iconfontUrl | utilizar [IconFont](https://ant.design/components/icon-cn/#components-icon-demo-iconfont) para configurar los iconos | string | - |
| siderWidth | Ancho del Menú lateral | number | 256 |
| collapsed | Controla el colapso y la expansión del Menú. | boolean | true |
| onCollapse | Colapso y evento de colapso del Menú | (collapsed: boolean) => void | - |
| disableMobile | Deshabilitar el cambio automático a la página móvil | boolean | false |
| links | Accesos directos que se muestran en la esquina inferior derecha del Menú | ReactNode[] | - |
| menuProps | Las propiedades pasaron al componente del Menú antd, referencia (https://ant.design/components/menu/) | MenuProps | undefined |

ProLayout admite la mayoria de las propuedades de [Menu](https://ant.design/components/menu-cn/#Menu) através de `menuProps` 
