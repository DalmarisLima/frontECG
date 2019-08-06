import React from "react";
import { Card, Col, Row, Popover, Button, Icon } from "antd";
import Paragraph from 'antd/lib/typography/Paragraph';
import cora from "./cora.svg";


const text = <span>Title</span>;
const content = (
    <div>
        <Paragraph strong={true}>PASSO 1</Paragraph>

        <p>O ECG tutor é um sistema com inteligência artificial capaz de
      individualizar seu aprendizado,</p>
        <p> além de conter tecnologia de gamificação, para que você se sinta engajado e motivado com</p>
        <p> seus estudos.</p>

        <Paragraph strong={true}>PASSO 2</Paragraph>
        <p>Para começar a navegar, clique em   Feed de Notícias, na aba logo acima de mim. </p>
    </div>
);

export default class Tutorial extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <Popover content={content} placement="right"
                            title="Olá! Eu sou a Cora e estou aqui para ajudar você a navegar pelo ECG Tutor."
                            trigger="hover">
                            <img
                                src={cora}
                                className="Cora"
                                alt="cora"
                                style={{ marginLeft: "5px" }}
                            />
                        </Popover>

                    </Col>
                    <Col span={12}>

                    </Col>
                </Row>
            </div>
        )
    }

}

