import React from "react";

import Navbar from "../../Components/Navbar/";
import Footing from "../../Components/Footer/";

import Main from "../../Components/Main/";
import Projects from "../../Components/Projects/";
import ThreeJS from "../../Components/ThreeJS/";
import Discord from "../../Components/Discord/";
import Profile from "../../Components/Profile/";

import "./index.css";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { page: 1, test: this.props.test };
	}

	switchPage = (newPage) => {
		this.setState({page: newPage})
	}

	determinePage = () => {
		switch(this.state.page) {
			case 2:
				return <Projects />
				break;
			case 3:
				return <ThreeJS />
				break;
			case 4:
				return <Discord />
				break;
			case 5:
				return <Profile />
				break;
			default:
				return <Main />
				break;
		}
	}

	render() {
		return (
			<React.Fragment>
				<Navbar page={this.state.page} updatePage={switchPage}/>
				{this.determinePage()}
				<Footing/>
			</React.Fragment>
		)
	};
}

export default Home;
  