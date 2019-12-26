import React from "react";
import { Layout, Menu} from 'antd';
import "./index.css"
// const { SubMenu } = Menu;
const { Header} = Layout;

function Navbar() {
	return (
        <Header className="Navbar">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: '7.5vh' }} >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        </Header>
	);
}

export default Navbar;
