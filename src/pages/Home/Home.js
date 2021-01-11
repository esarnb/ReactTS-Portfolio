import React, {Fragment} from "react"
import { useSelector } from "react-redux";
// import { Card, Col, Row } from 'antd';

import "./Home.css";

function Home() {
  const loggedIn = useSelector(state => state.isLogged);

  return (
    <Fragment>
      <h1 className="page-title text-center">{loggedIn ? "Welcome User" : "Home"}</h1>
      <br />
      {/* <Row>
        <Col span={8} key={`Git-Cols`}>
          <Card key={`Git-Repos`}
            style={{ margin: 8 }}
            type="inner"
            title="title"
            extra={<a href="x">Repo</a>}
          >
            desc
          </Card>
        </Col>
      </Row> */}
    </Fragment>
  )
}
export default Home