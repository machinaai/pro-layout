import { render, mount } from 'enzyme';
import React from 'react';
import PageContainer from '../../src/PageContainer';
import FooterToolbar from '../../src/FooterToolbar';
import BasicLayout, { BasicLayoutProps } from '../../src/BasicLayout';
import { waitForComponentToPaint } from './util';

describe('PageContainer', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => ({
        matches: false,
        addListener() {},
        removeListener() {},
      })),
    });
  });

  it('💄 base use', async () => {
    const html = render(<PageContainer title="Daniel Gomez" />);
    expect(html).toMatchSnapshot();
  });

  it('⚡️ support footer', async () => {
    const html = render(
      <PageContainer
        title="Daniel Gomez"
        footer={[<button type="button">right</button>]}
      />,
    );
    expect(html).toMatchSnapshot();
  });

  it('🔥 support footer', async () => {
    const html = render(
      <PageContainer
        title="Daniel Gomez"
        breadcrumb={{
          routes: [
            {
              path: '/',
              breadcrumbName: 'home',
            },
          ],
        }}
        footer={[
          <button key="right" type="button">
            right
          </button>,
        ]}
      />,
    );
    expect(html).toMatchSnapshot();
  });

  it('🔥 footer bar support extra', async () => {
    const html = render(
      <FooterToolbar
        className="qixian_footer"
        extra={
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="logo"
          />
        }
      >
        <button type="button">right</button>
      </FooterToolbar>,
    );
    expect(html).toMatchSnapshot();
  });

  it('🔥 footer bar support renderContent', async () => {
    const html = render(
      <FooterToolbar
        className="qixian_footer"
        extra={
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="logo"
          />
        }
        renderContent={() => {
          return 'home_toolbar';
        }}
      >
        <button type="button">right</button>
      </FooterToolbar>,
    );
    expect(html).toMatchSnapshot();
  });

  it('🐲 footer should know width', async () => {
    const wrapper = mount<BasicLayoutProps>(
      <BasicLayout>
        <PageContainer
          footer={[
            <button type="button" key="button">
              qixian
            </button>,
          ]}
        />
      </BasicLayout>,
    );
    await waitForComponentToPaint(wrapper);

    expect(wrapper?.find('.ant-pro-footer-bar')?.props()?.style?.width).toBe(
      'calc(100% - 220px)',
    );
    wrapper.setProps({
      collapsed: true,
    });

    await waitForComponentToPaint(wrapper);

    expect(wrapper?.find('.ant-pro-footer-bar')?.props()?.style?.width).toBe(
      'calc(100% - 48px)',
    );

    wrapper.setProps({
      layout: 'top',
    });

    expect(wrapper?.find('.ant-pro-footer-bar')?.props()?.style?.width).toBe(
      '100%',
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('🐲 FooterToolbar should know width', async () => {
    const wrapper = mount<BasicLayoutProps>(
      <BasicLayout>
        <PageContainer>
          <FooterToolbar>
            <button type="button" key="button">
              qixian
            </button>
          </FooterToolbar>
        </PageContainer>
      </BasicLayout>,
    );
    await waitForComponentToPaint(wrapper);

    expect(wrapper?.find('.ant-pro-footer-bar')?.props()?.style?.width).toBe(
      'calc(100% - 220px)',
    );
    wrapper.setProps({
      collapsed: true,
    });

    await waitForComponentToPaint(wrapper);

    expect(wrapper.find('.ant-pro-footer-bar')?.props()?.style?.width).toBe(
      'calc(100% - 48px)',
    );

    wrapper.setProps({
      layout: 'top',
    });

    expect(wrapper.find('.ant-pro-footer-bar')?.props()?.style?.width).toBe(
      '100%',
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('🐲 footer is null, do not render footerToolbar ', async () => {
    const wrapper = mount(
      <PageContainer
        footer={[
          <button type="button" key="button">
            qixian
          </button>,
        ]}
      />,
    );
    await waitForComponentToPaint(wrapper);
    expect(wrapper.render()).toMatchSnapshot();

    wrapper.setProps({
      footer: undefined,
    });
    await waitForComponentToPaint(wrapper);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
