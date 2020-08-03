---
title: Inicio Rápido
order: 9
side: false
nav:
  title: Inicio Rápido
  order: 0
---

ProLayout es una herramienta para ayudar en el diseño general del marco de página, es indispensable en cada proyecto, y es muy similar multiples proyectos. Así que abstrajimos ProLayout para reducir la duplicación de código

## Diseño

La capacidad básica del diseño es el Layout: en ProLayout, extrajimos tres métodos de diseñoÑ `side`,` top` y `mix`. Podemos usar propiedades para cambiarlos, y se puede ver un ejemplo simplen [aquí](http://localhost:8000/_demos/base).

### modo side

![side](https://raw.githubusercontent.com/machinaai/logos/master/demo/64038246-E2BF-4840-8898-5AF531897A44.png)

### modo top

![top](https://raw.githubusercontent.com/machinaai/logos/master/demo/F12A0CEC-3DBC-4815-851C-1120B91827A5.png)

### modo mix

![mix](https://raw.githubusercontent.com/machinaai/logos/master/demo/BECE52FC-BD40-4F2A-AE40-8E7ECD02760F.png)

## Custom layout

ProLayout proporciona algunas API para eliminar áreas que los usuarios no necesitan. Algunas configuraciones también se proporcionan en SettingDrawer para la configuración.

![setting-drawer-render](https://raw.githubusercontent.com/machinaai/logos/master/demo/60298863-F5A5-4af2-923A-13EF912DB0E1.png)

- `headerRender` Permite personalizar la barra superior
- `footerRender` Permite personalizar el Pié de Página
- `menuRender` Puede personalizar el área del Menú
- `menuHeaderRender` Área de encabezado de Menú personalizado
- `menuExtraRender` Puede agregar un contenido adicional al Menú, entre el encabezado del Menú y el Menú

> Todo xxxRender en el diseño se puede pasar a falso para desactivar el renderizado.

### Contraer Expandir

A veces nos daremos cuenta de que las configuraciones `collapsed` y` onCollapse` no surten efecto de forma predeterminada. Esto se debe a que ProLayout tiene un `breakpoint` incorporado para activar el mecanismo de colapso, podemos configurar `breakpoint={false}` para apagar Este mecanismo

### Personaliza el ancho del Menú

SiderWidth puede personalizar el ancho del Menú. Puede configurarlo para que sea más corto o más largo. Componentes como FooterToolbar lo admitirán automáticamente, pero puede ser necesario un procesamiento de estilo, de lo contrario la visualización del Menú puede tener algunos problemas menores.

El ancho retraído del Menú no se puede personalizar, porque involucra animación y una gran cantidad de cambios de CSS.

### Menú de division automática.

El Menú dividido es la capacidad exclusiva del modo "mix". Puede colocar el Menú de primer nivel en la barra superior. Podemos configurar `splitMenus=true` para abrirlo. Para una buena experiencia, es mejor establecer una redirección para cada Menú de primer nivel, a fin de evitar el cambio a una página de pantalla en target.

![Menú dividido](https://raw.githubusercontent.com/machinaai/logos/master/demo/5438EB45-27F8-4B4F-8740-54F7BE55075C.png)

## Menú personalizado

ProLayout generará automáticamente un Menú y lo seleccionará automáticamente en función del nombre de la ruta. Coopera con PageContainer para calcular automáticamente los breadcrumbs y el título de la página. Si lo usa con la configuración umi, solo necesita pasar los parámetros de Página a ProLayout, y la configuración del Menú puede generarse automáticamente de acuerdo con la configuración de los enrutadores en la configuración.

Para proporcionar más funciones, hemos ampliado la configuración de los enrutadores y agregado varias configuraciones para facilitar la personalización. La estructura de datos se define de la siguiente manera:

```ts | pure
// Se puede importar con: import { MenuDataItem } from '@machinaai/pro-layout'
// para obtener este tipo
export interface MenuDataItem {
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

- name Se usa para configurar el nombre en el Menú y se modificará al título de la pestaña del navegador
- icon Representa la tabla del cuerpo del Menú, solo el gráfico antd, iconfont debe ser definido por usted mismo
- locale Puede establecer la representación internacionalizada del nombre del Menú.
- hideInMenu Esta ruta se configurará en el Menú para ocultar esta ruta, dejar el nombre en blanco tendrá el mismo efecto.
- hideChildrenInMenu Ocultará los nodos secundarios de esta ruta en el Menú

> ProLayout usa realidad la ruta y la ubicación como propiedades de solo lectura. Estos dos atributos son inyectados por umi por defecto.

### Obtener del servidor

A veces queremos que el servidor administre nuestro enrutamiento, por lo que queremos que el servidor distribuya los datos del Menú. Proporcionamos `menuDataRender` para modificar los datos, pero tenga en cuenta que `menuDataRender` activará la renderización y también admitirá la configuración de internacionalización y permisos. Si no necesita internacionalización, se recomienda utilizar `postMenuData` para mejorar significativamente el comportamiento.

Los datos que el servidor necesita devolver son los mismos que los de `MenuDataItem`. `MenuDataRender` necesita devolver una matriz. Si desea tener un mejor rendimiento, puede intentar usar la propiedad de ruta. Aquí hay un [demo](/menu)。

## PageContainer

PageContainer es para reducir la configuración y el título complicados de la ruta de exploración. Muchas páginas requieren la configuración de la ruta de exploración y el título. Por supuesto, puede desactivar la generación automática y usar su propia configuración.

![PageContainer](https://raw.githubusercontent.com/machinaai/logos/master/demo/BBFF4972-8CD0-47C3-AFA8-FD67171A9A45.png)

PageContainer es para reducir la configuración y el título complicados de la ruta de exploración. Muchas páginas requieren la configuración de la ruta de exploración y el título. Por supuesto, puede desactivar la generación automática y usar su propia configuración.

Para facilitar operaciones como los formularios, hemos agregado un atributo de Pié de Página para obtener una barra de operaciones que ha estado flotando en la parte inferior. Si le resulta inconveniente, puede usar directamente FooterToolbar para llevar las operaciones. El rendimiento de los dos es básicamente el mismo, pero FooterToolbar tiene configuraciones más personalizadas.

```tsx | pure
<PageContainer
  content="Bienvenido al componente ProLayout"
  tabList={[
    {
      tab: 'Información básica',
      key: 'base',
    },
    {
      tab: 'detalles',
      key: 'info',
    },
  ]}
  extra={[
    <Button key="3">Opción 1</Button>,
    <Button key="2">Opción 2</Button>,
    <Button key="1" type="primary">
      Operación principal
    </Button>,
  ]}
  footer={[<Button>Reiniciar</Button>, <Button type="primary">Enviar</Button>]}
>
  {children}
</PageContainer>
```

## Footer

El Pié de Página generalmente muestra cierta información de la compañía y de los derechos de autor.

```tsx | pure
<Footer
  copyright="Copyrigth 2020"
  links={[
    {
      key: 'React Designer',
      title: 'React Designer',
      href: 'https://designer.reboot.vc',
      blankTarget: true,
    },
    {
      key: 'github',
      title: <GithubOutlined />,
      href: 'https://github.com/machinaai/ant-design-pro',
      blankTarget: true,
    },
    {
      key: 'Protype',
      title: 'Prototype',
      href: 'https://prorotype.mx',
      blankTarget: true,
    },
  ]}
/>
```

## GridContent

GridContent es un simple azúcar sintáctico que encapsula la configuración `contentWidth` de ProLayout. Si `contentWidth` está configurado en modo de ancho fijo `Fixed`, el ancho máximo es solo` 1200px`.

Cómo utilizar：

```tsx | pure
<GridContent>{children}</GridContent>
```

## Uso avanzado

RouteContext proporciona una forma de realizar algunas operaciones basadas en datos de diseño: PageContainer y FooterToolbar dependen de los datos de RouteContext para implementar funciones.

```tsx | pure
import { RouteContext, RouteContextType } from '@machinaai/pro-layout';

const Page = () => (
  <RouteContext.Consumer>
    {(value: RouteContextType) => {
      const { isMobile, hasHeader, hasSiderMenu, collapsed } = value;
      // Titulo del usuario
      return value.title;
    }}
  </RouteContext.Consumer>
);
```

- [API](/api)
- [Menú de demo](/menu)
- [Pié de Página](/footer)
- [Más ejemplos](/example)
