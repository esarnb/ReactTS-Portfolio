import React from "react";
import Waka from "../../Components/Waka"
import "./index.css";

function Profile(props) {
	return (
		<div className={`Profile pfp-${props.theme}`}>
			<Waka />
		</div>
	);
}

export default Profile;
