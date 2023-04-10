import React, { useEffect, useState } from 'react'
import { Avatar } from 'antd';
import { Link } from 'react-router-dom'
import { FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
import { Button, Dropdown } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { useNavigate } from "react-router-dom"
import jwtDecode from 'jwt-decode';
import axios from 'axios';
const { Header, Content, Footer } = Layout;

type Props = {}
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

const HomePage = (props: Props) => {

    // check user

    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('user');
        if (token) {
            const decoded = jwtDecode(token);
            setUser(decoded);
        }
    }, [props]);

    const navigate = useNavigate()
    function handleLogout() {
        // Xoá token đã lưu trữ
        localStorage.removeItem('user');
        // Điều hướng về trang đăng nhập
        navigate(`/signin`)

    }

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const item: MenuItem[] = [

        {
            label: (
                <a style={{
                    textDecoration: 'none'
                }}
                    href="/" rel="noopener noreferrer">
                    Home
                </a>
            ),
            key: 'setting:3',

        },
        {
            label: (

                <a style={{
                    textDecoration: 'none'
                }} href="/signin" rel="noopener noreferrer">
                    Signin
                </a>
            ),
            key: 'setting:4',

        },
        {
            label: (
                <a style={{
                    textDecoration: 'none'
                }} href="/signup" rel="noopener noreferrer">
                    Sign Up
                </a>
            ),
            key: 'setting:5',

        },

        {
            label: (
                <div>
                    {user ? (
                        <div>
                            {user.role === 'admin'}
                            <a href="/admin">Admin</a>

                        </div>
                    ) : (
                        <div>
                            <div> <a style={{ textDecoration: 'none' }} onClick={handleLogout} >Logut</a></div>
                        </div>
                    )
                    }
                </div >
            ),
            key: 'setting:8',

        },



    ]


    return (
        <Layout style={{
            padding: '0px auto',
            margin: '0px auto',
            // backgroundColor:'black'
        }} className="layout">
            <Header>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        <img width={'80px'} src="https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Big_City_Greens_Logo.png/250px-Big_City_Greens_Logo.png" alt="" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Search placeholder="Search movie" enterButton style={{ padding: '10px', paddingBottom: '40px' }} />
                        <div style={{ marginLeft: '10px', paddingBottom: '30px' }}>
                            {/* Thêm đoạn code kiểm tra tokenuser vào đây */}
                            {localStorage.getItem("tokenuser") ? (

                                <div style={{ display: 'flex' }}>
                                    <div>
                                        <Avatar style={{ marginRight: '20px' }} src={'https://yt3.ggpht.com/df6PnszOWNEIdPo6LP7fl0c1KcfcC7zqZRNgIO6TEZuunD69pv7PIDiQZ1i82ICZVLBXslqjOZU=s88-c-k-c0x00ffffff-no-nd-rj'} />
                                    </div>
                                    <div>
                                        <a href="#" onClick={() => { localStorage.removeItem("tokenuser"); location.reload() }}>

                                            <Button type="primary">Logout</Button>

                                        </a>
                                    </div>

                                </div>
                            ) : (
                                <Link to="/signin">
                                    <Button type="primary">LOGIN</Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </Header>

            <Breadcrumb
                style={{
                    padding: '10px 50px',
                }}
                items={[
                    {
                        title: <a href="/">Home</a>,
                    },
                    {
                        title: <a href="/">Movies</a>,
                    }

                ]}
            />
            <Content
                style={{
                    padding: '20px 100px',
                    backgroundColor: '#222222'
                }}
            >
                <div className="site-layout-content" style={{ background: colorBgContainer }}>
                    <Outlet />
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: 'black',
                    color: 'white'
                }}
            >
                <div>Code by taidvph20044 </div>
                <div style={{ fontSize: '24px' }}>
                    <a href="https://www.facebook.com/taidvph20044/"><FacebookOutlined style={{ marginRight: '10px', color: 'red' }} /></a>
                    <a href="https://github.com/taidvph20044"><GithubOutlined /></a>
                </div>
            </Footer>

        </Layout>
    )
}

export default HomePage