import React from "react";
import { Row, Col } from "antd";

export default class Tabela extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <embed
              frameborder="0"
              src="https://firebasestorage.googleapis.com/v0/b/ecgfront-b11dd.appspot.com/o/N%C3%8DVEL%201%20-%20Texto.pdf?alt=media&token=995f6cf4-6528-41b8-a1e7-227445b773e9"
              width="100%"
              height="800"
              type="application/pdf"
            />
          </Col>
        </Row>
      </div>
    );
  }
}
