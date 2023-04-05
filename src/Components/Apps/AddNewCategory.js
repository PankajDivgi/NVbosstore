import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { ProductConsumer } from '../../Context_Api/Context';
import './Apps.css';
import '../Drawer/Drawer.css'
import { ClickAwayListener, Paper, ListItem, ListItemText } from '@material-ui/core';
// import { Upload } from 'antd';
import Cloudupload from '../../Images/cloudupload.svg';
import StopThere from '../../Images/stopthere.svg';
import {Link} from 'react-router-dom'

export default class AddNewCategory extends Component {

    render() {
        return (
            <ProductConsumer>
                {((value) => {
                    const { newCrightDrw, addNewCategoryDrw, appCategorys, inputChange, createAppsRecord, fileUpload, navMenu, openDrop, addNewApp, addNewAppAway, 
                        selectCateApp, cereateCategory, application, addPaidSignupCost, addFreeSignupCost, showPaidinput, showFreeinput, newBosrightdrw, addNewBosappDrw,
                        bosAppYes, bosAppNo, addBosAppYes, addBosAppNo, cereateCompanyName, cereateName, cereateDescription, cereateCategoryID, cereateSignupCost, 
                        imgSelected, imgsizeError, afterLogin, addNewBosCtegoryDrw, newBosCTrightdrw, createCategoryRecord, CTfileUpload, CTimgSelected } = value;
                    const nativeApp = bosAppYes===true || bosAppNo===true
                    const nextstepEnable = cereateCategoryID.length > 1 && cereateCompanyName.length > 1 && cereateName.length > 1 && cereateDescription.length > 1 && cereateSignupCost.length > 1 && nativeApp===true && imgSelected != null

                    return (
                        <div>
                            <ListItem button className={navMenu === "Add New" ? "menuAfter" : "menuBefore"} onClick={addNewCategoryDrw('newCrightDrw', true)}>
                                <ListItemText>Add New</ListItemText>
                            </ListItem>
                            <Drawer className="draw-r" anchor="right" open={newCrightDrw} onClose={addNewCategoryDrw('newCrightDrw', false)} >
                                <div className="tp-drw">
                                    <h2>Add New</h2>
                                    <p className="mb-2">Current Showing: All Items</p>
                                </div>
                                <div className="full-e-api">
                                    <div className="drw-api-data" onClick={addNewBosCtegoryDrw('newBosCTrightdrw', true)}>
                                        <div className="top-a-data">
                                            <span></span>
                                            <h6 className="mb-0">Categories</h6>
                                            <h6 className="ml-auto mb-0">{appCategorys.length}</h6>
                                        </div>
                                        <p className="mt-2">Add a new Bos App category.</p>
                                    </div>
                                    <Drawer className="draw-bs-r" anchor="right" open={newBosCTrightdrw} onClose={addNewBosCtegoryDrw('newBosCTrightdrw', false)} >
                                        {afterLogin?
                                        <>
                                        <div className="px-4 pb-3 pt-5">
                                            <h2 className="mb-1">Add New Categories</h2>
                                        </div>
                                        <form className="h-100 d-flex flex-column">
                                            <div className="px-4 py-3" style={{ border: "1px solid #F1F1F1", boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)" }}>
                                                <h4 className="mb-0">Basis Information</h4>
                                                <div className="bos-app-add-in">
                                                    <h6>What Do You Want To Call Your Category?</h6>
                                                    <input type="text" name="cereateCTName" onChange={inputChange} placeholder="Ex, Man Category." />
                                                </div>
                                                <div className="bos-app-add-in">
                                                    <h6>How Would You Describe Your Category?</h6>
                                                    <textarea type="text" rows="2" name="cereateCTDescription" onChange={inputChange} placeholder="Ex, Description." />
                                                </div>
                                                <div className="mt-3">
                                                    <h6 className="mb-3">Upload The Following Images For Your Category</h6>
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <label className="bos-app-file-in">
                                                                {CTimgSelected===null?
                                                                <img src={Cloudupload} alt="no_img" />:<img src={CTimgSelected} style={{width:"4rem",height: "3rem"}} alt="no_img" />}
                                                                <input type="file" name="cereateCTimgicon" onChange={CTfileUpload} />
                                                            </label>
                                                            <p className="text-center mb-0">400x400</p>
                                                        </div>
                                                        {/* {imgsizeError?<div className="error-img-add">Incorrect size Image, Add 400*400 Image</div>:null} */}
                                                    </div>
                                                </div>
                                            </div>
                                            <button onClick={createCategoryRecord} className="bos-add-btn">
                                                Next Step
                                            </button>
                                        </form>
                                        </>
                                        :<div className="stop-r-t">
                                            <div style={{padding:"1rem 3rem 1rem 4rem"}}>
                                                <h4 style={{fontWeight:"700"}}>Stop Right There</h4>
                                                <p>You Must Login Before Creating A New Bos Category</p>
                                            </div>
                                            <img src={StopThere} style={{width:"100%", minHeight:"467px"}} alt="no_img" />
                                            <div className="d-flex" style={{padding:"1.5rem 3rem 1rem 4rem"}}>
                                                <Link to="/login_start" className="btn-bos btn mr-3" style={{borderRadius:"0"}}>Take Me To The Login</Link>
                                                <button className="btn-bos-w btn ml-3" style={{borderRadius:"0"}}>Become A Boss Partner</button>
                                            </div>
                                        </div>
                                        }
                                    </Drawer>

                                    <div className="drw-api-data" onClick={addNewBosappDrw('newBosrightdrw', true)}>
                                        <div className="top-a-data">
                                            <span></span>
                                            <h6 className="mb-0">Bos App</h6>
                                            <h6 className="ml-auto mb-0">{application.length}</h6>
                                        </div>
                                        <p className="mt-2">Create a new Bos App.</p>
                                    </div>
                                    <Drawer className="draw-bs-r" anchor="right" open={newBosrightdrw} onClose={addNewBosappDrw('newBosrightdrw', false)} >
                                        {afterLogin?
                                        <>
                                        <div className="px-4 pb-3 pt-5">
                                            <h2 className="mb-1">Add New Bos App</h2>
                                            <div style={{ position: "relative" }}>
                                                <ClickAwayListener onClickAway={addNewAppAway}>
                                                    <div>
                                                        <button className="app-add-drp-btn" onClick={addNewApp} >
                                                            <p>{cereateCategory}</p><i className="fas fa-chevron-down"></i>
                                                        </button>
                                                        {openDrop ? (
                                                            <Paper className="paper-app-add">
                                                                {appCategorys.map((apnwCat) => {
                                                                    return (
                                                                        <div onClick={() => selectCateApp(apnwCat)}>{apnwCat.name}</div>
                                                                    )
                                                                })}
                                                            </Paper>
                                                        ) : null}
                                                    </div>
                                                </ClickAwayListener>
                                            </div>
                                        </div>
                                        <form className="h-100 d-flex flex-column">
                                            <div className="px-4 py-3" style={{ border: "1px solid #F1F1F1", boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)" }}>
                                                <h4 className="mb-0">Basis Information</h4>
                                                <div className="bos-app-add-in">
                                                    <h6>What Is The Name Of Your Company?</h6>
                                                    <input type="text" name="cereateCompanyName" onChange={inputChange} placeholder="Ex, Man Inc." />
                                                </div>
                                                <div className="bos-app-add-in">
                                                    <h6>What Do You Want To Call Your Application?</h6>
                                                    <input type="text" name="cereateName" onChange={inputChange} placeholder="Ex, Man App." />
                                                </div>
                                                <div className="bos-app-add-in">
                                                    <h6>How Would You Describe Your Application?</h6>
                                                    <textarea type="text" rows="2" name="cereateDescription" onChange={inputChange} placeholder="Ex, Description." />
                                                </div>
                                                <div className="mt-3">
                                                    <h6 className="mb-3">Upload The Following Images For Your App</h6>
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <label className="bos-app-file-in">
                                                                {imgSelected===null?<img src={Cloudupload} alt="no_img" />:<img src={imgSelected} style={{width:"4rem",height: "3rem"}} alt="no_img" />}
                                                                <input type="file" name="cereateAppicon" onChange={fileUpload} />
                                                            </label>
                                                            <p className="text-center mb-0">400x400</p>
                                                        </div>
                                                        {imgsizeError?<div className="error-img-add">Incorrect size Image, Add 400*400 Image</div>:null}
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <h6>Will This Be A Bos Application?</h6>
                                                    <div className="d-flex">
                                                        <div className="bos-in-t-f" style={{background:bosAppYes?"#787C7E":"#fff",color:bosAppYes?"#fff":"#787C7E"}} onClick={addBosAppYes}>Yes</div>
                                                        <div className="bos-in-t-f" style={{background:bosAppNo?"#787C7E":"#fff",color:bosAppNo?"#fff":"#787C7E"}} onClick={addBosAppNo}>No</div>
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <h6>What Is The Cost Of Accessing Your App?</h6>
                                                    <div className="d-flex">
                                                        <div className="bos-in-t-f" style={{background:showFreeinput?"#787C7E":"#fff",color:showFreeinput?"#fff":"#787C7E"}} onClick={addFreeSignupCost}>Free Access</div>
                                                        <div className="bos-in-t-f" style={{background:showPaidinput?"#787C7E":"#fff",color:showPaidinput?"#fff":"#787C7E"}} onClick={addPaidSignupCost}>Paid Access</div>
                                                        {showPaidinput ? <input className="bos-in-t-f-inusd" type="number" name="cereateSignupCost" onChange={inputChange} placeholder="Enter The Signup Price In USD" /> : null}
                                                    </div>
                                                </div>

                                            </div>
                                            <button disabled={!nextstepEnable} onClick={createAppsRecord} className="bos-add-btn">
                                                Next Step
                                            </button>
                                        </form>
                                        </>
                                        :<div className="stop-r-t">
                                            <div style={{padding:"1rem 3rem 1rem 4rem"}}>
                                                <h4 style={{fontWeight:"700"}}>Stop Right There</h4>
                                                <p>You Must Login Before Creating A New Bos App</p>
                                            </div>
                                            <img src={StopThere} style={{width:"100%", minHeight:"467px"}} alt="no_img" />
                                            <div className="d-flex" style={{padding:"1.5rem 3rem 1rem 4rem"}}>
                                                <Link to="/login_start" className="btn-bos btn mr-3" style={{borderRadius:"0"}}>Take Me To The Login</Link>
                                                <button className="btn-bos-w btn ml-3" style={{borderRadius:"0"}}>Become A Boss Partner</button>
                                            </div>
                                        </div>
                                        }
                                    </Drawer>
                                </div>
                            </Drawer>
                        </div>
                    )
                })}
            </ProductConsumer>
        )
    }
}
