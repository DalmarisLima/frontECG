import React from 'react';
import { Layout, Menu, Icon, Typography, Badge } from 'antd';
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import Report from "../pages/report";
import Home from "../pages/home";
import StudyMaterial from "../pages/studyMaterial";
import Ranking from "../pages/ranking";
import User from "../components/user";
import Avaliation from "../pages/avaliation"
import { Avatar } from '@material-ui/core';


const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;


export default class Primary extends React.Component {


    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="2">
                            <Icon type="home" style={{ fontSize: '20px' }}/>
                            <span>Início</span>
                            <Link to="./"></Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="trophy" style={{ fontSize: '20px' }}/>
                            <span>Ranking</span>
                            <Link to="./Ranking" />
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span> <Icon type="snippets" style={{ fontSize: '20px' }}/>
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
                            title={<span><Icon type="area-chart" style={{ fontSize: '20px' }} />
                                <span>Relatórios</span>
                            </span>}>
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
                            <Icon type="star" style={{ fontSize: '20px' }}/>
                            <span>Avaliar</span>
                            <Link to="./Avaliation"></Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub4"
                            title={<span> <User /></span>} >
                            <Menu.Item key="14"><Icon type="user" /> Pefil</Menu.Item>
                            <Menu.Item key="15"><Badge dot><Icon type="notification" />
                            </Badge> Notificações </Menu.Item>
                            <Menu.Item key="16"><Icon type="logout" /> Sair</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Header>
                <Content style={{ margin: '50px' }}>
                    <div>
                        <Menu />
                        <Route path="/" exact component={Home} />
                        <Route path="/ranking" exact component={Ranking} />
                        <Route path="/report" exact component={Report} />
                        <Route path="/matstudy" exact component={StudyMaterial} />
                        <Route path="/avaliation" exact component={Avaliation} />
                    </div>
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                    Copyright ©2019 ECG TUTOR
            </Footer>
            </Layout>
        );
    }
}




