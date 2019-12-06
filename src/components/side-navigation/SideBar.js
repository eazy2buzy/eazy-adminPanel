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

        <Sider width={200} collapsible collapsed={collapsed} onCollapse={col => setCollapsed(col)} className='sider-container'>
            {
                !collapsed && <Menu
                    mode="inline"
                    theme="dark"
                    defaultSelectedKeys={['profile']}
                    defaultOpenKeys={['sub1']}
                    className='sider-menu-container'>
                    <Menu.Item key={'profile'} onClick={() => handleRoutesChanged('/profile')}>{renderSubMenuTitle('profile', 'Profile')}</Menu.Item>
                    <SubMenu key={'control'} title={renderSubMenuTitle('control', 'Controller')}>
                        <Menu.Item key='users' onClick={() => handleRoutesChanged('/controllers/users')}>Clients</Menu.Item>
                        <Menu.Item key='posts' onClick={() => handleRoutesChanged('/controllers/posts')}>Posts</Menu.Item>
                    </SubMenu>
                    <SubMenu key="calender" title={renderSubMenuTitle('calendar', 'Calendar')}>
                        <Menu.Item key="cal" onClick={() => handleRoutesChanged('/calendar')}>My Calendar</Menu.Item>
                        <Menu.Item key="actions">Actions</Menu.Item>
                        <Menu.Item key="waiting">Waiting List</Menu.Item>
                    </SubMenu>
                    <Menu.Item key='reports' onClick={() => handleRoutesChanged('/reports')}>{renderSubMenuTitle('pie-chart', 'Reports')}</Menu.Item>

                </Menu>
            }
            {
                collapsed && <Menu
                    mode="inline"
                    theme="dark"
                    defaultSelectedKeys={['profile']}
                    defaultOpenKeys={['sub1']}
                    className='sider-menu-container'>
                    <Menu.Item key={'profile'}>{renderSubMenuTitle('profile', '')}</Menu.Item>
                    <SubMenu key={'control'} title={renderSubMenuTitle('control', '')}>
                        <Menu.Item key='clients'>Clients</Menu.Item>
                        <Menu.Item key='posts'>Posts</Menu.Item>
                    </SubMenu>
                    <SubMenu key="calender" title={renderSubMenuTitle('calendar', '')}>
                        <Menu.Item key="cal">My Calendar</Menu.Item>
                        <Menu.Item key="actions">Actions</Menu.Item>
                        <Menu.Item key="waiting">Waiting List</Menu.Item>
                    </SubMenu>
                    <Menu.Item key='reports'>{renderSubMenuTitle('pie-chart', '')}</Menu.Item>

                </Menu>
            }
        </Sider>
    )

}

export default withRouter(SideBar);