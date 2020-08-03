---
title: Introducción
order: 10
side: false
hero:
  title: ProLayout
  desc: 🏆 Use Pro-Layuout like a Pro!
  actions:
    - text: Inicio Rápido →
      link: /getting-started
features:
  - icon: https://raw.githubusercontent.com/machinaai/logos/master/demo/13668549-b393-42a2-97c3-a6365ba87ac2_w96_h96.png
    title: Fácil de usar
    desc: Componente de diseño listo para usar, puede generar diseño en un solo paso
  - icon: https://raw.githubusercontent.com/machinaai/logos/master/prototype_small.png
    title: Sistema de Diseño
    desc: En línea con el sistema de diseño, facil de acoplar
  - icon: https://raw.githubusercontent.com/machinaai/logos/master/demo/89434dcf-5f1d-4362-9ce0-ab8012a85924_w96_h96.png
    title: Internacionalización
    desc: Proporciona soporte completo de idiomas internacionales 
  - icon: https://raw.githubusercontent.com/machinaai/logos/master/demo/A_-3XMTrwP85wAAAAAAAAAAABkARQnAQ.png
    title: Estilo por Defecto
    desc: El estilo y el layout están en la misma línea no se necesita ningún cambio adicional
  - icon: https://raw.githubusercontent.com/machinaai/logos/master/demo/decadf3f-b53a-4c48-83f3-a2faaccf9ff7_w96_h96.png
    title: Comportamiento por defecto
    desc: La ruta puede generar Menús y breadcrumbs por defecto, y actualizar automáticamente el título del navegador
  - icon: https://raw.githubusercontent.com/machinaai/logos/master/demo/67f75d56-0d62-47d6-a8a5-dbd0cb79a401_w96_h96.png
    title: Typescript
    desc: Utilice TypeScript para desarrollar, utilizando una definición de tipo de dato completo

footer: Copyright © 2020-present
---

## Cómo utilizar

```bash
npm i @machinaai/pro-layout --save
// or
yarn add @machinaai/pro-layout
```

```jsx | pure
import BasicLayout from '@machinaai/pro-layout';

render(<BasicLayout />, document.getElementById('root'));
```

## Ejemplo

[site](https://designer.reboot.vc)

# Uso básico

ProLayout tendrá el mejor efecto cuando se use en conjunto con umi. Umi inyectará automáticamente las rutas en config.ts en el diseño configurado para que podamos evitar la molestia de escribir Menús a mano.

ProLayout extiende la configuración del enrutador de umi, agregando nuevas configuraciones como nombre, icono, configuración regional, hideInMenu, hideChildrenInMenu, etc., para que los Menús se puedan generar de manera más conveniente y configurarse en un solo lugar. El formato de datos es el siguiente:

```ts | pure
export interface MenuDataItem {
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: string;
  locale?: string;
  name?: string;
  path: string;
  [key: string]: any;
}
```

ProLayout seleccionará automáticamente el Menú de acuerdo con `location.pathname` y generará automáticamente los breadcrumbs correspondientes. Si no desea utilizarlo, puede configurar usted mismo `selectedKeys` y `openKeys` para una configuración controlada.
## Demo

<code src="./demo/base.tsx" />
