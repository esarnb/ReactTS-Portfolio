import React from "react";
import "./index.css";
import Cards from "../Cards";

function Main(props) {
	return (
		<div className={`Main main-${props.theme}`}>
            <p className="Center Large">Welcome Home.</p>
			<br /><br /><br />
			<Cards bg="#1E2022" list={[
				{
					key:"test",
					styleWidth: 300,
					cover: { alt: "pic",  src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" },
					action: { link: "" },
					avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
					title: "title",
					desc: "desc"

				},
				{
					key:"test",
					styleWidth: 300,
					cover: { alt: "pic",  src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" },
					action: { link: "" },
					avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
					title: "title",
					desc: "desc"

				},
				{
					key:"test",
					styleWidth: 300,
					cover: { alt: "pic",  src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" },
					action: { link: "" },
					avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
					title: "title",
					desc: "desc"

				}
			]} />
		</div>
	);
}


export default Main;
