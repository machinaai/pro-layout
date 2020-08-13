import { CopyrightOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import React, { Fragment, CSSProperties } from 'react';

import GlobalFooter from './GlobalFooter';
import { WithFalse } from './typings';

const { Footer } = Layout;

const defaultLinks = [
  {
    key: 'twitter',
    title: (
      <img
        src="https://raw.githubusercontent.com/machinaai/pro-layout/nbe-layout/src/assets/icons/twitter.svg"
        alt="twitter"
      />
    ),
    href: 'https://twitter.com/novasolutionsys/',
    blankTarget: true,
  },
  {
    key: 'linkedin',
    title: (
      <img
        src="https://raw.githubusercontent.com/machinaai/pro-layout/nbe-layout/src/assets/icons/linkedin.svg"
        alt="linkedin"
      />
    ),
    href: 'https://www.linkedin.com/company/novasolutionsystems/',
    blankTarget: true,
  },
  {
    key: 'facebook',
    title: (
      <img
        src="https://raw.githubusercontent.com/machinaai/pro-layout/nbe-layout/src/assets/icons/facebook.svg"
        alt="facebook"
      />
    ),
    href: 'https://www.facebook.com/novasolutionsystems/',
    blankTarget: true,
  },
  {
    key: 'instagram',
    title: (
      <img
        src="https://raw.githubusercontent.com/machinaai/pro-layout/nbe-layout/src/assets/icons/instagram.svg"
        alt="instagram"
      />
    ),
    href: 'https://www.instagram.com/novasolutionsystems/',
    blankTarget: true,
  },
];

const today = new Date();
const currentYear = today.getFullYear();
const footerNova = (
  <a
    href="https://novasolutionsystems.com/"
    target="blank"
    style={{ color: 'rgba(0,0,0,0.45)' }}
  >
    <img
      src="https://raw.githubusercontent.com/machinaai/pro-layout/nbe-layout/src/assets/logo/nova.svg"
      alt="nova"
    />{' '}
    Nova <CopyrightOutlined /> Copyright {currentYear}
  </a>
);

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
          <Fragment> {copyright || footerNova}</Fragment>
        )
      }
    />
  </Footer>
);

export default FooterView;
