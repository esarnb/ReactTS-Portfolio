import React from "react";
import "./index.css";

function Main(props) {
	return (
		<div className={`Main main-${props.theme}`}>
            <p className="Center Large">Welcome Home.</p>
		</div>
	);
}

export default Main;
