import React from "react";
import "./index.css";

class Discord extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillUnmount() {
		this.props.setCrumbs("Home", 1)
	}
	
	componentDidMount() {
		this.props.setCrumbs("Discord", 1)
	}

	render() {
		return (
			<div className={`Discord djs-${this.props.theme}`}>
				Discord
			</div>
		);
	}
}

export default Discord;
