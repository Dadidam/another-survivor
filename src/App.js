import Routes from "./Routes";
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import RouteNavItem from "./components/RouteNavItem";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import './App.css';
import { Route } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        {!this.state.collapsed &&
                            <div style={{ background: "#333", borderRadius: 6, margin: 16 }}>
                                <Link to="/">
                                    <div style={{ textAlign: "center", padding: 10 }}>
                                        <img src="/img/logo_02.png" alt="" />
                                    </div>
                                </Link>
                            </div>
                        }
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key={1}>
                                <Link to="/">
                                    <Icon type="home" />
                                    <span>Home</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key={2}>
                                <Link to="/test">
                                    <Icon type="pie-chart" />
                                    <span>Option 1</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key={3}>
                                <Link to="/ping">
                                    <Icon type="desktop" />
                                    <span>Option 2</span>
                                </Link>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user" /><span>User</span></span>}
                            >
                                <Menu.Item key="4">Tom</Menu.Item>
                                <Menu.Item key="5">Bill</Menu.Item>
                                <Menu.Item key="6">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="team" /><span>Team</span></span>}
                            >
                                <Menu.Item key="7">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <Icon type="file" />
                                <span>File</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ background: '#404040'}}>
                        <Content style={{ margin: 16 }}>
                            <div style={{ padding: 24, background: '#333', minHeight: 360, borderRadius: 6 }}>
                                <Routes />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center', background: '#404040', color: 'white' }}>
                            Another Survivor Game ©2017 Created by <a href="https://github.com/Dadidam/another-survivor" target="_blank">Dadidam</a>
                        </Footer>
                    </Layout>
                </Layout>

            </div>
        );
    }
}

export default App;
