/**
 * @file  左侧导航栏
 * @author Created by geekzwb on 2017/9/19.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import store from 'store';

const {SubMenu} = Menu;
const {Sider} = Layout;


@withRouter
class SiderMenu extends Component {
  onSiderClick(e) {
    const {location, history} = this.props;
    if (location.pathname === e.key) return;
    history.push(e.key);
  }

  render() {
    const defaultCollapsed = !!store.get('defaultCollapsed');
    const {location, style} = this.props;

    let defaultSelectedKeys = '';
    let defaultOpenKeys = '';
    switch (true) {
      case['/', '/dashboard'].indexOf(location.pathname) !== -1:
        defaultSelectedKeys = '/dashboard';
        break;
      case['/submenu'].indexOf(location.pathname) !== -1:
        defaultSelectedKeys = '/submenu';
        defaultOpenKeys = '/menu';
        break;
      case['/users', '/usersEdit'].indexOf(location.pathname) !== -1:
        defaultSelectedKeys = '/users';
        break;
      case['/permissions', '/permissionsEdit'].indexOf(location.pathname) !== -1:
        defaultSelectedKeys = '/permissions';
        break;
      default:
        defaultSelectedKeys = '/dashboard';
    }

    return (
      <Sider
        className="dsm-sider"
        collapsible
        defaultCollapsed={defaultCollapsed}
        onCollapse={() => store.set('defaultCollapsed', !store.get('defaultCollapsed'))}
        style={style}
        width={165}
        collapsedWidth={54}
      >
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[defaultSelectedKeys]}
          defaultOpenKeys={defaultCollapsed ? [] : [defaultOpenKeys]}
          onClick={this.onSiderClick.bind(this)}
          style={{height: '100%', borderRight: 0, background: '#303743'}}
        >
          <Menu.Item style={{background: '#485164', height: '60px', lineHeight: '60px', marginBottom: '8px', fontSize: '16px'}}
                     key="/dashboard">
            <i className="anticon global-icon icon-dashboard"></i>
            <span>概览</span>
          </Menu.Item>
          <SubMenu
            key="menu"
            style={{background: '#f2f2f4'}}
            title={<span style={{fontSize: '16px'}}><Icon type="user"/><span>一级菜单</span></span>}
          >
            <Menu.Item style={{fontSize: '16px'}} key="/submenu">子菜单</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

SiderMenu.propTypes = {
  style: PropTypes.object,
};

export default SiderMenu;