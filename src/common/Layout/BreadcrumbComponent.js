/**
 * Created by geekzwb on 2017/11/20.
 * What for: 内容块的 header
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BreadcrumbBox = styled.div`
  position: absolute;
  z-index: 10;
  background: #fff;
  top: 0;
  width: 100%;
  padding: 0 12px;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;
`;
const UL = styled.ul`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background: #feffff;
  padding: 10px 0;
  border-bottom: 1px solid #cbcccd;
  & li {
    margin-right: 10px;
  }
`;
const FirstLi = styled.li`
  border-right: 3px solid #353e42;
`;

class BreadcrumbComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {breadInfo=['Not Found'], style, ulStyle} = this.props;
    return (
      <BreadcrumbBox style={style}>
        <UL style={ulStyle}>
          <FirstLi>&nbsp;</FirstLi>
          {breadInfo.map((item, index) => {
            return <li style={{flex: '0 0 auto'}} key={index}>{item}</li>;
          })}

          {/*其他需要在内容块 顶部显示的信息*/}
          {this.props.children}
        </UL>
      </BreadcrumbBox>
    );
  }
}

BreadcrumbComponent.propTypes = {
  breadInfo: PropTypes.array.isRequired,    // title
  style: PropTypes.object,    // 外层 style
  ulStyle: PropTypes.object,    // ul层 自定义样式
};

export default BreadcrumbComponent;