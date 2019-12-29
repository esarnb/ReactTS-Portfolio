import React from "react";

import Navbar from "../../Components/Navbar/";
import Footing from "../../Components/Footer/";

import Main from "../../Components/Main/";
import Projects from "../../Pages/Projects/";
import ThreeJS from "../../Pages/ThreeJS/";
import Discord from "../../Pages/Discord/";
import Profile from "../../Pages/Profile/";

import "./index.css";

class Home extends React.Component {
	constructor(props) {
		super(props);

		// Instead of spreading (...obj) an object by copy, just reference the passed in object.
		// this.state = { page: 1, profile: {...this.props.profile} };
		this.state = { page: 1, profile: this.props.profile, theme: "dark" }; 
	}

	switchPage = (newPage) => {
		this.setState({page: newPage})
	}

	switchTheme = (value) => {
		this.setState({theme: value ? 'dark' : 'light'})
	}

	determinePage = () => {
		switch(this.state.page) {
			case "2": return <Projects theme={this.state.theme}/>
			case "3": return <ThreeJS theme={this.state.theme}/>
			case "4": return <Discord theme={this.state.theme}/>
			case "5": return <Profile theme={this.state.theme}/>
			default: return <Main theme={this.state.theme}/>
		}
	}

	render() {
		return (
			<React.Fragment>
				<Navbar page={this.state.page} theme={this.state.theme} switchTheme={this.switchTheme} updatePage={this.switchPage}/>
				{this.determinePage()}
				<Footing theme={this.state.theme} />
			</React.Fragment>
		)
	};
}

export default Home;
  