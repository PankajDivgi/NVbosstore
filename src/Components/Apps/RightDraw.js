import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { ProductConsumer } from '../../Context_Api/Context';
import './Apps.css';
import { ClickAwayListener, Paper } from '@material-ui/core';

export default class RightDraw extends Component {
    state = {
        selectingApp: 'Select Creator',
        openDrop: false,
        CTopenDrop: false,
        selectingCTApp: 'Select Category',
        selectingCTApp_id: 'All',
    }
    selectApp = () => {
        this.setState({ openDrop: prev => !prev });
    };
    selectAppAway = () => {
        this.setState({ openDrop: false });
    };
    selectedApps = (SelApp) => {
        this.setState({ openDrop: false, selectingApp: SelApp.application_name })
    }
    CTselectApp = () => {
        this.setState({ CTopenDrop: prev => !prev });
    };
    CTselectAppAway = () => {
        this.setState({ CTopenDrop: false });
    };
    CTselectedApps = (SelApp) => {
        this.setState({ CTopenDrop: false, selectingCTApp: SelApp.name, selectingCTApp_id: SelApp._id })
    }
    render() {
        return (
            <ProductConsumer>
                {((value) => {
                    const { rightDrw, appsRightDrawer, appCategorys, CategoryPage, application } = value;
                    const get_id = application.filter(data => data.category === this.state.selectingCTApp_id)
                    return (
                        <div>
                            <div className="draw-opn" onClick={appsRightDrawer('rightDrw', true)}>
                                <span></span><h6>Showing All Apps</h6>
                            </div>
                            <Drawer className="draw-r" anchor="right" open={rightDrw} onClose={appsRightDrawer('rightDrw', false)} >
                                <div className="tp-drw">
                                    <h2>Bos Apps</h2>
                                    <div className="d-flex">

                                        <div style={{ position: "relative" }}>
                                            <ClickAwayListener onClickAway={this.CTselectAppAway}>
                                                <div>
                                                    <button className="app-add-drp-btn" onClick={this.CTselectApp} >
                                                        <p>{this.state.selectingCTApp}</p><i className="fas fa-chevron-down"></i>
                                                    </button>
                                                    {this.state.CTopenDrop ? (
                                                        <Paper className="paper-app-add">
                                                            {appCategorys.map((SelApp) => {
                                                                return (
                                                                    <div onClick={() => this.CTselectedApps(SelApp)}>{SelApp.name}</div>
                                                                )
                                                            })}
                                                        </Paper>
                                                    ) : null}
                                                </div>
                                            </ClickAwayListener>
                                        </div>
                                    </div>
                                </div>
                                <div className="full-e-api">
                                    <>
                                        {application.map((apCat) => {
                                            return (
                                                <>
                                                    {this.state.selectingCTApp === 'Select Category' ?
                                                        <div className="drw-api-data" onClick={() => CategoryPage(apCat)}>
                                                            <div className="top-a-data">
                                                                <span></span>
                                                                <h6 className="mb-0">{apCat.name}</h6>
                                                                <h6 className="ml-auto mb-0">16 Apps</h6>
                                                            </div>
                                                            <p className="mt-2">{apCat.description}</p>
                                                        </div>
                                                        : null}
                                                </>
                                            )
                                        })}

                                        {get_id.map((apCat) => {
                                            return (
                                                <div className="drw-api-data" onClick={() => CategoryPage(apCat)}>
                                                    <div className="top-a-data">
                                                        <span></span>
                                                        <h6 className="mb-0">{apCat.name}</h6>
                                                        <h6 className="ml-auto mb-0">16 Apps</h6>
                                                    </div>
                                                    <p className="mt-2">{apCat.description}</p>
                                                </div>
                                            )
                                        })}
                                        {get_id.length===0&&application.length===0?<div className="p-5 text-center">None Found</div>:null}
                                    </>
                                </div>
                            </Drawer>
                        </div>
                    )
                })}
            </ProductConsumer>
        )
    }
}
