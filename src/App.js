// basic
import React, { Component } from 'react';

// route
import { withRouter } from 'react-router-dom';

// global func
import { getBreadInfo } from './utils/globalFunc';

// component
import { Layout, Breadcrumb } from 'antd';
import SiderMenu from './common/Layout/SiderMenu';
import RightMenu from './common/Layout/RightMenu';

// style
import styled, { keyframes } from 'styled-components';

import logo from './logo.svg';

const {Content} = Layout;

// === styledcomponents
const WrapHeader = styled.header`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: #007bc2;
  height: 60px;
  position: relative;
  color: #fff;
  & a {
    color: #fff;
  }
`;
// 注意该keyframes 要在使用前定义
const HeaderLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
const HeaderLogo = styled.img.attrs({
  src: logo
})`
  flex: 0 0 60px;
  animation: ${HeaderLogoSpin} infinite 20s linear;
  height: 60px;
`;

@withRouter
class App extends Component {
  render() {
    return (
      <Layout style={{height: '100vh', backgroundColor: '#f2f2f4', overflow: 'hidden'}}>
        <WrapHeader>
          <HeaderLogo/>
          {/* 右侧栏 */}
          <RightMenu style={{height: '100%'}}>
          </RightMenu>
        </WrapHeader>
        <Layout style={{flexDirection: 'row', height: 'calc(100vh - 110px)', background: '#f2f2f4'}}>
          {/*左侧导航栏*/}
          <SiderMenu />

          {/*content*/}
          {/*这里写两个 Layout 是为了隐藏滚动条， 遗留问题： box-shadow */}
          <Layout style={{
            margin: '0 0 0 15px',
            background: 'none',
            position: 'relative',
            overflow: 'hidden',
            // boxShadow: '0 0 10px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <div
              style={{
                width: 'calc(100% + 20px)',
                paddingRight: '4px',
                backgroundColor: '#fff',
                overflowY: 'scroll',
                overflowX: 'hidden'
              }}>
              <Breadcrumb
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  top: '0',
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#f2f2f4'
                }}>
                {getBreadInfo(this.props.location.pathname).map((item, index) => <Breadcrumb.Item
                  key={index}>{item}</Breadcrumb.Item>)}
              </Breadcrumb>
              <Content style={{background: '#f2f2f4', margin: '42px 0 0', minHeight: 380}}>
                <div style={{minHeight: 350, backgroundColor: '#fff', borderRadius: '5px'}}>
                  {this.props.children}
                </div>
                <Layout style={{height: '30px', backgroundColor: '#f2f2f4'}}>
                </Layout>
              </Content>
            </div>
          </Layout>

          {/*right sider*/}
          <div style={{flex: '0 0 15px'}}></div>

        </Layout>
      </Layout>
    );
  }
}

export default App;
