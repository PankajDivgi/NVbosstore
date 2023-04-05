import React, { Component } from 'react';
import Drawer from '../Drawer/Drawer';
import Home from './Home';

export default class HomeWrap extends Component {
    render() {
        return (
            <div>
                <Drawer children={<Home/>}/>
            </div>
        )
    }
}