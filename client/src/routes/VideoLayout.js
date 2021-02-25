import React, { Component } from "react";
import Video from "../components/Video";

import { Row, Col, Divider } from "antd";
import "./VideoLayout.js";

const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

class VideoLayout extends Component {
  render() {
    return (
      <>
        <Divider orientation="left">Align Top</Divider>
        <Row justify="center" align="top">
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>

        <Divider orientation="left">Align Middle</Divider>
        <Row justify="space-around" align="middle">
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>

        <Divider orientation="left">Align Bottom</Divider>
        <Row justify="space-between" align="bottom">
          <Col span={4}>
            <DemoBox value={100}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={50}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={120}>col-4</DemoBox>
          </Col>
          <Col span={4}>
            <DemoBox value={80}>col-4</DemoBox>
          </Col>
        </Row>
      </>
    );
  }
}

export default VideoLayout;
