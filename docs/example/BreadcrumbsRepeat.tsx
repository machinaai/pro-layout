import React from 'react';
// eslint-disable-next-line import/no-unresolved
import ProLayout, { PageContainer } from '@machinaai/pro-layout';

export default () => (
  <div
    style={{
      height: 400,
      overflow: 'auto',
    }}
  >
    <ProLayout
      location={{
        pathname: '/admin/process/edit/123',
      }}
      menuDataRender={() => [
        {
          path: '/welcome',
          name: 'Bienvenido',
        },
        {
          path: '/admin',
          name: 'Administración',
          children: [
            {
              name: 'Lista de aplicaciones',
              path: '/admin/process',
            },
            {
              name: 'Detalles del formulario de solicitud',
              path: '/admin/process/detail/:id',
              hideInMenu: true,
            },
            {
              name: 'Editar formulario de solicitud',
              path: '/admin/process/edit/:id',
              hideInMenu: true,
            },
            {
              name: 'Agregar formulario de solicitud',
              path: '/admin/process/add',
              hideInMenu: true,
            },
          ],
        },
      ]}
    >
      <PageContainer content="Bienvenido">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);
