import React, { Component } from 'react';
// import { connect } from 'dva';
// import { Link } from 'dva/router';
import styles from './IndexPage.css';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const {  Content } = Layout;
import { Header, Bread, Sider}  from '../components/LayoutBox/index';
// console.log(styles)
// const { Header, Bread, Sider } = LayoutBox;

const App = ({children,app})=>{
    // console.log(children);
    // console.log(app);
    return(
        <Layout className={ styles.fullHeight}>
            <Header />
            <Layout className="ant-layout-has-sider">
                <Sider />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Bread />
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

/* App.propTypes = {
}; */

export default App;