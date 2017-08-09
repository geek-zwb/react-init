/**
 * Created by geekzwb on 2017/8/8.
 * dashboard test
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dashboardTestRequest} from './actions';

import './Dashboard.css';
import logo from './logo.svg';

class Dashboard extends Component {

  componentDidMount() {
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
          the testData : <code>{this.props.$$testData}</code>
        </p>
      </div>
    );
  };
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);