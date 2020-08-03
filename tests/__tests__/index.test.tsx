import { mount, render } from 'enzyme';

import React from 'react';
import BasicLayout, { BasicLayoutProps } from '../../src/BasicLayout';
import { waitForComponentToPaint } from './util';

describe('BasicLayout', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => ({
        matches: false,
        addListener() {},
        removeListener() {},
      })),
    });
  });

  it('🥩 base use', async () => {
    const html = render(<BasicLayout />);
    expect(html).toMatchSnapshot();
  });

  it('🥩 support loading', async () => {
    const wrapper = mount(<BasicLayout loading />);
    await waitForComponentToPaint(wrapper);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('🥩 do not render menu', async () => {
    const wrapper = mount(<BasicLayout menuRender={false} />);
    await waitForComponentToPaint(wrapper);
    const menu = wrapper.find('.ant-pro-sider');
    expect(menu.exists()).toBe(false);
    const menuContent = wrapper.find('.ant-pro-sider-menu');
    expect(menuContent.exists()).toBe(false);
    expect(
      (
        wrapper.find('section.ant-layout section.ant-layout').props().style ||
        {}
      ).padding,
    ).toBe(undefined);
    wrapper.unmount();
  });

  it('🥩 do not render menu content', async () => {
    const wrapper = mount(<BasicLayout menuContentRender={false} />);
    await waitForComponentToPaint(wrapper);
    const menu = wrapper.find('.ant-pro-sider');
    expect(menu.exists()).toBe(true);
    const menuContent = wrapper.find('.ant-pro-sider-menu');
    expect(menuContent.exists()).toBe(false);
    wrapper.unmount();
  });

  it('🥩 support menuDataRender', async () => {
    const wrapper = mount(
      <BasicLayout
        menuDataRender={() =>
          [
            {
              path: '/home',
              name: 'Home',
              locale: 'menu.home',
              children: [
                {
                  path: '/home/overview',
                  name: 'Vista general',
                  hideInMenu: true,
                  exact: true,
                  locale: 'menu.home.overview',
                },
                {
                  path: '/home/search',
                  name: 'Buscar',
                  exact: true,
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
                      isNavHome: '2',
                      itemId: '191020104',
                      itemName: '_Transaction_Buyer_Monthly',
                      tab: 'adm_rk_cr_tb_trd_byr_ms',
                      tabProj: 'alifin_odps_birisk',
                      name: '_Transaction_Buyer_Monthly',
                      path:
                        '/data_hui?tableName=adm_rk_cr_tb_trd_byr_ms&tableSchema=alifin_odps_birisk',
                    },
                    {
                      id: 3,
                      isNavHome: '3',
                      itemId: '191020104',
                      itemName: '_Airline Travel Transaction_Buyer_Day Form',
                      tab: 'adm_rk_cr_tb_trv_byr_ds',
                      tabProj: 'alifin_odps_birisk',
                      name: '_Airline Travel Transaction_Buyer_Day Form',
                      path:
                        '/data_hui?tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk',
                    },
                  ],
                },
                {
                  collapsed: true,
                  name: 'Transacción de dimensión de comprador de dominio 2',
                  children: [
                    {
                      id: 5,
                      isNavHome: '2',
                      itemId: '191020107',
                      itemName: '_Transaction_Buyer_Monthly',
                      tab: 'adm_rk_cr_tb_trd_byr_ms',
                      tabProj: 'alifin_odps_birisk',
                      name: '_Transaction_Buyer_Monthly',
                      path:
                        '/data_hui?tableName=adm_rk_cr_tb_trd_byr_ms&tableSchema=alifin_odps_birisk',
                    },
                    {
                      id: 6,
                      isNavHome: '3',
                      itemId: '191020108',
                      itemName: '_Airline Travel Transaction_Buyer_Day Form',
                      tab: 'adm_rk_cr_tb_trv_byr_ds',
                      tabProj: 'alifin_odps_birisk',
                      name: '_Airline Travel Transaction_Buyer_Day Form',
                      path:
                        '/data_hui?tableName=adm_rk_cr_tb_trv_byr_ds&tableSchema=alifin_odps_birisk',
                    },
                  ],
                },
                {
                  collapsed: true,
                  name: 'Transacción de dimensión de comprador de dominio 3',
                  children: [
                    {
                      id: 7,
                      isNavHome: '2',
                      itemId: '191020107',
                      itemName: '_Transaction_Buyer_Monthly Form 2',
                      tab: 'adm_rk_cr_tb_trd_byr_ms',
                      tabProj: 'alifin_odps_birisk',
                      name: '_Transaction_Buyer_Monthly Form 2',
                      path:
                        '/data_hui?tableName=adm_rk_cr_tb_trd_byr_ms&tableSchema=alifin_odps_birisk',
                    },
                    {
                      id: 8,
                      isNavHome: '3',
                      itemId: '191020108',
                      itemName: '_ Transacción de viaje aéreo_Comprador_Día 3',
                      tab: 'adm_rk_cr_tb_trv_byr_ds',
                      tabProj: 'alifin_odps_birisk',
                      name: '_ Transacción de viaje aéreo_Comprador_Día 3',
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
            },
            {
              path: '/other',
              name: 'otro',

              locale: 'menu.other',
              children: [
                {
                  path: '/other/upLoad',
                  name: 'importación síncrona de odps',
                  exact: true,
                  locale: 'menu.other.upLoad',
                  hideInMenu: true,
                },
                {
                  path: '/other/upLoadMenu',
                  name: 'Subir Menú',
                  exact: true,
                  locale: 'menu.other.upLoadMenu',
                  hideInMenu: true,
                },
                {
                  path: '/other/homeEdit',
                  name: 'Vista generalEdit',
                  exact: true,
                  locale: 'menu.other.homeEdit',
                  hideInMenu: true,
                },
              ],
            },
          ] as any
        }
      />,
    );
    await waitForComponentToPaint(wrapper);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('🥩 do not render footer', async () => {
    const wrapper = mount(<BasicLayout footerRender={false} />);
    await waitForComponentToPaint(wrapper);
    const footer = wrapper.find('footer');
    expect(footer.exists()).toBe(false);
    wrapper.unmount();
  });

  it('🥩 menuDataRender change date', async () => {
    const wrapper = mount(<BasicLayout menuDataRender={() => []} />);
    await waitForComponentToPaint(wrapper);

    expect(wrapper.render()).toMatchSnapshot();

    wrapper.setProps({
      menuDataRender: () => [
        {
          path: '/home',
          name: 'Home',
          children: [
            {
              path: '/home/overview',
              name: 'Vista general',
              exact: true,
            },
            {
              path: '/home/search',
              name: 'Buscar',
              exact: true,
            },
          ],
        },
      ],
    });
    await waitForComponentToPaint(wrapper);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('🥩 use onLogoClick', async () => {
    const onLogoClick = jest.fn();
    const wrapper = mount(
      <BasicLayout
        logo={
          <div onClick={onLogoClick} id="test_log">
            Logo
          </div>
        }
      />,
    );
    await waitForComponentToPaint(wrapper);
    const logo = wrapper.find('#test_log');
    logo.simulate('click');
    expect(onLogoClick).toHaveBeenCalled();
    wrapper.unmount();
  });

  it('🥩 render logo', async () => {
    const wrapper = mount(<BasicLayout logo={<div id="test_log">Logo</div>} />);
    await waitForComponentToPaint(wrapper);
    const logo = wrapper.find('#test_log');
    expect(logo.text()).toEqual('Logo');
    wrapper.unmount();
  });

  it('🥩 render logo by function', async () => {
    const wrapper = mount(
      <BasicLayout logo={() => <div id="test_log">Logo</div>} />,
    );
    await waitForComponentToPaint(wrapper);
    const logo = wrapper.find('#test_log');
    expect(logo.text()).toEqual('Logo');
    wrapper.unmount();
  });

  it('🥩 onCollapse', async () => {
    const onCollapse = jest.fn();
    const wrapper = mount(<BasicLayout onCollapse={onCollapse} />);
    await waitForComponentToPaint(wrapper);
    wrapper
      .find('.ant-pro-sider-collapsed-button')
      .map((item) => item && item.simulate('click'));
    expect(onCollapse).toHaveBeenCalled();
    wrapper.unmount();
  });

  it('🥩 siderWidth default', async () => {
    const wrapper = mount(<BasicLayout />);
    await waitForComponentToPaint(wrapper);
    expect(wrapper.find('.ant-pro-sider').get(1).props.width).toBe(220);
    wrapper.unmount();
  });

  it('🥩 siderWidth=160', async () => {
    const wrapper = mount(<BasicLayout siderWidth={160} />);
    await waitForComponentToPaint(wrapper);
    expect(wrapper.find('.ant-pro-sider').get(1).props.width).toBe(160);
    wrapper.unmount();
  });

  it('🥩 do not render collapsed button', async () => {
    const wrapper = mount(<BasicLayout collapsedButtonRender={false} />);
    await waitForComponentToPaint(wrapper);
    expect(wrapper.find('.ant-pro-sider-collapsed-button').exists()).toBe(
      false,
    );
    wrapper.unmount();
  });

  it('🥩 when renderMenu=false, do not render collapsed button', async () => {
    const wrapper = mount(<BasicLayout menuRender={false} />);
    await waitForComponentToPaint(wrapper);
    expect(wrapper.find('.ant-pro-sider-collapsed-button').exists()).toBe(
      false,
    );
    wrapper.unmount();
  });

  it('🥩 render customize collapsed button', async () => {
    const wrapper = mount<BasicLayoutProps>(
      <BasicLayout
        collapsedButtonRender={(collapsed) => (
          <span id="customize_collapsed_button">{`${collapsed}`}</span>
        )}
      />,
    );
    await waitForComponentToPaint(wrapper);
    const dom = wrapper.find('#customize_collapsed_button');
    expect(dom.text()).toEqual('false');

    wrapper.setProps({
      collapsed: true,
    });
    expect(dom.text()).toEqual('true');
  });

  it('🥩 do not render menu header', async () => {
    const wrapper = mount<BasicLayoutProps>(
      <BasicLayout menuHeaderRender={false} />,
    );
    await waitForComponentToPaint(wrapper);
    const dom = wrapper.find('#logo');

    expect(dom.exists()).toBe(false);
    wrapper.unmount();
  });

  it('🥩 customize render menu header', async () => {
    const wrapper = mount<BasicLayoutProps>(
      <BasicLayout
        menuHeaderRender={(logo, title) => (
          <div id="customize_menu_header">
            {logo}
            {title}
            <div id="customize_menu_header_text">customize_menu_header</div>
          </div>
        )}
      />,
    );
    await waitForComponentToPaint(wrapper);

    const dom = wrapper.find('#customize_menu_header');
    expect(dom.exists()).toBe(true);

    expect(dom.find('#customize_menu_header_text').text()).toEqual(
      'customize_menu_header',
    );
    wrapper.unmount();
  });

  it('🥩 contentStyle should change dom', async () => {
    const wrapper = render(
      <BasicLayout
        contentStyle={{
          padding: 56,
        }}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('🥩 support className', async () => {
    const wrapper = mount<BasicLayoutProps>(
      <BasicLayout
        className="chenshuai2144"
        contentStyle={{
          padding: 56,
        }}
      />,
    );
    expect(wrapper.find('div.chenshuai2144').exists()).toBeTruthy();
    wrapper.unmount();
  });

  it('🥩 support links', async () => {
    const wrapper = mount<BasicLayoutProps>(<BasicLayout links={['name']} />);
    await waitForComponentToPaint(wrapper);
    const dom = wrapper.find('.ant-pro-sider-link');
    expect(dom.exists()).toBeTruthy();
    wrapper.unmount();
  });

  it('🥩 do no render links', async () => {
    const wrapper = mount<BasicLayoutProps>(<BasicLayout />);
    await waitForComponentToPaint(wrapper);
    const dom = wrapper.find('.ant-pro-sider-link');

    expect(dom.exists()).toBeFalsy();
    wrapper.unmount();
  });

  it('🥩 pure style', async () => {
    const wrapper = mount<BasicLayoutProps>(<BasicLayout pure />);
    await waitForComponentToPaint(wrapper);
    const menu = wrapper.find('.ant-pro-sider-menu');
    expect(menu.exists()).toBe(false);
    const dom = wrapper.find('.ant-pro-sider-link');
    expect(dom.exists()).toBeFalsy();
    wrapper.unmount();
  });

  it('🥩 set page title render', async () => {
    const wrapper = mount<BasicLayoutProps>(
      <BasicLayout
        pageTitleRender={(props, pageName, info) => {
          if (info) {
            return info.pageName;
          }
          return pageName || 'ant';
        }}
      />,
    );
    await waitForComponentToPaint(wrapper);
    const dom = wrapper.find('.ant-pro-sider-link');

    expect(dom.exists()).toBeFalsy();
    wrapper.unmount();
  });

  it('🥩 onPageChange', async () => {
    const onPageChange = jest.fn();
    const wrapper = mount<BasicLayoutProps>(
      <BasicLayout
        onPageChange={onPageChange}
        location={{
          pathname: '/',
        }}
      />,
    );

    await waitForComponentToPaint(wrapper);
    wrapper.setProps({
      location: {
        pathname: '/name',
      },
    });

    expect(onPageChange).toBeCalled();
    wrapper.unmount();
  });

  it('🥩 fixSider and collapsed should have different style', async () => {
    const wrapper = mount<BasicLayoutProps>(<BasicLayout collapsed />);
    await waitForComponentToPaint(wrapper);

    let dom = wrapper.find('.ant-pro-fixed-header');
    expect(dom.exists()).toBeFalsy();
    wrapper.setProps({
      fixedHeader: true,
    });
    await waitForComponentToPaint(wrapper);
    dom = wrapper.find('header.ant-pro-fixed-header');
    expect(dom.exists()).toBeTruthy();
    expect(dom.props()?.style?.width).toBe('calc(100% - 48px)');

    wrapper.setProps({
      fixedHeader: true,
      collapsed: false,
    });

    dom = wrapper.find('header.ant-pro-fixed-header');
    expect(dom.props()?.style?.width).toBe('calc(100% - 220px)');

    wrapper.setProps({
      fixedHeader: true,
      collapsed: false,
      siderWidth: 120,
    });

    dom = wrapper.find('header.ant-pro-fixed-header');
    expect(dom.props()?.style?.width).toBe('calc(100% - 120px)');

    wrapper.setProps({
      fixedHeader: true,
      collapsed: false,
      menuRender: false,
    });

    dom = wrapper.find('header.ant-pro-fixed-header');
    expect(dom.props()?.style?.width).toBe('100%');

    wrapper.setProps({
      fixedHeader: true,
      layout: 'top',
    });

    dom = wrapper.find('header.ant-pro-fixed-header');
    expect(dom.props()?.style?.width).toBe('100%');
  });
});
