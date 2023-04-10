import React from 'react';
import { Avatar, Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import { Outlet, Link } from 'react-router-dom'
import { FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
import '../../test.css'
import { Button, Dropdown } from 'antd';

const ClientLayout = () => {
    return (
        <div>
            <header>Header</header>
            <Outlet />
            <footer>Footer</footer>
        </div>
    )
}

export default ClientLayout