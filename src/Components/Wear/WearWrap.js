import React, { Component } from 'react';
import Drawer from '../Drawer/Drawer';
import Wear from './Wear';

export default class WearWrap extends Component {
    render() {
        return (
            <div>
                <Drawer children={<Wear/>}/>
            </div>
        )
    }
}