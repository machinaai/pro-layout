/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Switch, Avatar } from 'antd';
import ProLayout, {
  PageContainer,
  DefaultFooter,
} from '@machinaai/pro-layout';
import defaultProps from './defaultProps';

export default () => {
  const [loading, setLoading] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [menu, setMenu] = useState(true);
  const [header, setHeader] = useState(true);
  const [footer, setFooter] = useState(true);
  const [menuHeader, setMenuHeader] = useState(true);
  const [right, setRight] = useState(true);
  const [pure, setPure] = useState(false);
  const [collapsedButtonRender, setCollapsedButtonRender] = useState(true);
  return (
    <>
      <Switch
        checked={loading}
        onChange={(e) => setLoading(e)}
        style={{
          margin: 8,
        }}
      />
      loading...
      <Switch
        checked={collapsed}
        onChange={(e) => setCollapsed(e)}
        style={{
          margin: 8,
        }}
      />
      Layout plegable
      <Switch
        checked={menu}
        onChange={(e) => setMenu(e)}
        style={{
          margin: 8,
        }}
      />
      Muestrame el Menú
      <Switch
        checked={collapsedButtonRender}
        onChange={(e) => setCollapsedButtonRender(e)}
        style={{
          margin: 8,
        }}
      />
      Mostrar botón de colapso
      <Switch
        checked={header}
        onChange={(e) => setHeader(e)}
        style={{
          margin: 8,
        }}
      />
      Mostrar barra superior
      <Switch
        checked={menuHeader}
        onChange={(e) => setMenuHeader(e)}
        style={{
          margin: 8,
        }}
      />
      Mostrar encabezado de Menú
      <Switch
        checked={footer}
        onChange={(e) => setFooter(e)}
        style={{
          margin: 8,
        }}
      />
      Mostrar Pié de Página
      <Switch
        checked={right}
        onChange={(e) => setRight(e)}
        style={{
          margin: 8,
        }}
      />
      Mostrar el lado derecho de la barra superior
      <Switch
        checked={pure}
        onChange={(e) => setPure(e)}
        style={{
          margin: 8,
        }}
      />
      Modo refrescante
      <br />
      <br />
      <ProLayout
        {...defaultProps}
        style={{
          height: 500,
        }}
        menuHeaderRender={menuHeader ? undefined : false}
        headerRender={header ? undefined : false}
        collapsedButtonRender={collapsedButtonRender ? undefined : false}
        menuRender={(_, dom) => (menu ? dom : null)}
        breakpoint={false}
        collapsed={collapsed}
        loading={loading}
        onCollapse={setCollapsed}
        rightContentRender={() =>
          right ? (
            <div>
              <Avatar src="https://raw.githubusercontent.com/machinaai/logos/master/architect.png" />
            </div>
          ) : null
        }
        location={{
          pathname: '/welcome',
        }}
        pure={pure}
        footerRender={() => (footer ? <DefaultFooter /> : null)}
      >
        <PageContainer content="Bienvenido">Hello World</PageContainer>
      </ProLayout>
    </>
  );
};
