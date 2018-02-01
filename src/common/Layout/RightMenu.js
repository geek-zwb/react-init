/**
 * Created by geekzwb on 2017/9/22.
 * What for: 右侧边栏
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Input, Icon } from 'antd';
import store from 'store';

const Search = Input.Search;

// styled components
const RightMenuBox = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
`;
const MenuContent = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > li {
    font-size: 16px;
    padding: 15px 20px;
    position: relative;
  }
  & .menu-ul {
    margin-right: 12px;
  }
  & .menu-ul>span{
    margin-right: 15px;
  }
`;
const MenuUl = styled.div`
  font-size: 14px;
  position: absolute;
  top: 30px;
  padding-top: 24px;
  right: 0px;
  z-index: 11;
  color: #333;
  display: none;
  width: calc(100% + 55px);
  min-width: 200px;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
  & div {
    background: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu-ul:hover & {
    display: block;
  }
`;

@withRouter
class RightMenu extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    store.clearAll();
    window.location = '/login';
  }

  render() {
    const {location} = this.props;

    const background = location.pathname.includes('user_center') || location.pathname.includes('setting-center');

    return (
      <RightMenuBox style={this.props.style}>
        <MenuContent>
          <li style={{background: location.pathname.includes('notification') && '#2592fc'}}>
            <Link to={'/notification'}>
              <Icon type="notification" />
            </Link>
          </li>
          <li className="menu-ul" onClick={this.dropDownUser}  style={{background: background && '#2592fc'}}>
            <span className="global-icon icon-user"></span>
            <span>{store.get('auth') && store.get('auth').username}</span>
            <MenuUl>
              <div style={{padding: '15px 0 10px'}}>
                <div style={{flex: '1', textAlign: 'center'}}>
                  <Link to="/user_center" style={{color: '#999'}}>
                    <div>
                      <span style={{fontSize: '25px'}} className="global-icon icon-user"></span>
                    </div>
                    <div>个人中心</div>
                  </Link>
                </div>
                <div style={{flex: '1', textAlign: 'center'}}>
                  <Link to="/setting-center" style={{color: '#999'}}>
                    <div>
                      <span style={{fontSize: '25px'}} className="global-icon icon-setting-center"></span>
                    </div>
                    <div>设置中心</div>
                  </Link>
                </div>
              </div>
              <div style={{padding: '15px 0', borderTop: '1px solid #ccc', }}>
                <a style={{color: '#17a0e7'}} onClick={this.logout}>
                  退出登录
                </a>
              </div>
            </MenuUl>
          </li>
        </MenuContent>
      </RightMenuBox>
    );
  }
}

RightMenu.propTypes = {
  style: PropTypes.object
};

export default RightMenu;