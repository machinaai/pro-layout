import React from 'react';
import {
  SmileOutlined,
  CrownOutlined,
  TabletOutlined,
} from '@ant-design/icons';

export default {
  route: {
    path: '/',

    routes: [
      {
        path: '/welcome',
        name: 'Bienvenidos',
        icon: <SmileOutlined />,
        component: './Welcome',
      },
      {
        path: '/admin',
        name: 'Página de Administración',
        icon: <CrownOutlined />,
        access: 'canAdmin',
        component: './Admin',
        routes: [
          {
            path: '/admin/sub-page',
            name: 'Página de nivel 1',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
          {
            path: '/admin/sub-page2',
            name: 'Página de nivel 2',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
          {
            path: '/admin/sub-page3',
            name: 'Página de nivel 3',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
        ],
      },
      {
        name: 'Lista',
        icon: <TabletOutlined />,
        path: '/list',
        component: './ListTableList',
        routes: [
          {
            path: '/list/sub-page',
            name: 'Página de lista de primer nivel',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
          {
            path: '/list/sub-page2',
            name: 'Página de lista de segundo nivel',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
          {
            path: '/list/sub-page3',
            name: 'Página de lista de tercer nivel',
            icon: <CrownOutlined />,
            component: './Welcome',
          },
        ],
      },
    ],
  },
  location: {
    pathname: '/',
  },
};
