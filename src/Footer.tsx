import { CopyrightOutlined, GithubOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React, { Fragment, CSSProperties } from 'react';

import GlobalFooter from './GlobalFooter';
import { WithFalse } from './typings';

const { Footer } = Layout;

const defaultLinks = [
  {
    key: 'React Designer',
    title: 'React Designer',
    href: 'https://pro.ant.design',
    blankTarget: true,
  },
  {
    key: 'github',
    title: <GithubOutlined />,
    href: 'https://github.com/machinaai/ant-design-pro',
    blankTarget: true,
  },
  {
    key: 'Ant Design',
    title: 'Ant Design',
    href: 'https://ant.design',
    blankTarget: true,
  },
];

const defaultCopyright = '2020 machina.ai';

export interface FooterProps {
  links?: WithFalse<
    {
      key?: string;
      title: React.ReactNode;
      href: string;
      blankTarget?: boolean;
    }[]
  >;
  copyright?: WithFalse<String>;
  style?: CSSProperties;
  className?: string;
}

const FooterView: React.FC<FooterProps> = ({
  links,
  copyright,
  style,
  className,
}: FooterProps) => (
  <Footer className={className} style={{ padding: 0, ...style }}>
    <GlobalFooter
      links={links !== undefined ? links : defaultLinks}
      copyright={
        copyright === false ? null : (
          <Fragment>
            Copyright <CopyrightOutlined /> {copyright || defaultCopyright}
          </Fragment>
        )
      }
    />
  </Footer>
);

export default FooterView;
