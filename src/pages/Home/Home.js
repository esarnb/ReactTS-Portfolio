import React, {Fragment} from "react"
import { useSelector } from "react-redux";
import { Card, Col, Row } from 'antd';

import "./Home.css";

function Home() {
  const loggedIn = useSelector(state => state.isLogged);

  return (
    <Fragment>
      <h1 className="page-title text-center">{loggedIn ? "Welcome User" : "Home"}</h1>
      <br />
      <Row className="home-rCards" justify="center">
        <Col className="home-cCards" xs={24} sm={20} md={12} lg={8} span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col className="home-cCards" xs={24} sm={20} md={12} lg={8} span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col className="home-cCards" xs={24} sm={20} md={12} lg={8} span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
      <Row className="home-rCards" justify="center">

        <Col className="home-cCards" xs={24} sm={20} md={12} lg={8} span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col className="home-cCards" xs={24} sm={20} md={12} lg={8} span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col className="home-cCards" xs={24} sm={20} md={12} lg={8} span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Home