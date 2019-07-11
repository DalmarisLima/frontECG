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
              src="https://firebasestorage.googleapis.com/v0/b/ecgfront-b11dd.appspot.com/o/N%C3%ADvel%202%20-%20Texto.pdf?alt=media&token=ca4acadf-44d4-4fa2-834d-16e81e594c9b"
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
