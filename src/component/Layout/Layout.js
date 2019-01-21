// react
import React from "react";

import { Menu, Icon } from 'antd';
import styles from "./Layout.css"

// react-router
import {Route, Router, Switch, Link} from 'react-router-dom';
import createHistory from 'history/createHashHistory';

// history
const history = createHistory();

import ArticleCreate from "../ArticleCreate/ArticleCreate.js";

import Logo from "./logo.svg";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuStyle: {width: 256, height: this.getHeight()},
        };
    }

    getHeight() {
        return $(window).height();
    }

    componentDidMount() {
        let self = this;

        $(window).on('resize', () => {
            let menuStyle = Object.assign({}, this.state.menuStyle)
            menuStyle.height = self.getHeight()
            self.setState({menuStyle: menuStyle});
        })
    }

    handleClick(event) {
        history.push(event.key);
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <div className={styles.header} id="header">
                        <img src={Logo} className={styles.logo} onClick={()=>{window.location.href="/";}}/>
                    </div>
                    <div className={styles.sidebar}>
                        <Menu
                            onClick={this.handleClick.bind(this)}
                            style={this.state.menuStyle}
                            mode="inline"
                        >
                            <Menu.SubMenu key="article-submenu" title={<span><Icon type="mail" /><span>文章管理</span></span>}>
                                <Menu.Item key="/article/create">新建文章</Menu.Item>
                                <Menu.Item key="/article/delete">删除文章</Menu.Item>
                            </Menu.SubMenu>
                            <Menu.SubMenu key="user-submenu" title={<span><Icon type="appstore" /><span>用户管理</span></span>}>
                                <Menu.Item key="/user/create">新建用户</Menu.Item>
                                <Menu.Item key="/user/delete">删除用户</Menu.Item>
                            </Menu.SubMenu>
                        </Menu>
                    </div>
                    <div className={styles.content}>
                        <Switch>
                            <Route exact path="/" render={ ()=>{ return (<h1>首页</h1>);} } />
                            <Route path="/article/create" component={ArticleCreate}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}
