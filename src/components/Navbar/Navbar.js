import React, {Component} from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { HomeOutlined, GithubOutlined, GlobalOutlined, LaptopOutlined } from '@ant-design/icons';
import Login from "../Login/Login";
import Counter from "../Counter/Counter";
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
        <Menu.Item key="home" icon={<HomeOutlined />}> <NavLink to="/">Home</NavLink> </Menu.Item>
        <Menu.Item key="github" icon={<GithubOutlined />}> <NavLink to="/github">Github</NavLink> </Menu.Item>
        <Menu.Item key="threejs" icon={<GlobalOutlined />}> <NavLink to="/threejs">ThreeJS</NavLink> </Menu.Item>
        <Menu.Item key="redux" icon={<LaptopOutlined />}> <NavLink to="/redux">Redux</NavLink> </Menu.Item>
        
        <div id="login-btn-nav" className="floatRight" ><Login /></div>
        <div className="floatRight"><Counter /></div>
      </Menu>
    );
  }
}
