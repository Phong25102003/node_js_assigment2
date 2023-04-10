import React from 'react'
import { Outlet, Link, Navigate } from 'react-router-dom'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { Tabs } from 'antd';
const { Header, Content, Sider } = Layout;
const items1 = ['1'].map((key) => ({
    key,
    label: `Admin`,
  }));
const AdminLayout = () => {
    return (
        <div>
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

              <Breadcrumb onClick={handleHomeClick} style={{ marginRight: '16px' }}><Link to="/admin/products">Products</Link></Breadcrumb>
              <Breadcrumb onClick={handleHomeClick}>
                <Link to="/admin/category/listcate">Categorys</Link>
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
                <Link to="/admin/category/addcate">
                  <Button type="primary">Add Category</Button>
                </Link>
              </div>

            </Space>

            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
        </div>
    )
}

export default AdminLayout