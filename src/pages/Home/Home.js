import React, {Fragment} from "react"
import { useSelector } from "react-redux";
import { Card, Col, Row } from 'antd';
import Social from "../../components/Social/Social";

import "./Home.css";

function Home() {
  const loggedIn = useSelector(state => state.isLogged);

  return (
    <Fragment>
      <h1 className="page-title text-center">{loggedIn ? "Welcome User" : "Home"}</h1>
      <br />

      <Row className="home-rCards" justify="center">
        <Col className="home-cCards" xs={24} sm={20} md={12} lg={8} span={8}>
          <Card title="esarnb.com" bordered={false} extra={<a href="https://esarnb.com" target="_blank" rel="noreferrer">View</a>}>
            Personal website / Technology testing playground! Built with ReactJS, Redux, Ant Design. [Work in progress]
            <br /> <br />
          </Card>
        </Col>
        
        <Col className="home-cCards" xs={24} sm={20} md={12} lg={8} span={8}>
          <Card title="beta.esarnb.com" bordered={false} extra={<a href="http://beta.esarnb.com" target="_blank" rel="noreferrer">View</a>}>
            Beta subdomain website - learning playground. Built with Next.JS and Semantic UI. [Work in progress]
            <br /> <br />
          </Card>
        </Col>
        
        <Col className="home-cCards" xs={24} sm={20} md={12} lg={8} span={8}>
          <Card title="Portfolio" bordered={false} extra={<a href="https://esarnb.github.io/portfolio" target="_blank" rel="noreferrer">View</a>}>
            Portfolio - about myself & completed projects. Built with HTML (Bootstrap5 UI), CSS (Responsive & Animation), JS (JQuery & dayJS).
          </Card>
        </Col>
      </Row>

      <Row className="home-rCards" justify="center">
        <Col className="home-cCards" xs={24} sm={20} md={12} lg={8} span={8}>
          <Card title="Suggestions" bordered={false} extra={<a href="/threejs" target="_blank" rel="noreferrer">View</a>}>
            Check out the ThreeJS navbar tab to see 3D rendering! The one above is a work-in-progress render of our solar system. Also check out the Github tab to see my latest repository works!
          </Card>
        </Col>

        <Col className="home-cCards" xs={24} sm={20} md={12} lg={8} span={8}>
          <Card title="Social Media" bordered={false} /*extra={<a href="https://www.google.com/" target="_blank" rel="noreferrer">View</a>}*/>
          <div className="text-center"> <Social /> </div>
          </Card>
        </Col>
        
        <Col className="home-cCards" xs={24} sm={20} md={12} lg={8} span={8}>
          <Card title="Current Todos" bordered={false}  /*extra={<a href="https://www.google.com/" target="_blank" rel="noreferrer">View</a>}*/>
            Add a dark/light theme similar to portfolio. Add background skin images - also based on theme color. New tab for chat + profile integration.
          </Card>
        </Col>
      </Row>

    </Fragment>
  )
}
export default Home