import React from "react";

function Guest(props) {
	return (
		<div className={`Guest fr-${props.theme}`}>
			<h1 style={{color: "white"}}>{"Guest Account"}</h1> 
			<button onClick={() => props.setupAcc()}>Setup</button>
		</div>
	);
}

export default Guest;
