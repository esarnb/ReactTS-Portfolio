import React from "react";
import { Card,  Col, Row, Icon, Avatar } from 'antd';
import "./index.css"

const { Meta } = Card;

function Cards(props) {
	
	return (
		<div className="Cards" style={{ background: props.bg, padding: '30px' }}>
			<Row gutter={8} style={{ background: props.bg, justifyContent: "center", textAlign: "center", width: "auto"}}>
				{/* {props.list.length ? props.list : <Card key="card-placehold" title="title" bordered={false}>placeholder</Card>} */}
				{props.list.map((obj,index) => { return <Col style={{ background: props.bg}} span={3} offset={3}>
					<Card key={`${obj.key}-${index}`} style={{ width: obj.styleWidth }} 
						cover={ <img alt={obj.cover.alt} src={obj.cover.src}/> }
						actions={[ <Icon type="setting" key="setting" /> ]}>
						<Meta avatar={<Avatar src={obj.avatar} />} 
						title={obj.title} description={obj.desc} />
					</Card>
				</Col> })}
			</Row>
		</div>
	);
}

export default Cards;
