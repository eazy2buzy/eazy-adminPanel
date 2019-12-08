import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './components/profile/Profile'
import SideBar from './components/side-navigation/SideBar';
import Reports from './components/reports/Report';
import UsersController from './components/controllers-crud/Users.controller';
import PostsController from './components/controllers-crud/Posts.controller';
import MyCalander from './components/calendar/Calendar';
import { Layout, Table } from 'antd';
import styled from 'styled-components';
import { SideBarStyle } from './components/side-navigation/SideBarStyle';
import AppFooter from './components/footer/AppFooter';
import AppHeader from './components/header/AppHeader';
import Actions from './components/calendar/actions/Actions';

const { Content, Header, Footer } = Layout;

const AppContentStyled = styled.div`
background:#fff;
padding:24px;
min-height:640px;
`
const AppRouter = props => {

    return (
        <Router>
            <SideBarStyle>
                <Layout id={'sider-layout'} style={{ minHeight: '100vh' }}>
                    <SideBar />
                    <Layout>
                        <Header>
                            <AppHeader />
                        </Header>
                        <AppContentStyled>
                            <Content>
                                <Switch>
                                    <Route exact path={'/profile'} component={Profile} />
                                    <Route exact path={'/reports'} component={Reports} />
                                    <Route exact path={'/controllers/users'} component={UsersController} />
                                    <Route exact path={'/controllers/posts'} component={PostsController} />
                                    <Route exact path={'/calendar'} component={MyCalander} />
                                    <Route exact path={'/calendar/actions'} component={Actions} />

                                </Switch>
                            </Content>
                        </AppContentStyled>
                        <Footer>
                            <AppFooter />
                        </Footer>
                    </Layout>

                </Layout>
            </SideBarStyle>
        </Router>
    )
}

export default AppRouter;