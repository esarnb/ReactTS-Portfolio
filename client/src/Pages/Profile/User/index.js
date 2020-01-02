import React from "react";

function User(props) {
	return (
		<div className={`User fr-${props.theme}`}>
			<h1 style={{color: "white"}} >{"User Account"}</h1>
		</div>
	);
}

export default User;
