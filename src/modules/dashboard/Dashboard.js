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