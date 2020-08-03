export default [
  {
    path: '/home',
    name: 'Home',
    locale: 'menu.home',
    children: [
      {
        path: '/home/overview',
        name: 'Vista general',
        hideInMenu: true,
        locale: 'menu.home.overview',
      },
      {
        path: '/home/search',
        name: 'Buscar',
        hideInMenu: true,
        locale: 'menu.home.search',
      },
    ],
  },
  {
    path: '/data_hui',
    name: 'Información adicional',
    locale: 'menu.data_hui',
    children: [
      {
        collapsed: true,
        menuName: 'Transacción de compra de dominio',
        name: 'Transacción de compra de dominio',
        children: [
          {
            id: 2,
            name: '_Transaction_Buyer_Monthly',
            path:
              '/data_hui?tableName=adm_rk_cr_tb_trd_byr_ms&tableSchema=alifin_odps_birisk',
          },
          {
            name: '_Airline Travel Transaction_Buyer_Day',
            path:
              '/data_hui?tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk',
          },
        ],
      },
      {
        name: 'Transacción de compra de dominio 2',
        path: '/',
        children: [
          {
            name: '_Transaction_Buyer_Monthly',
            path:
              '/data_hui?tableName=adm_rk_cr_tb_trd_byr_ms&tableSchema=alifin_odps_birisk',
          },
          {
            name: '_Airline Travel Transaction_Buyer_Day',
            path:
              '/data_hui?tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk',
          },
        ],
      },
      {
        name: 'Transacción de comprador de dominio 3',
        path: '/',
        children: [
          {
            name: '_Transaction_Buyer_Monthly Form 2',
            path:
              '/data_hui?tableName=adm_rk_cr_tb_trd_byr_ms&tableSchema=alifin_odps_birisk',
          },
          {
            name: '_Transacción_de_viaje_aéreo_Comprador_Día 3',
            path:
              '/data_hui?tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk',
          },
        ],
      },
    ],
  },
  {
    path: '/data_ming',
    name: 'Datos detallados',
    locale: 'menu.data_ming',
    children: [
      {
        path: '/other/outLoadMenu',
        name: 'Exportar Menú',
        locale: 'menu.other.outLoadMenu',
        hideInMenu: true,
      },
      {
        path: '/other/homeEdit',
        name: 'Vista General Edición',
        locale: 'menu.other.outHomeEdit',
      },
    ],
  },
  {
    path: '/other',
    name: 'otro',
    locale: 'menu.other',
    children: [
      {
        path: '/other/upLoad',
        name: 'importación síncrona de odps',
        locale: 'menu.other.upLoad',
      },
      {
        path: '/other/upLoadMenu',
        name: 'Importar Menú',
        locale: 'menu.other.upLoadMenu',
      },
      {
        path: '/other/homeEdit',
        name: 'Vista General Edición',
        locale: 'menu.other.homeEdit',
        hideInMenu: true,
      },
    ],
  },
];
