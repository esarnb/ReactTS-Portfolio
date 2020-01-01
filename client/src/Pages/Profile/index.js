import React from "react";
import Waka from "../../Components/Waka"
import "./index.css";


class Profile extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillUnmount() {
		this.props.setCrumbs("Home", 1)
	}
	
	componentDidMount() {
		this.props.setCrumbs("Profile", 1)
	}

	render() {
		return (
			<div className={`Profile pfp-${this.props.theme}`}>
				<Waka />
			</div>
		);
	}
}

export default Profile;
