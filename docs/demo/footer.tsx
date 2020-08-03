import React from 'react';
import ProLayout, {
  DefaultFooter,
  PageContainer,
  // eslint-disable-next-line import/no-unresolved
} from '@machinaai/pro-layout';
import defaultProps from './defaultProps';

export default () => (
  <ProLayout
    {...defaultProps}
    style={{
      height: 500,
    }}
    breakpoint={false}
    collapsed
    location={{
      pathname: '/welcome',
    }}
    footerRender={() => (
      <DefaultFooter
        links={[
          { key: 'test', title: 'layout', href: 'www.alipay.com' },
          { key: 'test2', title: 'layout2', href: 'www.alipay.com' },
        ]}
        copyright="Ésto es un Copyright de prueba"
      />
    )}
  >
    <PageContainer content="Bienvenido">Hello World</PageContainer>
  </ProLayout>
);
