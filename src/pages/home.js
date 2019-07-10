import React from "react";
import { Card, Col, Row, Popover } from "antd";
import Feed from "../components/feed";
import Paragraph from "antd/lib/typography/Paragraph";
import cora from "./cora.svg";
import Tutor from "../components/tutotrial";



const tablist = [{
  key: 'tab1',
  tab: 'Instrunções de Uso',
}, {
  key: 'tab2',
  tab: 'Feed Notícias',
}];
const contentList = {
  tab1: <Tutor/>,
  tab2: <Feed />,
};

export default class Home extends React.Component {
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
          title="Início"
          tabList={tablist}
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
