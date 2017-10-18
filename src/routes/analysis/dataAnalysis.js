import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'dva/router';
import { Switch, Router, Route, IndexRoute ,routerRedux ,Redirect } from 'dva/router';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import factoryList from '../factory/factoryList/factoryList';
import machineList from '../machine/machineList';
import factoryMap from '../factory/factoryMap/factoryMap';
import workshopMG from '../basic/workshop/workshopList';
import devModel from '../deviceModel/main';
import devVendor from '../vendor/devVendor';
import devList from '../deviceList/deviceList';
const DataAnalysis=(props)=>{
    console.log(props)
    const {match}=props
    return(
        <div style={{  width:'100%',display:'flex' }}>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                    >
                    <SubMenu key="sub1" title={<span><Icon type="user" />设备综合效率</span>}>
                        <Menu.Item key="1">
                        <Link to="/dataAnalysis/factory">
                            机械加工线
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                        <Link to="/dataAnalysis/workshop">
                            包装线
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/dataAnalysis/machine">
                                焊接线
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop" />质量过程控制</span>}>
                        <Menu.Item key="7">设备品牌</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    <Route path={`${match.url}/factory`}  component={factoryList} />
                    <Route path={`${match.url}/workshop`} component={workshopMG} />
                    <Route path={`${match.url}/machine`} component={machineList} />
                    <Route path={`${match.url}/devcategory`} component={devModel} />
                    <Route path={`${match.url}/dev-vendor`} component={devVendor} />
                    <Route path={`${match.url}/devicelist`} component={devList} />
                </Content>
            </Layout>
        </div>
    )
}
export default DataAnalysis;