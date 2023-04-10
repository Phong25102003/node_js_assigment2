import React, { useState } from 'react'
import { Outlet, Link, Navigate } from 'react-router-dom'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { Tabs } from 'antd';
const items1 = ['1'].map((key) => ({
    key,
    label: `Admin`,
}));
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    SettingOutlined,
} from '@ant-design/icons';

import ProductAdd from './ProductAdd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}
const items2 = [LaptopOutlined].map((icon, index) => {
    const key = String(index + 1);
  
    return {
      key: `manage${key}`,
      icon: React.createElement(icon),
      label: `Product Management `,
      children: new Array(1).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1
        return {
          key: subKey,
          label:
            <Button><a href="/products">Logout</a></Button>
  
        };
      }),
    };
  });


type Props = {}
const Dasbroad = (props: Props) => {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['4']} items={items1} />
             
            </Header>
            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                >

                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items2}
                    />
                </Sider>

                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',

                        }}
                    >
                        <Breadcrumb>

                            <Breadcrumb style={{ marginRight: '16px' }}><Link to="http://localhost:5173/admin/products">Products</Link></Breadcrumb>
                            <Breadcrumb >
                                <Link to="http://localhost:5173/admin/category">Categorys</Link>
                            </Breadcrumb>
                        </Breadcrumb>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <Space direction="vertical">
                            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                                <Link to="/admin/products/add">
                                    <Button type="primary">Add Product</Button>
                                </Link>
                                <Link to="/admin/category/add">
                                    <Button type="primary">Add Category</Button>
                                </Link>
                            </div>

                        </Space>

                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>

    )
}

export default Dasbroad