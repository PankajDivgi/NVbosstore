import React, { Component } from 'react';
import Drawer from '../Drawer/Drawer';
import Apps from './Apps';

export default class AppsWrap extends Component {
    render() {
        return (
            <div>
                <Drawer children={<Apps/>}/>
            </div>
        )
    }
}