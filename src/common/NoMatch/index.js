/**
 * Created by geekzwb on 2017/2/1.
 * What for: NoMatch
 */
import React from 'react';
import PropTypes from 'prop-types';

// components
import BreadcrumbComponent from '../Layout/BreadcrumbComponent';

const NoMatch = (props) => {
  const breadInfo = props.breadInfo || ['Not Found'];
  return (
    <div>
      <BreadcrumbComponent breadInfo={breadInfo}/>
      <h1 style={{marginTop: '300px', textAlign: 'center'}}>404 No Found !</h1>
    </div>
  );
};

NoMatch.propTypes = {
  breadInfo: PropTypes.array,  // 根据路由得到的 bread title
};

export default NoMatch;