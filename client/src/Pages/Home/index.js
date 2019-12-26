import React from "react";
import Main from "../../Components/Main/";
import Navbar from "../../Components/Navbar/";
import Footing from "../../Components/Footer/";
import "./index.css";

import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function Home() {
	return (
		<Layout>
			<Header><Navbar /></Header>
			<Content>
				{/* <p> Hello World </p> */}
				<Main />
			</Content>
			<Footer><Footing/></Footer>
		</Layout>
	);
}

export default Home;
  