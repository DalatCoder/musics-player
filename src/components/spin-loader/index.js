import './index.css';
import React from 'react';
import { connect } from 'react-redux';

const SpinLoader = ({ show }) => {
  return (
    <div className={`spin-load-container ${show ? 'show' : ''}`}>
      <div className="lds-heart">
        <div></div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    show: state.showSpinLoader
  };
};

export default connect(mapStateToProps)(SpinLoader);
