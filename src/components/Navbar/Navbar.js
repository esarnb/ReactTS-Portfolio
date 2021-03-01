import React, {Component} from 'react';
import { Menu,  Avatar, Image } from 'antd';
import { NavLink } from 'react-router-dom';
import { HomeOutlined, GithubOutlined, GlobalOutlined, LaptopOutlined } from '@ant-design/icons';
import Login from "../Login/Login";
// import Counter from "../Counter/Counter";
import DisplayName from "../DisplayName/DisplayName";

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
        <Menu.Item icon={<HomeOutlined />}> <NavLink to="/">Home</NavLink> </Menu.Item>
        <Menu.Item icon={<GithubOutlined />}> <NavLink to="/github">Github</NavLink> </Menu.Item>
        <Menu.Item icon={<GlobalOutlined />}> <NavLink to="/threejs">ThreeJS</NavLink> </Menu.Item>
        <Menu.Item icon={<LaptopOutlined />}> <NavLink to="/config">Redux</NavLink> </Menu.Item>
       
        <Avatar className="avatar floatRight navatar" src={
          <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }/>
        <div id="login-btn-nav" className="floatRight" ><Login/></div>
        <DisplayName />
      </Menu>
    );
  }
}
