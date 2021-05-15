import React, { useEffect, useMemo, useRef, useState } from 'react';
import type {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
} from '@ant-design/pro-layout';
import { Layout, Menu, Breadcrumb } from 'antd';
import type { Dispatch } from 'umi';
import { Link } from 'umi';

import './BasicLayout.less';

const { Header, Content, Footer } = Layout;

export type BasicLayoutProps = {
  breadcrumbNameMap: Record<string, MenuDataItem>;
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
  dispatch: Dispatch;
  currentLoading : boolean;
} & ProLayoutProps;
export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: Record<string, MenuDataItem>;
};

function BasicLayout(props: BasicLayoutProps) {
  const [selectedMenuKeys, setSelectedMenuKeys] = useState(['home'])

  const {
    children,
    location = {
      pathname: '/',
    },
  } = props;

  useEffect(() => {
    let pathname = location.pathname || '/';
    let selectedKeys: string[] = [];
    if (pathname.startsWith('/app1')) {
      selectedKeys.push('app1');
    } else if (pathname.startsWith('/app2')) {
      selectedKeys.push('app2');
    } else if (pathname.startsWith('/app3')) {
      selectedKeys.push('app3');
    } else {
      selectedKeys.push('home');
    }
    setSelectedMenuKeys(selectedKeys);
  }, [location.pathname])

  function handleMenuClick(e: any) {
    let newSelectedMenuKeys = [];
    newSelectedMenuKeys.push(e.key);
    setSelectedMenuKeys(newSelectedMenuKeys);
  }

  return (
    <Layout className='qbitdata-boss-basic-layout'>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}>
        <div className="logo">
          {/* <img src={qbitdataPng} alt='qbitdata' style={{
            width: 195,
            paddingRight: 5
          }} /> */}
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          className='qbitdata-global-header-menu'
          defaultSelectedKeys={selectedMenuKeys}
          selectedKeys={selectedMenuKeys}
          onClick={handleMenuClick}
        >
          <Menu.Item key="home">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="app1">
            <Link to="/app1">App1</Link>
          </Menu.Item>
          <Menu.Item key="app2">
            <Link to="/app2">App2</Link>
          </Menu.Item>
          <Menu.Item key="app3">
            <Link to="/app3">App3</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout" style={{ padding: '0', marginTop: 64, position: 'relative' }}>
        <div className="site-layout-background" style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
          {children}
        </div>
      </Content>
    </Layout>
  )
}

export default BasicLayout;