import React from "react";
import "./index.css";

class Projects extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillUnmount() {
		this.props.setCrumbs("Home", 1)
	}
	
	componentDidMount() {
		this.props.setCrumbs("Projects", 1)
	}

	render() {
		return (
			<div className={`Projects proj-${this.props.theme}`}>
				Projects
			</div>
		);
	}
}

export default Projects;
