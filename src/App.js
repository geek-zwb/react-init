/**
 * @file layout组件~ 所有 auth 为 true 的组件，都会被包裹在这个组件中
 */

// lib
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';

// global func
import { getBreadInfo } from './utils/globalFunc';

// component
import SiderMenu from './common/Layout/SiderMenu';
import RightMenu from './common/Layout/RightMenu';

import logo from './logo.svg';

const {Content} = Layout;

// === styledcomponents
const WrapHeader = styled.header`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: #353e42;
  height: 60px;
  position: relative;
  color: #fff;
  & a {
    color: #fff;
  }
`;
const HeaderLogo = styled.div`
  flex: 0 0 160px;
  text-align: center;
  height: 40px;
  & img {
    height: 100%;
    width: auto;
  }
`;
const ContentBox = styled.div`
  width: calc(100% + 20px);
  padding-right: 4px;
  background-color: #fff;
  min-height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

@withRouter
class App extends Component {
  render() {
    return (
      <Layout style={{height: '100vh', backgroundColor: '#f2f2f4', overflow: 'hidden'}}>
        <WrapHeader>
          <HeaderLogo>
            <img src={logo} alt="Home Page"/>
          </HeaderLogo>
          {/* 右侧栏 */}
          <RightMenu style={{height: '100%'}}>
          </RightMenu>
        </WrapHeader>

        <Layout style={{flexDirection: 'row', height: 'calc(100vh - 110px)', background: '#f2f2f4'}}>
          {/*左侧导航栏*/}
          <SiderMenu
            style={{flex: '0 0 165px', maxWidth: '200px', minWidth: '165px', width: '165px'}}
          />

          {/*content*/}
          {/*这里写两个 Layout 是为了隐藏滚动条， 遗留问题： box-shadow */}
          <Layout style={{
            margin: '0',
            background: 'none',
            position: 'relative',
            overflow: 'hidden',
            // boxShadow: '0 0 10px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <ContentBox>
              <Content style={{background: '#f2f2f4', minHeight: 350, height: '100%'}}>
                <div style={{minHeight: 350, height: '100%', backgroundColor: '#fff', borderRadius: '5px'}}>
                  {this.props.children}
                  {/*{
                    // 模块的组件将被包含在此
                    // 给子组件添加一些公共的 props， 比如 breadInfo, 选择的 application 等
                    // 子组件判断是否应用改变， 在子组件 componentWillReceiveProps 周期方法中去检测 $$applicationSelected 是否改变
                    React.Children.map(this.props.children, child =>
                      React.cloneElement(
                        child,
                        {
                          breadInfo: getBreadInfo(this.props.location.pathname),
                        }
                      ))
                  }*/}
                </div>
                {/*<Layout style={{height: '30px', backgroundColor: '#f2f2f4'}}>
                </Layout>*/}
              </Content>
            </ContentBox>
          </Layout>

        </Layout>
      </Layout>
    );
  }
}

export default App;
