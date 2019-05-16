import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { LoadConfigActionCreator } from '../Action/loadConfigEvent';
import { lifecycle } from 'recompose';

const jsonConfig = require('../config/view-config.json');

interface GetConfigProps {
    loadConfig: (config: {}) => void;
}

const GetConfigComponent = () => {
    return (<div />)
}

const mapDispatchToProps = ({
    loadConfig: LoadConfigActionCreator.loadConfig
})

const ConnectedConfigComponent = compose(
    connect(
        null, mapDispatchToProps  
    ),
    lifecycle<GetConfigProps, {}>({
        componentDidMount(){
            this.props.loadConfig(jsonConfig)
        }
    })
)
(GetConfigComponent);

export default ConnectedConfigComponent;
