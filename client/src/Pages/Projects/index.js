import React from "react";
import "./index.css";
import Cards from "../../Components/Cards";

class Projects extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillUnmount() {
		this.props.setCrumbs("Home", 1)
	}
	
	componentDidMount() {
		this.props.setCrumbs("Projects", 1)
	}

	render() {
		return (
			<div className={`Projects proj-${this.props.theme}`}>
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
}

export default Projects;
