import React from "react";
import { Avatar, Layout, Menu, Switch} from 'antd';
import "./index.css"
// const { SubMenu } = Menu;
const { Header } = Layout;

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { theme: "Dark", current: "1" }
    }

    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };
    
    

    render() {
        return (
            <Header className="Navbar">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '5vh' }} >
                    <Avatar className="logo"src="http://bestanimations.com/Nature/Fire/Flames/single-burning-flame-close-up-animated-gif-image.gif" />
                    <Menu.Item key="Spacer" />
                    <Menu.Item key="1" onClick={(res) => this.props.updatePage(res.key)}> Home </Menu.Item>
                    <Menu.Item key="2" onClick={(res) => this.props.updatePage(res.key)}> Projects </Menu.Item>
                    <Menu.Item key="3" onClick={(res) => this.props.updatePage(res.key)}> ThreeJS </Menu.Item>
                    <Menu.Item key="4" onClick={(res) => this.props.updatePage(res.key)}> Discord </Menu.Item>
                    <Menu.Item key="5" onClick={(res) => this.props.updatePage(res.key)}> Profile </Menu.Item>
                    <Switch checked={this.state.theme === 'dark'} onChange={this.changeTheme} checkedChildren="Dark" unCheckedChildren="Light" />
                </Menu>
            </Header>
        );
    }
}

export default Navbar;
