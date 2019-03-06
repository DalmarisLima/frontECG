import React from 'react';
import { Layout, Menu, Icon, Progress, Row, Col, Typography } from 'antd';
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import Report from "../pages/report";
import Home from "../pages/home";
import StudyMaterial from "../pages/studyMaterial";
import Ranking from "../pages/ranking";
import User from "../components/user";


const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const { Title } = Typography;

export default class Primary extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}>
                    <Menu theme="dark" menu-dark-bg='#6CB6C9' defaultSelectedKeys={['1']} mode="inline">

                        <Menu.Item key="2">
                            <Icon type="home" />
                            <span>Início</span>
                            <Link to="./"></Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="trophy" />
                            <span>Ranking</span>
                            <Link to="./Ranking" />
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span> <Icon type="snippets" />
                                <span>Material de Estudos</span>
                            </span>}>
                            <Menu.Item key="4"> Nível  1   <Icon type="unlock" /><Link to="./matstudy"></Link></Menu.Item>
                            <Menu.Item key="5" disabled> Nível 2 <Icon type="lock" /></Menu.Item>
                            <SubMenu
                                key="sub2"
                                title={<span disabled><Icon type="lock" />
                                    <span >Nível 3</span>
                                </span>} >
                                <Menu.Item key="6" disabled>Modulo 1   <Icon type="lock" /></Menu.Item>
                                <Menu.Item key="7" disabled>Modulo 2 <Icon type="lock" /></Menu.Item>
                            </SubMenu>
                            <Menu.Item key="8" disabled> Nível 4 <Icon type="lock" /></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={<span><Icon type="area-chart" />
                                <span>Relatórios</span>
                            </span>} >
                            <Menu.Item key="8"> Nível 1   <Icon type="unlock" /> <Link to="./Report"></Link></Menu.Item>
                            <Menu.Item key="9" disabled> Nível 2 <Icon type="lock" /></Menu.Item>
                            <SubMenu
                                key="sub2"
                                title={<span disabled><Icon type="lock" />
                                    <span >Nível 3</span>
                                </span>} >
                                <Menu.Item key="10" disabled>Modulo 1   <Icon type="lock" /></Menu.Item>
                                <Menu.Item key="11" disabled>Modulo 2 <Icon type="lock" /></Menu.Item>
                            </SubMenu>
                            <Menu.Item key="12" disabled> Nível 4 <Icon type="lock" /></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="13">
                            <Icon type="question" />
                            <span>Ajuda</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <div>
                            <Row>
                                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6 }} >
                                    <Title level={2} style={{ marginTop: 10 }}>LOGO</Title>
                                </Col>
                                <Col xs={{ span: 4, offset: 3 }} lg={{ span: 4, offset: 6 }}  >
                                    <User />
                                </Col>
                                <Col xs={{ span: 4, offset: 2 }} lg={{ span: 4, offset: 2 }}>
                                    <Progress
                                        status="active"
                                        strokeColor='#6CB6C9'
                                        strokeWidth="25px"
                                        showInfo={false}
                                        percent={50} />
                                </Col>
                            </Row>
                        </div>

                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <div>
                            <Menu />
                            <Route path="/" exact component={Home} />
                            <Route path="/ranking" exact component={Ranking} />
                            <Route path="/report" exact component={Report} />
                            <Route path="/matstudy" exact component={StudyMaterial} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Copyright 2019- ECG TUTOR
          </Footer>
                </Layout>
            </Layout>
        );
    }
}

