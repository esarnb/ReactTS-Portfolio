import React from "react";
import { Avatar, Layout, Menu} from 'antd';
import "./index.css"
// const { SubMenu } = Menu;
const { Header} = Layout;

function Navbar(props) {
    function test(obj, cb) {
        console.log(obj.key);   
        cb(obj.key)
    }
    return (
        <Header className="Navbar">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '5vh' }} >
                <Avatar className="logo"src="http://bestanimations.com/Nature/Fire/Flames/single-burning-flame-close-up-animated-gif-image.gif" />
                <Menu.Item key="0" />
                <Menu.Item key="1" onClick={(res) => test(res, props.updatePage)}> Home </Menu.Item>
                <Menu.Item key="2" onClick={(res) => test(res, props.updatePage)}> Projects </Menu.Item>
                <Menu.Item key="3" onClick={(res) => test(res, props.updatePage)}> ThreeJS </Menu.Item>
                <Menu.Item key="4" onClick={(res) => test(res, props.updatePage)}> Discord </Menu.Item>
                <Menu.Item key="5" onClick={(res) => test(res, props.updatePage)}> Profile </Menu.Item>
            </Menu>
        </Header>
	);
}

export default Navbar;
