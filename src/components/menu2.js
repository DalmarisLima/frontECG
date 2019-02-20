import React from 'react';
import { Layout, Menu, Icon, Avatar, Badge } from 'antd';
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import Report from "../pages/report";
import Home from "../pages/home";
import StudyMaterial from "../pages/studyMaterial";
import Ranking from "../pages/ranking";


const {
    Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

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
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <Menu theme="dark" menu-dark-bg='#6CB6C9' defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="home" />
                            <span>Início</span>
                            <Link to="./"></Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Icon type="user" />
                            <span>Perfil</span>
                            <Link to="./" />
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="trophy" />
                                <span>Ranking</span>
                                <Link to="./Ranking" />
                            </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span> <Icon type="snippets" />
                                <span>Material de Estudos</span>
                            </span>}
                        >
                            <Menu.Item key="3"> Modulo 1   <Icon type="unlock" /><Link to="./matstudy"></Link></Menu.Item>
                            <Menu.Item key="4" disabled>Modulo 2 <Icon type="lock" /></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="area-chart" />
                                <span>Relatórios</span>
                            </span>}
                        >
                            <Menu.Item key="5">Modulo 1   <Icon type="unlock" /> <Link to="./Report"></Link></Menu.Item>
                            <Menu.Item key="6" disabled>Modulo 2 <Icon type="lock" /></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="7">
                            <Icon type="question" />
                            <span>Ajuda</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
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
                        NEES-Núcleo de Excelência em Tecnologias Sociais 2019
          </Footer>
                </Layout>
            </Layout>
        );
    }
}

