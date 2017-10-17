// import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import  './outside.css';


const OutSiderNav = ()=>{
    return(
        <Sider 
        trigger={null}
        collapsible
        collapsed={true}
        style={{ background: '#fff'}}>
            <Menu 
            theme="dark" 
            mode="inline" 
            defaultSelectedKeys={['1']}
            style={{minHeight:885}}
            >
                <Menu.Item key="1">
                    <Icon type="home" />
                    <span className="nav-text">系统首页</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="database" />
                    <span className="nav-text">基础数据</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="laptop" />
                    <span className="nav-text">生产监控</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="calculator" />
                    <span className="nav-text">数据分析</span>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}
OutSiderNav.propTypes={}
export default OutSiderNav;