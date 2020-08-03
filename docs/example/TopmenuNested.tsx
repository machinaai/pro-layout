import React from 'react';
// eslint-disable-next-line import/no-unresolved
import ProLayout, { PageContainer } from '@machinaai/pro-layout';
import complexMenu from './complexMenu';

export default () => (
  <div
    style={{
      height: 400,
      overflow: 'auto',
    }}
  >
    <ProLayout
      location={{
        pathname: '/articles/new',
      }}
      route={{
        routes: complexMenu,
      }}
      disableContentMargin
      layout="top"
    >
      <ProLayout
        location={{
          pathname: '/home/overview',
        }}
        route={{
          routes: complexMenu,
        }}
        navTheme="light"
        menuHeaderRender={false}
      >
        <PageContainer content="Bienvenido">
          <div>Hello World</div>
        </PageContainer>
      </ProLayout>
    </ProLayout>
  </div>
);
