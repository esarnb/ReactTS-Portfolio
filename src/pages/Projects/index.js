import React, { Component, Fragment } from 'react';
// import { Card, Col, Row } from 'antd';
import Github from "../../components/Github";
import "./Projects.css";

export default class Projects extends Component {

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    
  }

  render() {
    return <Fragment>
      <Github />
    </Fragment>
  }
}
