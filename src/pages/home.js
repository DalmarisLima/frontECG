import React from 'react';
import { Card, Col, Row, Popover } from 'antd';
import Feed from '../components/feed';
import Paragraph from 'antd/lib/typography/Paragraph';
import cora from './cora1.svg';


const text = <span>Olá! Eu sou a Cora e estou aqui para ajudar a navegar no ECG Tutor.</span>;
const content = (
    <Paragraph strong={true}>
        <img src={cora} className="Cora" alt="cora" />
        <Paragraph strong={true}>
            <p> O ECG tutor é um sistema com inteligência artificial</p>
            <p> capaz de individualizar seu aprendizado,</p>
            <p>além de conter tecnologia de gamificação,</p>
            <p>para que você se sinta engajado e motivado com seus estudos.</p>
            <p>O curso é composto por etapas, sendo possível desbloquear a </p>
            <p>próxima etapa apenas após concluir a anterior.</p>
            <p>Antes de iniciar a primeira fase, você deve escolher um Avatar. </p>
            <p>Vamos lá? É só clicar na área de perfil do usuário no canto </p>
            <p>superior direito da tela.</p>
            <p>Inicialmente, seu Avatar ainda é um bebê, </p>
            <p>mas poderá evoluir após a conclusão da primeira fase.</p>
        </Paragraph>
    </Paragraph>

);

const tablis = [{
    key: 'tab2',
    tab: 'Feed Notícias',

}];

const contentList = {
    tab2: <div><Feed />
    </div>,
};

export default class Home extends React.Component {
    state = {
        key: 'tab2',
    }

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key })
    }

    render() {
        return (
            <div>
                <Popover placement="top" content={content} title={text}>
                <Card
                    style={{ width: '100%', marginTop: "70px" }}
                    title='Início'
                    tabList={tablis}
                    activeTabKey={this.state.key}
                    onTabChange={(key) => { this.onTabChange(key, 'key'); }}>
                    {contentList[this.state.key]}
                </Card>
                </Popover>
            </div>
        );
    }
}