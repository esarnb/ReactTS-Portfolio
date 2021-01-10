import React, {Component} from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { AppstoreOutlined } from '@ant-design/icons';
import Login from "../../components/Login";
import Counter from "../../components/Counter";
import "./Navbar.css";

// const { SubMenu } = Menu;

export default class Navbar extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
        <Menu.Item key="home" icon={<AppstoreOutlined />}> <NavLink to="/">Home</NavLink> </Menu.Item>
        <Menu.Item key="projects" icon={<AppstoreOutlined />}> <NavLink to="/projects">Projects</NavLink> </Menu.Item>
        <Menu.Item key="about" icon={<AppstoreOutlined />}> <NavLink to="/about">About</NavLink> </Menu.Item>
        
        <div id="login-btn-nav" className="floatRight" ><Login /></div>
        <div className="floatRight"><Counter /></div>
      </Menu>
    );
  }
}
