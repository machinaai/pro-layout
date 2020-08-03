---
title: Pié de Página
order: 7
side: false
nav:
  title: Pié de Página
  order: 7
---

# footer Varias operaciones

ProLayout no proporciona Pié de Página de forma predeterminada. debe introducir el Pié de Página de manera manual

## Pié de Página personalizado

<code src="./demo/footer.tsx" />

## Visualización de API relacionada

### ProLayout

| Parámetro | Descripción | Tipo | Valores predeterminados |
| --- | --- | --- | --- |
| footerRender | Personalizar el método de renderizado del Pié de Página | (props: BasicLayoutProps) => ReactNode | - |

### DefaultFooter

| Parámetro | Descripción | Tipo | Valores predeterminados |
| --- | --- | --- | --- |
| links | Algunos de los predeterminados | false \| `{key:string,title:string,href:string}[]` | - |
| copyright | Texto de aviso de copyright | ReactNode | - |
