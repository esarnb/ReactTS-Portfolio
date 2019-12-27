import React from "react";
import { Avatar, Icon, Layout, Menu} from 'antd';
import "./index.css"
// const { SubMenu } = Menu;
const { Header} = Layout;

function Navbar() {
	return (
        <Header className="Navbar">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '7.5vh' }} >
            <Avatar className="logo"src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Projects</Menu.Item>
            <Menu.Item key="3">ThreeJS</Menu.Item>
            <Menu.Item key="4">Discord</Menu.Item>
            <Menu.Item key="5" className="">Profile</Menu.Item>
        </Menu>
        </Header>
	);
}

export default Navbar;
