import React, { Component } from 'react';
import Drawer from '../Drawer/Drawer';
import UsersPage from './UsersPage';

export default class UsersPageWrap extends Component {
    render() {
        return (
            <div>
                <Drawer children={<UsersPage/>}/>
            </div>
        )
    }
}