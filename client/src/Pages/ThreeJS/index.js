import React from "react";
import "./index.css";

class ThreeJS extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillUnmount() {
		this.props.setCrumbs("Home", 1)
	}
	
	componentDidMount() {
		this.props.setCrumbs("ThreeJS", 1)
	}

	render() {
		return (
			<div className={`ThreeJS three-${this.props.theme}`}>
				ThreeJS
			</div>
		);
	}
}

export default ThreeJS;
