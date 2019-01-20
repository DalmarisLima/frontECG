import React from 'react';
import { Menu, Icon, Avatar, Badge, Layout } from 'antd';


const MenuItemGroup = Menu.ItemGroup;
const SubMenu = Menu.SubMenu;



export default class Pag extends React.Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (

            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal">
                <Menu.Item key="mail">
                    <Icon type="home" />Início
                    </Menu.Item>
                <Menu.Item key="app">
                    <Icon type="trophy" />Ranking
                    </Menu.Item>
                <SubMenu title={<span className="submenu-title-wrapper"><Icon type="snippets" />Material de Estudos</span>}>
                    <MenuItemGroup title="Modulo 1">
                        <Menu.Item key="Modulo:1"> Modulo 1
                        <Icon type="unlock" />
                        </Menu.Item>
                        <Menu.Item key="Questionario:1" disabled> Questionário 1
                        <Icon type="lock" />
                        </Menu.Item>
                    </MenuItemGroup>

                    <MenuItemGroup title="Modulo 2">
                        <Menu.Item key="Modulo:2" disabled >Modulo 2
                        <Icon type="lock" />
                        </Menu.Item>
                        <Menu.Item key="Questionario:2" disabled > Questionário 2
                        <Icon type="lock" />
                        </Menu.Item>
                    </MenuItemGroup>
                </SubMenu>

                <SubMenu title={<span className="submenu-title-wrapper"><Icon type="area-chart" />Relatório</span>}>
                    <MenuItemGroup>
                        <Menu.Item key="Relatorio:1"> Modulo 1
                        <Icon type="line-chart" />
                        </Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup >
                        <Menu.Item key="Relatorio:2" disabled > Modulo 2  <Icon type="pie-chart" />
                        </Menu.Item>
                    </MenuItemGroup>
                </SubMenu>

                <Badge dot> <Avatar icon="mail" /></Badge>
                <Badge dot> <Avatar style={{ right: '0%' }} icon="user" /></Badge>

            </Menu>

        )
    }

}
