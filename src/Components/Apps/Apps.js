import React, { Component } from 'react';
import './Apps.css';
import '../Home/Home.css';
// import TrendCardA from '../../Images/TrendCardA.svg';
// import TrendCardB from '../../Images/TrendCardB.svg';
// import TrendCardC from '../../Images/TrendCardC.svg';
// import TrendCardD from '../../Images/TrendCardD.svg';
import User from '../../Images/user1.jpg';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../Context_Api/Context';
import { Dropdown } from 'react-bootstrap';
import RightDraw from './RightDraw';
import NoCompany from '../../Images/companynologo.png';
import NoCompanyW from '../../Images/companynologoW.png';

export default class Apps extends Component {
    render() {
        return (
            <ProductConsumer>
                {((value) => {
                    const { afterLogin, logedOut, cryptoFinding, categoryName, application } = value;
                    const locName = afterLogin ? localStorage.getItem('logemail').substring(0, localStorage.getItem('logemail').lastIndexOf("@")) : null
                    const emptyName = application.filter(data => data.name === undefined)
                    const emptyImg = application.filter(data => data.app_icon === undefined)
                    return (
                        <div className="py-5 mb-4">

                            <div className="full-apps">
                                <div className="px-5 d-flex align-items-center">
                                    {afterLogin ?
                                        <>
                                            <div className="bos-hm-tp">
                                                <h2>Explore {categoryName} Apps</h2>
                                            </div>
                                            <div className="ml-auto" style={{ border: "1px solid #000", borderRadius: "4px", padding: "7px 14px" }}>
                                                <Dropdown alignRight style={{ cursor: "pointer" }}>
                                                    <Dropdown.Toggle as="div" className="d-flex align-items-center">
                                                        <img src={User} width="30px" style={{ borderRadius: "50%" }} alt="no_img" /><span className="name-drop">{locName}</span>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="/">Action</Dropdown.Item>
                                                        <Dropdown.Item href="/">Another action</Dropdown.Item>
                                                        <div className="drop-in-menu" onClick={logedOut} >Logout</div>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <RightDraw />
                                        </>
                                        :
                                        <>
                                            <div className="bos-hm-tp">
                                                <h2>Explore All The Bos Apps</h2>
                                                {/* <p>The Worlds Number One App Store For Businesses</p> */}
                                            </div>
                                            <Link to="/login_start" className="btn-bos btn ml-auto" style={{ padding: "12px 0.75rem" }}>Login</Link>
                                            <RightDraw />
                                        </>
                                    }
                                </div>

                                {/* <h5 className="mt-5 mb-4" style={{ fontWeight: "bold" }}>Trending</h5>
                                    <h5 className="mt-5 mb-4" style={{ fontWeight: "bold" }}>Mobile First</h5>
                                    <h5 className="mt-5 mb-4" style={{ fontWeight: "bold" }}>New To Entrepreneurship</h5>
                                    <h5 className="mt-5 mb-4" style={{ fontWeight: "bold" }}>Take Your Business Global</h5> */}

                                <div className="tp-three">
                                    <div>
                                        {application.map((appsDis) => {
                                            return (
                                                <div className="top-app-three" >
                                                    <div className="three-e-a">
                                                        {emptyImg.app_icon === appsDis.app_icon ?
                                                            <img src={NoCompany} alt="no_img" />
                                                            : <img src={appsDis.app_icon} alt="no_img" />}
                                                    </div>
                                                    <div className="px-5 pt-3">
                                                        <h5>{emptyName.name === appsDis.name ? "NO Name" : appsDis.name}</h5>
                                                        <p className="app-descr">{appsDis.description}</p>
                                                        <Link to="/app_overview" className="btn-apps btn mr-1">Learn</Link>
                                                        <Link to="/apps" className="btn-apps btn ml-1">Get</Link>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="bot-three">
                                    <h5>Reccomended For Your Business</h5>
                                    <div className="d-flex mb-2 w-100 flex-wrap">
                                        {application.map((appsRecDis) => {
                                            return (
                                                <div className="bot-app-three">
                                                    <div className="d-flex">
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <Link to="/app_overview">
                                                                <div className="reccmond-buss" style={{ backgroundColor: "#000" }}>
                                                                {emptyImg.app_icon === appsRecDis.app_icon ?
                                                                    <img className="reccmond-buss-img" src={NoCompanyW} alt="no_img" />
                                                                    :<img className="reccmond-buss-img" src={appsRecDis.app_icon} alt="no_img" />}
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="pl-3 pr-2 d-flex flex-column justify-content-center">
                                                            <h6 className="mb-1">{emptyName.name === appsRecDis.name ? "NO Name" : appsRecDis.name}</h6>
                                                            <p className="rec-app-descr">{appsRecDis.description}</p>
                                                            <div>
                                                                <Link to="/app_overview" className="btn-apps-recc btn mr-1">Learn</Link>
                                                                <Link to="/apps" className="btn-apps-recc btn ml-1">Get</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>

                            <div className="px-5">
                                <div className="bottom-search">
                                    <input placeholder="Type an Action, You Want to Perform" name='searchedR' onChange={cryptoFinding} />
                                    <button className="btn-search btn">Actions</button>
                                    <button className="btn-search btn">Items</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </ProductConsumer>
        )
    }
}