import React, { Component } from 'react';
// import Drawer from '@material-ui/core/Drawer';
import { ProductConsumer } from '../../Context_Api/Context';
import { Drawer, ListItem, ListItemText, ClickAwayListener, Paper } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './Users.css';
import { LoadingOutlined } from '@ant-design/icons';
import UserIcon from '../../Images/UserIcon.png';

export default class Users extends Component {
    state = {
        UTopenDrop: false,
        UTypeDis: 'Bos Level',
    }
    UserTypeOpen = () => {
        this.setState({ UTopenDrop: prev => !prev });
    };
    UserTypeAway = () => {
        this.setState({ UTopenDrop: false });
    };
    selectedUType = (UTlv) => {
        this.setState({ UTopenDrop: false, UTypeDis: UTlv })
    }
    render() {
        return (
            <ProductConsumer>
                {((value) => {
                    const { navMenu, usersTypeCard, openUsersDrw, usersRightDrw, ULRightDrw, ULdetails, openULDrw, UTListingHead,
                        allUsersListSR, allPartnersListSR, allDevelopersListSR, allVendorsListSR, allBosAppUserList,
                        openManualDrw, ManualRightDrw, ManualDetail, inputChange, checkforGX, gxUserYN, gxUYesDetails, gxUNoDetails,
                        backToGxCheck, CheckLoad, gxCheckEmail, RegUserInfo, RegGxUsername, RegGxEmail, RegGxCreatepass,
                        submitGxRegistration, submitMailCodeGxRegistration, gxRegUsername, gxRegEmail, gxRegCreatepass,
                        gxRegConfirmpass, RegGxConfirmpass, gxRegEmailCode, bosgxRegEmail, BosRegistrationWithGX, RegBosUserInfo,
                        BosPartnerRegistration, BosDevelopersRegistration, bosPartnerRegId, bosDevelopersRegId, bosVendorsRegId,
                        BosVendorsRegistration, BosAppuserRegistration, allUserListSearch, allPartnersListSearch, allDevelopersListSearch,
                        allVendorsListSearch, selectAppIdAppUser, SelectAPPAppuserRegistration, backAppuserRegistration, application,
                        DropAPPid, APPidDis, DropAPPidOpen, DropAPPidAway, selectedDropAPPid } = value;
                    const gxcheckEnable = gxCheckEmail.length > 2
                    const gxRegUsernameEnable = gxRegUsername.length > 1
                    const gxRegEmailEnable = gxRegEmail.length > 2
                    const gxRegCreatepassEnable = gxRegCreatepass.length > 2
                    const gxRegConfirmpassEnable = gxRegCreatepass === gxRegConfirmpass
                    const gxRegEmailCodeEnable = gxRegEmailCode.length > 2
                    const bosgxRegEmailEnable = bosgxRegEmail.length > 2

                    return (
                        <div>
                            <NavLink to="/users">
                                <ListItem button className={navMenu === "Users" ? "menuAfter" : "menuBefore"} onClick={openUsersDrw('usersRightDrw', true)}>
                                    <ListItemText>Users</ListItemText>
                                </ListItem>
                            </NavLink>
                            <Drawer className="draw-r-user" anchor="right" open={usersRightDrw} onClose={openUsersDrw('usersRightDrw', false)} >
                                <div className="px-4">
                                    <h2 className="mb-1">User Types</h2>
                                    <div style={{ position: "relative" }}>
                                        <ClickAwayListener onClickAway={this.UserTypeAway}>
                                            <div>
                                                <button className="app-add-drp-btn" onClick={this.UserTypeOpen} >
                                                    <p>{this.state.UTypeDis}</p><i className="fas fa-chevron-down"></i>
                                                </button>
                                                {this.state.UTopenDrop ? (
                                                    <Paper className="paper-app-add">
                                                        {['Bos Level', 'Bos Level2'].map((UTlv) => {
                                                            return (
                                                                <div onClick={() => this.selectedUType(UTlv)}>{UTlv}</div>
                                                            )
                                                        })}
                                                    </Paper>
                                                ) : null}
                                            </div>
                                        </ClickAwayListener>
                                    </div>
                                    <div className="user-types-ap">
                                        {usersTypeCard.map(UTCards => {
                                            return (
                                                <div className="users-type-card" key={UTCards.id}>
                                                    <div className="d-flex">
                                                        <img src={UTCards.UserIcon} width="32px" className="mr-3" alt="no_img" />
                                                        <h5 className="mb-0">{UTCards.UTHead}</h5>
                                                        <h5 className="mb-0 ml-auto">{UTCards.totalUTs}</h5>
                                                    </div>
                                                    <p className="mt-3">{UTCards.UTPara}</p>
                                                    <div className="mt-4">
                                                        <button className="btn-bos btn mr-2" style={{ borderRadius: "0" }}>Invite Link</button>
                                                        <button className="btn-bos btn mr-2" style={{ borderRadius: "0" }} onClick={() => ManualDetail(UTCards)}>Manual</button>
                                                        <button className="btn-bos btn" style={{ borderRadius: "0" }} onClick={() => ULdetails(UTCards)}>User List</button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </Drawer>
                            {/* *************** User List Drawer ************* */}
                            <Drawer className="draw-r-UL" anchor="right" open={ULRightDrw} onClose={openULDrw('ULRightDrw', false)} >
                                <div className="px-4">
                                    <h2 className="mb-1">Bos {UTListingHead} List</h2>

                                    {UTListingHead === 'User' ?
                                        <>
                                            <div className="users-list-search">
                                                <input type="text" placeholder="Search" name="search" onChange={allUserListSearch} />
                                                <button>All Users</button>
                                                <i className="fas fa-search"></i>
                                            </div>
                                            <div className="user-list-dt">
                                                {allUsersListSR.map(ULdtl => {
                                                    return (
                                                        <div className="users-type-card" key={ULdtl._id}>
                                                            <div className="d-flex">
                                                                <img src={UserIcon} width="32px" className="mr-3" alt="no_img" />
                                                                <div><h6 className="mb-0" style={{ lineHeight: "0.4", fontWeight: "700" }}>{ULdtl.name}</h6><small>{ULdtl.email}</small></div>
                                                                <div className="ml-auto text-right"><h6 className="mb-0" style={{ lineHeight: "0.4", fontWeight: "700" }}>{ULdtl.preferred_currency}</h6><small>Total Balance</small></div>
                                                            </div>
                                                            <div className="mt-3">
                                                                <small>User ID: <span style={{ fontWeight: "700" }}>{ULdtl.bos_user_id}</span></small> <br />
                                                                <small>User Type: <span style={{ fontWeight: "700" }}>{UTListingHead}</span></small>
                                                            </div>
                                                            <div className="mt-4">
                                                                <button className="btn-bos-w btn mr-2" style={{ borderRadius: "0" }}>Interact</button>
                                                                <button className="btn-bos-w btn mr-2" style={{ borderRadius: "0" }}>Add Profile</button>
                                                                <button className="btn-bos-w btn" style={{ borderRadius: "0" }}>Full User Profile</button>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </>
                                        : null}
                                    {UTListingHead === 'Partners' ?
                                        <>
                                            <div className="users-list-search">
                                                <input type="text" placeholder="Search" name="search" onChange={allPartnersListSearch} />
                                                <button>Partners</button>
                                                <i className="fas fa-search"></i>
                                            </div>
                                            <div className="user-list-dt">
                                                {allPartnersListSR.map(ULdtl => {
                                                    return (
                                                        <div className="users-type-card" key={ULdtl._id}>
                                                            <div className="d-flex">
                                                                <img src={UserIcon} width="32px" className="mr-3" alt="no_img" />
                                                                <div><h6 className="mb-0" style={{ lineHeight: "0.4", fontWeight: "700" }}>{ULdtl.name}</h6><small>{ULdtl.email}</small></div>
                                                                <div className="ml-auto text-right"><h6 className="mb-0" style={{ lineHeight: "0.4", fontWeight: "700" }}>{ULdtl.preferred_currency}</h6><small>Total Balance</small></div>
                                                            </div>
                                                            <div className="mt-3">
                                                                <small>User ID: <span style={{ fontWeight: "700" }}>{ULdtl._id}</span></small> <br />
                                                                <small>User Type: <span style={{ fontWeight: "700" }}>{UTListingHead}</span></small>
                                                            </div>
                                                            <div className="mt-4">
                                                                <button className="btn-bos-w btn mr-2" style={{ borderRadius: "0" }}>Interact</button>
                                                                <button className="btn-bos-w btn mr-2" style={{ borderRadius: "0" }}>Add Profile</button>
                                                                <button className="btn-bos-w btn" style={{ borderRadius: "0" }}>Full User Profile</button>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </>
                                        : null}
                                    {UTListingHead === 'Developers' ?
                                        <>
                                            <div className="users-list-search">
                                                <input type="text" placeholder="Search" name="search" onChange={allDevelopersListSearch} />
                                                <button>Developers</button>
                                                <i className="fas fa-search"></i>
                                            </div>
                                            <div className="user-list-dt">
                                                {allDevelopersListSR.map(ULdtl => {
                                                    return (
                                                        <div className="users-type-card" key={ULdtl._id}>
                                                            <div className="d-flex">
                                                                <img src={UserIcon} width="32px" className="mr-3" alt="no_img" />
                                                                <div><h6 className="mb-0" style={{ lineHeight: "0.4", fontWeight: "700" }}>{ULdtl.name}</h6><small>{ULdtl.email}</small></div>
                                                                <div className="ml-auto text-right"><h6 className="mb-0" style={{ lineHeight: "0.4", fontWeight: "700" }}>$123456</h6><small>Total Balance</small></div>
                                                            </div>
                                                            <div className="mt-3">
                                                                {/* <small>User ID: <span style={{fontWeight:"700"}}>dgd4354gr43kgrd45539</span></small> <br/> */}
                                                                <small>User Type: <span style={{ fontWeight: "700" }}>{UTListingHead}</span></small>
                                                            </div>
                                                            <div className="mt-4">
                                                                <button className="btn-bos-w btn mr-2" style={{ borderRadius: "0" }}>Interact</button>
                                                                <button className="btn-bos-w btn mr-2" style={{ borderRadius: "0" }}>Add Profile</button>
                                                                <button className="btn-bos-w btn" style={{ borderRadius: "0" }}>Full User Profile</button>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </>
                                        : null}
                                    {UTListingHead === 'Vendors' ?
                                        <>
                                            <div className="users-list-search">
                                                <input type="text" placeholder="Search" name="search" onChange={allVendorsListSearch} />
                                                <button>Vendors</button>
                                                <i className="fas fa-search"></i>
                                            </div>
                                            <div className="user-list-dt">
                                                {allVendorsListSR.map(ULdtl => {
                                                    return (
                                                        <div className="users-type-card" key={ULdtl._id}>
                                                            <div className="d-flex">
                                                                <img src={UserIcon} width="32px" className="mr-3" alt="no_img" />
                                                                <div><h6 className="mb-0" style={{ lineHeight: "0.4", fontWeight: "700" }}>{ULdtl.name}</h6><small>{ULdtl.email}</small></div>
                                                                <div className="ml-auto text-right"><h6 className="mb-0" style={{ lineHeight: "0.4", fontWeight: "700" }}>$123456</h6><small>Total Balance</small></div>
                                                            </div>
                                                            <div className="mt-3">
                                                                {/* <small>User ID: <span style={{fontWeight:"700"}}>dgd4354gr43kgrd45539</span></small> <br/> */}
                                                                <small>User Type: <span style={{ fontWeight: "700" }}>{UTListingHead}</span></small>
                                                            </div>
                                                            <div className="mt-4">
                                                                <button className="btn-bos-w btn mr-2" style={{ borderRadius: "0" }}>Interact</button>
                                                                <button className="btn-bos-w btn mr-2" style={{ borderRadius: "0" }}>Add Profile</button>
                                                                <button className="btn-bos-w btn" style={{ borderRadius: "0" }}>Full User Profile</button>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </>
                                        : null}
                                    {UTListingHead === 'Bos App User' ?
                                        <div className="user-list-dt">
                                            {allBosAppUserList.map(ULdtl => {
                                                return (
                                                    <div className="users-type-card" key={ULdtl._id}>
                                                        <div className="d-flex">
                                                            <img src={UserIcon} width="32px" className="mr-3" alt="no_img" />
                                                            <div><h6 className="mb-0" style={{ lineHeight: "0.4", fontWeight: "700" }}>User</h6><small>User email</small></div>
                                                            <div className="ml-auto text-right"><h6 className="mb-0" style={{ lineHeight: "0.4", fontWeight: "700" }}>$123456</h6><small>Total Balance</small></div>
                                                        </div>
                                                        <div className="mt-3">
                                                            <small>User ID: <span style={{ fontWeight: "700" }}>{ULdtl.bos_application_id}</span></small> <br />
                                                            <small>User Type: <span style={{ fontWeight: "700" }}>{UTListingHead}</span></small>
                                                        </div>
                                                        <div className="mt-4">
                                                            <button className="btn-bos-w btn mr-2" style={{ borderRadius: "0" }}>Interact</button>
                                                            <button className="btn-bos-w btn mr-2" style={{ borderRadius: "0" }}>Add Profile</button>
                                                            <button className="btn-bos-w btn" style={{ borderRadius: "0" }}>Full User Profile</button>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        : null}
                                    {UTListingHead === 'Admins' ?
                                        <div className="user-list-dt">
                                            <h6 className="mb-0" style={{ lineHeight: "0.4", fontWeight: "700" }}>No Admin</h6>
                                        </div>
                                        : null}
                                </div>
                            </Drawer>
                            {/* ****************** User List Drawer end **************** */}
                            {/* ****************** Manual drawer ****************** */}
                            <Drawer className="draw-r-Manual" anchor="right" open={ManualRightDrw} onClose={openManualDrw('ManualRightDrw', false)} >
                                {gxUserYN ? null :
                                    <div style={{ height: "calc(100% - 50px)" }}>
                                        <div className="manual-gx-reg">
                                            <h2 className="mb-1">New {UTListingHead}</h2>
                                            <p>Step 1: GX Check</p>
                                            <div className="bos-reg-gxc-log">
                                                <h6 style={{ fontWeight: "600" }}>Email Of New {UTListingHead}</h6>
                                                <input type="text" name="gxCheckEmail" onChange={inputChange} placeholder="Ex, xyz@abc.ad" />
                                            </div>
                                        </div>
                                        <button disabled={!gxcheckEnable} onClick={checkforGX} className="chek-con-btn">
                                            Continue {CheckLoad ? <LoadingOutlined style={{ fontSize: 22 }} spin /> : null}
                                        </button>
                                    </div>}
                                {/* bos registration with gx *********************** */}
                                {gxUYesDetails === true ?
                                    <div style={{ height: "calc(100% - 50px)" }}>
                                        {RegBosUserInfo === 'Bos Register' ?
                                            <div className="h-100">
                                                <div className="manual-gx-reg">
                                                    <h2 className="mb-1">New {UTListingHead}</h2>
                                                    <p>Step 3: Bos Registration</p>
                                                    <div className="bos-reg-gxc-log">
                                                        <h6 style={{ fontWeight: "600" }}>Assign Email</h6>
                                                        <input type="email" name="bosgxRegEmail" value={bosgxRegEmail} onChange={inputChange} placeholder="Ex, xyz@abc.ad" />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center" style={{ backgroundColor: "#000" }}>
                                                    <i className="fas fa-arrow-circle-left chek-con-i" onClick={backToGxCheck}></i>
                                                    <button disabled={!bosgxRegEmailEnable} className="chek-con-btn" onClick={BosRegistrationWithGX}>
                                                        Continue {CheckLoad ? <LoadingOutlined style={{ fontSize: 22 }} spin /> : null}
                                                    </button>
                                                </div>
                                            </div>
                                            : null}
                                        {RegBosUserInfo === 'Bos Partner Register' ?
                                            <div className="h-100">
                                                <div className="manual-gx-reg">
                                                    <h2 className="mb-1">New {UTListingHead}</h2>
                                                    <p>Step 4: Partner Registration</p>
                                                    <div className="bos-reg-gxc-log">
                                                        <h6 style={{ fontWeight: "600" }}>Assign Bos Email</h6>
                                                        <input type="email" name="bosPartnerRegId" value={bosPartnerRegId} onChange={inputChange} placeholder="Ex, xyz@abc.ad" />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center" style={{ backgroundColor: "#000" }}>
                                                    <i className="fas fa-arrow-circle-left chek-con-i" onClick={backToGxCheck}></i>
                                                    <button className="chek-con-btn" onClick={BosPartnerRegistration}>
                                                        Continue {CheckLoad ? <LoadingOutlined style={{ fontSize: 22 }} spin /> : null}
                                                    </button>
                                                </div>
                                            </div>
                                            : null}
                                        {RegBosUserInfo === 'Bos Developers Register' ?
                                            <div className="h-100">
                                                <div className="manual-gx-reg">
                                                    <h2 className="mb-1">New {UTListingHead}</h2>
                                                    <p>Step 5: Developer Registration</p>
                                                    <div className="bos-reg-gxc-log">
                                                        <h6 style={{ fontWeight: "600" }}>Assign Bos Email</h6>
                                                        <input type="email" name="bosDevelopersRegId" value={bosDevelopersRegId} onChange={inputChange} placeholder="Ex, xyz@abc.ad" />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center" style={{ backgroundColor: "#000" }}>
                                                    <i className="fas fa-arrow-circle-left chek-con-i" onClick={backToGxCheck}></i>
                                                    <button className="chek-con-btn" onClick={BosDevelopersRegistration}>
                                                        Continue {CheckLoad ? <LoadingOutlined style={{ fontSize: 22 }} spin /> : null}
                                                    </button>
                                                </div>
                                            </div>
                                            : null}
                                        {RegBosUserInfo === 'Bos Vendors Register' ?
                                            <div className="h-100">
                                                <div className="manual-gx-reg">
                                                    <h2 className="mb-1">New {UTListingHead}</h2>
                                                    <p>Step 7: Vendor Registration</p>
                                                    <div className="bos-reg-gxc-log">
                                                        <h6 style={{ fontWeight: "600" }}>Assign Bos Email</h6>
                                                        <input type="email" name="bosVendorsRegId" value={bosVendorsRegId} onChange={inputChange} placeholder="Ex, xyz@abc.ad" />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center" style={{ backgroundColor: "#000" }}>
                                                    <i className="fas fa-arrow-circle-left chek-con-i" onClick={backToGxCheck}></i>
                                                    <button className="chek-con-btn" onClick={BosVendorsRegistration}>
                                                        Continue {CheckLoad ? <LoadingOutlined style={{ fontSize: 22 }} spin /> : null}
                                                    </button>
                                                </div>
                                            </div>
                                            : null}
                                        {RegBosUserInfo === 'Bos App User Register' ?
                                            <>
                                                {selectAppIdAppUser ?
                                                    <div className="h-100">
                                                        <div className="manual-gx-reg">
                                                            <h2 className="mb-1">New {UTListingHead}</h2>
                                                            <p>Step 8: Bos App User Registration</p>
                                                            <div className="bos-reg-gxc-log">
                                                                <h6 style={{ fontWeight: "600" }}>Assign Bos Email</h6>
                                                                <input type="email" name="bosVendorsRegId" value={bosVendorsRegId} onChange={inputChange} placeholder="Ex, xyz@abc.ad" />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center" style={{ backgroundColor: "#000" }}>
                                                            <i className="fas fa-arrow-circle-left chek-con-i" onClick={backToGxCheck}></i>
                                                            <button className="chek-con-btn" onClick={SelectAPPAppuserRegistration}>
                                                                Continue
                                                        </button>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="h-100">
                                                        <div className="manual-gx-reg">
                                                            <h2 className="mb-1">New {UTListingHead}</h2>
                                                            <p>Step 8: Select Application To Register</p>
                                                            <div style={{ position: "relative" }}>
                                                                <ClickAwayListener onClickAway={DropAPPidAway}>
                                                                    <div>
                                                                        <button className="app-add-drp-btn w-100" onClick={DropAPPidOpen} >
                                                                            <p>{APPidDis}</p><i className="fas fa-chevron-down"></i>
                                                                        </button>
                                                                        {DropAPPid ? (
                                                                            <Paper className="paper-app-add w-100">
                                                                                {application.map((AppUserid) => {
                                                                                    return (
                                                                                        <div onClick={() => selectedDropAPPid(AppUserid)}>{AppUserid.name}</div>
                                                                                    )
                                                                                })}
                                                                            </Paper>
                                                                        ) : null}
                                                                    </div>
                                                                </ClickAwayListener>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center" style={{ backgroundColor: "#000" }}>
                                                            <i className="fas fa-arrow-circle-left chek-con-i" onClick={backAppuserRegistration}></i>
                                                            <button className="chek-con-btn" onClick={BosAppuserRegistration}>
                                                                Continue {CheckLoad ? <LoadingOutlined style={{ fontSize: 22 }} spin /> : null}
                                                            </button>
                                                        </div>
                                                    </div>
                                                }
                                            </>
                                            : null}
                                    </div>
                                    : null}
                                {/* Gx registration *********************** */}
                                {gxUNoDetails === true ?
                                    <div style={{ height: "calc(100% - 50px)" }}>
                                        {RegUserInfo === 'Username' ?
                                            <div className="h-100">
                                                <div className="manual-gx-reg">
                                                    <h2 className="mb-1">New {UTListingHead}</h2>
                                                    <p>Step 2: GX Registration</p>
                                                    <div className="bos-reg-gxc-log">
                                                        <h6 style={{ fontWeight: "600" }}>Assign Username</h6>
                                                        <input type="text" name="gxRegUsername" onChange={inputChange} placeholder="Ex, userAbc" />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center" style={{ backgroundColor: "#000" }}>
                                                    <i className="fas fa-arrow-circle-left chek-con-i" onClick={backToGxCheck}></i>
                                                    <button disabled={!gxRegUsernameEnable} onClick={RegGxEmail} className="chek-con-btn">
                                                        Continue
                                                </button>
                                                </div>
                                            </div>
                                            : null}
                                        {RegUserInfo === 'Email' ?
                                            <div className="h-100">
                                                <div className="manual-gx-reg">
                                                    <h2 className="mb-1">New {UTListingHead}</h2>
                                                    <p>Step 2: GX Registration</p>
                                                    <div className="bos-reg-gxc-log">
                                                        <h6 style={{ fontWeight: "600" }}>Assign Email</h6>
                                                        <input type="email" name="gxRegEmail" value={gxRegEmail} onChange={inputChange} placeholder="Ex, xyz@abc.ad" />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center" style={{ backgroundColor: "#000" }}>
                                                    <i className="fas fa-arrow-circle-left chek-con-i" onClick={RegGxUsername}></i>
                                                    <button disabled={!gxRegEmailEnable} onClick={RegGxCreatepass} className="chek-con-btn">
                                                        Continue
                                                </button>
                                                </div>
                                            </div>
                                            : null}
                                        {RegUserInfo === 'Createpass' ?
                                            <div className="h-100">
                                                <div className="manual-gx-reg">
                                                    <h2 className="mb-1">New {UTListingHead}</h2>
                                                    <p>Step 2: GX Registration</p>
                                                    <div className="bos-reg-gxc-log">
                                                        <h6 style={{ fontWeight: "600" }}>Assign Password</h6>
                                                        <input type="password" name="gxRegCreatepass" onChange={inputChange} placeholder="Ex, ABcd123!@#" />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center" style={{ backgroundColor: "#000" }}>
                                                    <i className="fas fa-arrow-circle-left chek-con-i" onClick={RegGxEmail}></i>
                                                    <button disabled={!gxRegCreatepassEnable} onClick={RegGxConfirmpass} className="chek-con-btn">
                                                        Continue {CheckLoad ? <LoadingOutlined style={{ fontSize: 22 }} spin /> : null}
                                                    </button>
                                                </div>
                                            </div>
                                            : null}
                                        {RegUserInfo === 'Confirmpass' ?
                                            <div className="h-100">
                                                <div className="manual-gx-reg">
                                                    <h2 className="mb-1">New {UTListingHead}</h2>
                                                    <p>Step 2: GX Registration</p>
                                                    <div className="bos-reg-gxc-log">
                                                        <h6 style={{ fontWeight: "600" }}>Confirm Password</h6>
                                                        <input type="password" name="gxRegConfirmpass" onChange={inputChange} placeholder="Ex, abc123!@#" />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center" style={{ backgroundColor: "#000" }}>
                                                    <i className="fas fa-arrow-circle-left chek-con-i" onClick={RegGxCreatepass}></i>
                                                    <button disabled={!gxRegConfirmpassEnable} onClick={submitGxRegistration} className="chek-con-btn">
                                                        Continue {CheckLoad ? <LoadingOutlined style={{ fontSize: 22 }} spin /> : null}
                                                    </button>
                                                </div>
                                            </div>
                                            : null}
                                        {RegUserInfo === 'EmailCode' ?
                                            <div className="h-100">
                                                <div className="manual-gx-reg">
                                                    <h2 className="mb-1">New {UTListingHead}</h2>
                                                    <p>Step 2: GX Registration</p>
                                                    <div className="bos-reg-gxc-log">
                                                        <h6 style={{ fontWeight: "600" }}>Verify Code</h6>
                                                        <input type="number" name="gxRegEmailCode" className="gxReg-ver-mail-cd" onChange={inputChange} placeholder="Ex, 123456" />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center" style={{ backgroundColor: "#000" }}>
                                                    <i className="fas fa-arrow-circle-left chek-con-i" onClick={RegGxUsername}></i>
                                                    <button disabled={!gxRegEmailCodeEnable} onClick={submitMailCodeGxRegistration} className="chek-con-btn">
                                                        Continue {CheckLoad ? <LoadingOutlined style={{ fontSize: 22 }} spin /> : null}
                                                    </button>
                                                </div>
                                            </div>
                                            : null}
                                    </div>
                                    : null}
                            </Drawer>
                            {/* ****************** Manual drawer end ****************** */}
                        </div>
                    )
                })}
            </ProductConsumer>
        )
    }
}
