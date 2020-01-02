import React from "react";
import Guest from "./Guest";
import User from "./User";
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

	getAccount = () => {
		/* Load in a user profile */
		if (!this.props.profile) {
			// Show login unit (ask if they should be kept signed in [cookies/localstorage])

			// Login Check (crypted hash comparisons)

			// Pull info from database

			// Serve into this.props.profile state
			this.setupAcc()

		} else {
			// Show personal unit
		}
	}

	setupAcc = () => {
		this.props.setProfileHome({
			name: "User A",
			avatar: "image.png",
			notes: [],
		})
	}

	render() {
		return (
			<div className={`Profile pfp-${this.props.theme}`}>
				{this.props.profile ? <User /> : <Guest setupAcc={this.setupAcc}/>}
			</div>
		);
	}
}

export default Profile;
