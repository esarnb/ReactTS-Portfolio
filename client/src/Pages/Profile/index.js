import React from "react";
import "./index.css";

function Profile(props) {
	return (
		<div className={`Profile pfp-${props.theme}`}>
			Profile page
		</div>
	);
}

export default Profile;
