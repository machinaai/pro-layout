import React, { useState } from 'react';
import { Button, Descriptions, Result, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import ProLayout, {
  PageContainer,
  SettingDrawer,
  ProSettings,
  // eslint-disable-next-line import/no-unresolved
} from '@machinaai/pro-layout';
import defaultProps from './defaultProps';

const content = (
  <Descriptions size="small" column={2}>
    <Descriptions.Item label="Fundador">Daniel Gomez</Descriptions.Item>
    <Descriptions.Item label="Información del contacto">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="Fecha de creación">2020-01-10</Descriptions.Item>
    <Descriptions.Item label="Fecha de actualización">2020-10-10</Descriptions.Item>
    <Descriptions.Item label="Observaciones">
      Xola 1230, Col Narvarte
    </Descriptions.Item>
  </Descriptions>
);

export default () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>(
    undefined,
  );
  const [pathname, setPathname] = useState('/welcome');
  return (
    <div
      id="test-pro-layout"
      style={{
        transform: 'rotate(0)',
        overflowX: 'hidden',
      }}
    >
      <ProLayout
        {...defaultProps}
        style={{
          maxHeight: '100vh',
        }}
        location={{
          pathname,
        }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
        {...settings}
      >
        <PageContainer
          content={content}
          tabList={[
            {
              tab: 'Información Básica',
              key: 'base',
            },
            {
              tab: 'Detalles',
              key: 'info',
            },
          ]}
          extra={[
            <Button key="3">Opcion 1</Button>,
            <Button key="2">Opcion 2</Button>,
            <Button key="1" type="primary">
              Opción Principal
            </Button>,
          ]}
          footer={[<Button>Reiniciar</Button>, <Button type="primary">Enviar</Button>]}
        >
          <div
            style={{
              height: '120vh',
            }}
          >
            <Result
              status="404"
              style={{
                height: '100%',
                background: '#fff',
              }}
              title="Hello World"
              subTitle="Sorry, you are not authorized to access this page."
              extra={<Button type="primary">Back Home</Button>}
            />
          </div>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => setSetting(changeSetting)}
      />
    </div>
  );
};
