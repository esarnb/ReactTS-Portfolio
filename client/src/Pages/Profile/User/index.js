import React from "react";
import "./index.css"

function User(props) {
	let {name, avatar, notes} = props.userInfo
	console.log(notes);
	
	return (
		<div>
			<div className={`Center Large user-${props.theme}`}>Welcome {name} {/* ICON goes here, or on the left */} </div>
			{/* <br />    <br />    <br />  <div className={`user-${props.theme}`}>Here are your notes...</div><br /> */}
			<br />    <br />    <br />  <div className="text">Here are your notes...</div><br />
			{notes ? <ul>{notes.map((x,i) => <li  className="text" key={`Notes-${i}`}>{x}</li>)}</ul> : "No notes :c" }

			<br /><br /><br /><br /> <div>To Do: Center text, without bulletpoints</div>
		</div>
	);
}

export default User;
