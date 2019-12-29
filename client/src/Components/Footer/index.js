import React from "react";
import "./index.css";

function Footer(props) {
	return (
        <div className = {props.theme === "dark" ? "footdark Footer" : "footlight  Footer"}></div>
    );
}

export default Footer;
