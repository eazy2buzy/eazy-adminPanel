import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from "react-router";

import { SideBarStyle } from './SideBarStyle';

const { Sider } = Layout;
const { SubMenu } = Menu;

const renderSubMenuTitle = (iconType, text) => {
    return (
        <span>
            <Icon type={iconType} />
            {text}
        </span>
    )
}

const SideBar = props => {
    const [collapsed, setCollapsed] = useState(false);

    const handleRoutesChanged = path => props.history.push(path);

    return (

        <Sider width={200} collapsible collapsed={collapsed} onCollapse={col => setCollapsed(col)} trigger={null} className='sider-container'>
            <Menu
                mode="inline"
                theme="dark"
                defaultSelectedKeys={['profile']}
                defaultOpenKeys={['sub1']}
                className='sider-menu-container'>
                <div style={{ height: 50, textAlign: 'center' }}>
                    <div style={{ marginTop: 37 }} >
                        <span style={{ paddingTop: 20 }}>easyToBusy</span>
                    </div>
                </div>
                <SubMenu key={'staff'} title={renderSubMenuTitle('usergroup-add', 'Staff')}>
                </SubMenu>
                <SubMenu key={'control'} title={renderSubMenuTitle('control', 'Controller')}>
                    <Menu.Item key='users' onClick={() => handleRoutesChanged('/controllers/users')}>Clients</Menu.Item>
                    <Menu.Item key='posts' onClick={() => handleRoutesChanged('/controllers/posts')}>Posts</Menu.Item>
                </SubMenu>
                <SubMenu key="calender" title={renderSubMenuTitle('calendar', 'Calendar')}>
                    <Menu.Item key="cal" onClick={() => handleRoutesChanged('/calendar')}>My Calendar</Menu.Item>
                    <Menu.Item key="actions" onClick={() => handleRoutesChanged('/calendar/actions')}>Actions</Menu.Item>
                    <Menu.Item key="waiting">Waiting List</Menu.Item>
                </SubMenu>
                <Menu.Item key='reports' onClick={() => handleRoutesChanged('/reports')}>{renderSubMenuTitle('pie-chart', 'Reports')}</Menu.Item>

            </Menu>

        </Sider >
    )

}

export default withRouter(SideBar);