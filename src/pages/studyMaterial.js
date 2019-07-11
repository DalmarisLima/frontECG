import React from "react";
import { Card, Row, Col } from "antd";
import Ques from "../components/p1";
import Video from "../components/video";
import Text from "../components/text";
import Tree from "../components/treeN1";
import CasoClinico from "../components/casoclinico";

const tabList = [
  {
    key: "tab1",
    tab: "Arvore"
  },
  {
    key: "tab2",
    tab: "Material de Texto"
  },
  {
    key: "tab3",
    tab: "Material de Vídeo"
  },
  {
    key: "tab4",
    tab: "Praticar"
  },
  {
    key: "tab5",
    tab: "Caso Clínico"
  }
];
const contentList = {
  tab1: (
    <Row>
      <Col span={24}>
        <Tree />
      </Col>
    </Row>
  ),
  tab2: (
    <Row>
      <Col span={24}>
        <Text />
      </Col>
    </Row>
  ),
  tab3: (
    <Row>
      <Col span={24}>
        <Video />
      </Col>
    </Row>
  ),
  tab4: (
    <Row>
      <Col span={24}>
        <Ques />
      </Col>
    </Row>
  ),
  tab5: (
    <Row>
      <Col span={24}>
        <CasoClinico />
      </Col>
    </Row>
  )
};

export default class StudyMaterial extends React.Component {
  state = {
    key: "tab1"
  };
  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };
  render() {
    return (
      <div>
        <Card
          style={{ width: "100%", marginTop: "70px" }}
          title="Material de Estudos"
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, "key");
          }}
        >
          {contentList[this.state.key]}
        </Card>
      </div>
    );
  }
}
