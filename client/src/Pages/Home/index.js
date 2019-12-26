import React from "react";
import Main from "../../Components/Main/";
import Navbar from "../../Components/Navbar/";
import Footing from "../../Components/Footer/";
import "./index.css";

function Home() {
	return (
		<React.Fragment>
			<Navbar />
			<Main />
			<Footing/>
		</React.Fragment>
	);
}

export default Home;
  