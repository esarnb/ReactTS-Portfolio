import React from "react";
import logo from "../../logo.svg";
import "../../App.css";

function NotFound() {
	return (
		<div className="NotFound">
			<header className="App-header" style={{ height: "fit-content" }}>
				<img src={logo} className="App-logo" alt="logo" />
				<p>404 Not Found. Please use the NavBar!</p>
				<a href="/">Powered by React</a>
			</header>
		</div>
	);
}

export default NotFound;
