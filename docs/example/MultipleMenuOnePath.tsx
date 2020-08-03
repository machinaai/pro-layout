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
        pathname: '/config/template/new',
      }}
      route={{
        routes: [
          {
            path: '/config',
            name: 'Centro de configuración',
            routes: [
              {
                path: 'product',
                name: 'Configuración del producto',
                indexRoute: {
                  component: 'ConfigProduct/index',
                },
                routes: [
                  {
                    path: 'new',
                    component: 'ConfigProduct/NewConfig',
                  },
                  {
                    path: 'edit/:productKey',
                    component: 'ConfigProduct/NewConfig',
                  },
                  {
                    path: 'detail/:productKey',
                    component: 'ConfigProduct/Detail',
                  },
                ],
              },
              {
                path: 'productManage',
                name: 'Administración del Producto',
                indexRoute: {
                  component: 'ConfigProductAll/index',
                },
                routes: [
                  {
                    path: 'detail/:productKey',
                    component: 'ConfigProductAll/Detail',
                  },
                ],
              },
              {
                path: 'template',
                name: 'Administración de plantillas',
                indexRoute: {
                  component: 'ConfigTemplate/index',
                },
                routes: [
                  {
                    path: 'new',
                    component: 'ConfigTemplate/NewConfig',
                  },
                  {
                    path: 'edit/:templateKey',
                    component: 'ConfigTemplate/NewConfig',
                  },
                  {
                    path: 'detail/:templateKey',
                    component: 'ConfigTemplate/Detail',
                  },
                ],
              },
              {
                path: 'configItem',
                name: 'Administración de plantillas de configuración',
                indexRoute: {
                  component: 'ConfigItem/index',
                },
                routes: [
                  {
                    path: 'new',
                    component: 'ConfigItem/NewConfig',
                  },
                  {
                    path: 'edit/:productKey',
                    component: 'ConfigItem/NewConfig',
                  },
                  {
                    path: 'detail/:productKey',
                    component: 'ConfigItem/Detail',
                  },
                ],
              },
              {
                path: 'meta',
                name: 'Administración de metadatos',
                component: 'ConfigMeta',
              },
            ],
          },
          {
            path: 'asset',
            name: 'Assets',
            routes: [
              {
                path: 'query',
                name: 'Consulta de Assets',
                component: 'Asset',
              },
              {
                path: 'collateral',
                name: 'Consulta de hipoteca',
                component: 'Collateral',
              },
            ],
          },
          {
            path: 'bill',
            name: 'Factura',
            routes: [
              {
                path: 'billNo',
                name: 'Número de factura',
                component: 'BillNo',
              },
              {
                path: 'bill',
                name: 'Consulta de facturas',
                component: 'Bill',
              },
              {
                path: 'billItem',
                name: 'Entrada de factura',
                component: 'BillItem',
              },
            ],
          },
          {
            path: 'cif',
            name: 'CIF',
            routes: [
              {
                path: 'bankAccount',
                name: 'Cuenta Bancaria',
                component: 'CifBankAccount',
              },
              {
                path: 'userGroup',
                name: 'Grupo',
                component: 'CifUserGroup',
              },
              {
                path: 'userId',
                name: 'ID',
                component: 'CifUserId',
              },
              {
                path: 'newInstitution',
                name: 'Nueva organización',
                indexRoute: {
                  component: 'CifNewInstitution/index',
                },
                routes: [
                  {
                    path: 'new',
                    component: 'CifNewInstitution/ApplyNew',
                  },
                  {
                    path: 'bind/:id',
                    component: 'CifNewInstitution/BindAccount',
                  },
                ],
              },
            ],
          },
          {
            path: 'tools',
            name: 'Herramientas',
            routes: [
              {
                path: 'ttsql',
                name: 'Tabla de flujo de MySQL a BlinkTT',
                component: 'ToolTT',
              },
            ],
          },
        ],
      }}
    >
      <PageContainer content="Bienvenido">
        <div>Hello World</div>
      </PageContainer>
    </ProLayout>
  </div>
);
