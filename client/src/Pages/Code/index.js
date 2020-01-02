import React from "react";
import Waka from "../../Components/Waka"
import "./index.css";


class Code extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillUnmount() {
		this.props.setCrumbs("Home", 1)
	}
	
	componentDidMount() {
		this.props.setCrumbs("Code", 1)
	}

	render() {
		return (
			<div className={`Code cwk-${this.props.theme}`}>
				<Waka />
			</div>
		);
	}
}

export default Code;
