import React from "react";
import Main from "../../Components/Main/Main";
import Navbar from "../../Components/Navbar/Navbar";
import Footing from "../../Components/Footer/Footer";

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function Home() {
	return (
		<Layout>
			<Header><Navbar /></Header>
			<Content><Main /></Content>
			<Footer><Footing/></Footer>
		</Layout>
	);
}

export default Home;
  