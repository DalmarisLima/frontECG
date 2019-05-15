import React from "react";
import { Row, Col } from "antd";
import { Layout, Menu, Icon, Dropdown, Typography, Badge } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        <iframe
          frameborder="0"
          width="100%"
          height="100"
          src="https://www.youtube.com/embed/v7Q9BrNfIpQ?controls=0&showinfo=0"
        />
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        <iframe
          frameborder="0"
          width="100%"
          height="100"
          src="https://www.youtube.com/embed/IS9TD9fHFv0?controls=0&showinfo=0"
        />
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
        <iframe
          frameborder="0"
          width="100%"
          height="100"
          src="https://www.youtube.com/embed/ftn4YqybQww?controls=0&showinfo=0"
        />
      </a>
    </Menu.Item>
  </Menu>
);

export default class Video extends React.Component {
  render() {
    return (
      <div>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Visualizar vídeo <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    );
  }
}
