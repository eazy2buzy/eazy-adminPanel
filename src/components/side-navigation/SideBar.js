import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
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


    return (
        <SideBarStyle>
            <Layout id={'sider-layout'} style={{ minHeight: '100vh' }}>
                <Sider width={200} collapsible collapsed={collapsed} onCollapse={col => setCollapsed(col)} className='sider-container'>
                    <Menu
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={['profile']}
                        defaultOpenKeys={['sub1']}
                        className='sider-menu-container'>
                        <Menu.Item key={'profile'}>{renderSubMenuTitle('profile', 'Profile')}</Menu.Item>
                        <SubMenu key={'control'} title={renderSubMenuTitle('control', 'Controller')}>
                            <Menu.Item key='clients'>Clients</Menu.Item>
                            <Menu.Item key='posts'>Posts</Menu.Item>
                        </SubMenu>
                        <SubMenu key="calender" title={renderSubMenuTitle('calendar', 'Calendar')}>
                            <Menu.Item key="cal">My Calendar</Menu.Item>
                            <Menu.Item key="actions">Actions</Menu.Item>
                            <Menu.Item key="waiting">Waiting List</Menu.Item>
                        </SubMenu>
                        <Menu.Item key='reports'>{renderSubMenuTitle('dashboard', 'Reports')}</Menu.Item>

                    </Menu>
                </Sider>
            </Layout>
        </SideBarStyle>
    )

}

export default SideBar;