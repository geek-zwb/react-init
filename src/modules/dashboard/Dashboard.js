/**
 * Created by geekzwb on 2017/8/8.
 * dashboard test
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {dashboardTestRequest} from './actions';

import './Dashboard.css';
import logo from './logo.svg';

class Dashboard extends Component {
  componentDidMount() {
    // request testData
    this.props.dashboardTestRequest();
    this.segment();
  }

  segment(timeBlocks = []) {
    var blocks = [];
    var blocksLength = -1;
    // time 分段
    timeBlocks.forEach(function (value, index){
        if(timeBlocks[index - 1] === value - 1) {
          blocks[blocksLength].push(value);
        } else {
          blocksLength += 1;
          blocks[blocksLength] = [value];
        }
    });

    //1 和 24 同时存在？
    var newBlocks = blocks.slice(0);
    if(blocks[0] && blocks[0].includes(1) && blocks[blocksLength].includes(24)) {
      newBlocks = blocks.slice(0, blocksLength);
      newBlocks[0] = blocks[blocksLength].concat(blocks[0]);
    }
    
    //console.log('newBlocks', newBlocks);
    // 返回分段的二维数组
    return newBlocks;
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="Dashboard-header">
          <img src={logo} className="Dashboard-logo" alt="logo"/>
          <h2>Now you are in dashboard.</h2>
        </div>
        <p className="Dashboard-intro">
          两秒后通过saga得到 dashboardTestRequest 后的数据 : <code>{this.props.$$testData}</code>
        </p>
      </div>
    );
  };
}

/**
 * props 类型检测
 * @type {{$$testData, $$dashboardReducer, dashboardTestRequest}}
 */
Dashboard.propTypes = {
  $$testData: PropTypes.string.isRequired,
  $$dashboardReducer: PropTypes.object.isRequired,
  dashboardTestRequest: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    $$testData: state.getIn(['dashboardReducer', 'testData']),
    $$dashboardReducer: state.get('dashboardReducer')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dashboardTestRequest: () => {
      dispatch(dashboardTestRequest());
    }
  };
}

// connect store with component
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);