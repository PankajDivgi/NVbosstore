import React, { Component } from 'react';
import './Home.css';
import { Popover } from 'antd';
import { Link } from 'react-router-dom';
import TrendCardA from '../../Images/TrendCardA.svg';
import TrendCardB from '../../Images/TrendCardB.svg';
import TrendCardC from '../../Images/TrendCardC.svg';
import TrendCardD from '../../Images/TrendCardD.svg';
import { ProductConsumer } from '../../Context_Api/Context';
import { Dropdown } from 'react-bootstrap';
import User from '../../Images/user1.jpg';
import InstaWallet from '../../Images/Insta_wallet_logo.svg';
import IPhonescreen from '../../Images/iPhonescreen.png';
import NoDataFound from '../../Images/no_data_found.svg';
import NoCompany from '../../Images/companynologoW.png';

export default class Home extends Component {
  // componentDidMount = () => {
  //   this.setState({navMenu: localStorage.getItem('navMenu')})
  // }

  render() {
    return (
      <ProductConsumer>
        {((value) => {
          const { cardsitems, addzindex, addsize, handleZindex, afterLogin, logedOut, cryptoFinding, searchingResult, searchedR, application, singleItemSearch, singleBlockSearch } = value;
          const locName = afterLogin ? localStorage.getItem('logemail').substring(0, localStorage.getItem('logemail').lastIndexOf("@")) : null
          const emptyName = application.filter(data => data.name === undefined)
          const emptyImg = application.filter(data => data.app_icon === undefined)
          return (
            <div className="p-5 mb-4">
              {searchingResult.length <= 0 ?
                <div>
                  <div className="full-home">
                    <div className="d-flex align-items-center">
                      {afterLogin ?
                        <>
                          <div className="bos-hm-tp">
                            <h2>Welcome Back, {locName}</h2>
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
                        </>
                        :
                        <>
                          <div className="bos-hm-tp">
                            <h2>Welcome To The Bos Store</h2>
                            <p>The Worlds Number One App Store For Businesses</p>
                          </div>
                          <Link to="/login_start" className="btn-bos btn ml-auto">Login</Link>
                        </>
                      }
                    </div>
                    <div>
                      <h5 className="mt-5 mb-4" style={{ fontWeight: "bold" }}>{afterLogin ? "Most Favourites" : "My Popular"}</h5>
                      <div className="d-flex align-items-center justify-content-center mt-4 p-4" style={{ padding: "20px", }}>
                        {cardsitems.map((item, index) => {
                          return (
                            <Popover
                              content={
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <p
                                    style={{ fontSize: "20px", fontWeight: "bold", margin: "0px" }}
                                  >
                                    {item.text}
                                  </p>
                                  <p style={{ margin: "0px" }}>{item.subText}</p>
                                </div>
                              }
                              //   title="Title"
                              trigger="hover"
                              placement="bottom"
                            >
                              <div
                                onMouseOver={(e) => handleZindex(item.image)}
                                className="box-cards"
                                style={{
                                  margin: index > 0 && index < cardsitems.length ? "0px -20px" : "",
                                  zIndex: addzindex[index],
                                  backgroundColor: item.image % 2 ? "#2C2D38" : "white",
                                  height: addsize[index],
                                  width: addsize[index],
                                }}
                              >
                                <Link to="/app_overview" className="w-100 h-100">
                                  <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                                    <img
                                      src={require(`../../Images/gxlive/${item.image}.png`)}
                                      alt=""
                                      width="70"
                                    // style={{ width: "90%" }}
                                    />
                                  </div>
                                </Link>
                              </div>
                            </Popover>
                          )
                        })}
                      </div>
                    </div>
                    <div>
                      <h5 className="mt-5 mb-4" style={{ fontWeight: "bold" }}>Trending</h5>
                      <div className="cards-four">
                        {application.map((appsTrDis) => {
                          return (
                            <div>
                              <Link to="/app_overview">
                                <div className="magazine-hm" style={{ backgroundColor: "#000" }}>
                                  {emptyImg.app_icon === appsTrDis.app_icon ?
                                    <img className="magazine-cover" src={NoCompany} alt="no_img" />
                                    : <img className="magazine-cover" src={appsTrDis.app_icon} alt="no_img" />}
                                </div>
                              </Link>
                              <div className="card-name">
                                <p style={{ fontSize: "20px", fontWeight: "bold", margin: "0px" }}>{emptyName.name === appsTrDis.name ? "NO Name" : appsTrDis.name}</p>
                                <p className="trd-app-descr">{appsTrDis.description}</p>
                              </div>
                            </div>
                          )
                        })}
                        {/* <div>
                          <Link to="/app_overview">
                            <div className="magazine-hm" style={{ backgroundColor: "#1D2024" }}>
                              <img className="magazine-cover" src={TrendCardB} alt="no_img" />
                            </div>
                          </Link>
                          <div className="card-name">
                            <p style={{ fontSize: "20px", fontWeight: "bold", margin: "0px" }}>OTCBots</p>
                            <p className="m-0">Automate Your Crypto</p>
                          </div>
                        </div>
                        <div>
                          <Link to="/app_overview">
                            <div className="magazine-hm" style={{ backgroundColor: "#FFFFFF" }}>
                              <img className="magazine-cover" src={TrendCardC} alt="no_img" />
                            </div>
                          </Link>
                          <div className="card-name">
                            <p style={{ fontSize: "20px", fontWeight: "bold", margin: "0px" }}>Accounting Tool</p>
                            <p className="m-0">Your Personal CFO</p>
                          </div>
                        </div>
                        <div>
                          <Link to="/app_overview">
                            <div className="magazine-hm" style={{ backgroundColor: "#182542" }}>
                              <img className="magazine-cover" src={TrendCardD} alt="no_img" />
                            </div>
                          </Link>
                          <div className="card-name">
                            <p style={{ fontSize: "20px", fontWeight: "bold", margin: "0px" }}>Virtual Sales Agency</p>
                            <p className="m-0">VSA</p>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                :

                <div className="searchedFullR">
                  <div className="row">
                    <div className="col-md-8 pl-1 pr-5">
                      <div className="row">
                        <div className="col-md-4"><h6 style={{ padding: "8px 12px" }}>Action</h6></div>
                        <div className="col-md-4"><h6 style={{ padding: "8px 12px" }}>Jurisdiction</h6></div>
                        <div className="col-md-4"><h6 style={{ padding: "8px 12px" }}>Filter</h6></div>
                      </div>
                    </div>
                    <div className="col-md-4 px-1"></div>
                  </div>
                  <div className="row">
                    <div className="col-md-8 pl-1 pr-5">
                      <div className={searchedR.length === 0?"d-none":"resulted-blocks"}>
                      {searchedR.map((serR) => {
                        return (
                          <div className="all-searhed-cols" onClick={(e) => singleItemSearch(serR)} style={{ backgroundColor: singleBlockSearch === serR.id ? "#000" : "#fff" }}>
                            <div className="row">
                              <div className="col-md-4"><h6 className="searhed-cols" style={{color: singleBlockSearch === serR.id ? "#fff" : "#000"}}>{serR.action}</h6></div>
                              <div className="col-md-4"><h6 className="searhed-cols" style={{color: singleBlockSearch === serR.id ? "#fff" : "#000"}}>{serR.jurisdiction}</h6></div>
                              <div className="col-md-4"><h6 className="searhed-cols" style={{color: singleBlockSearch === serR.id ? "#fff" : "#000"}}>{serR.filter}</h6></div>
                            </div>
                          </div>
                        )
                      })}
                      </div>
                      {searchedR.length === 0 ?
                        <div className="no-data-show"><img src={NoDataFound} alt="no_img" /><h6>NO DATA FOUND</h6></div>
                        : null}
                    </div>
                    <div className="col-md-4 px-1">
                      <div>
                        <div className="each-single-img">
                          <div>
                            <h4>Buying Bitcoin</h4>
                            <p>#Transaction</p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <h6 style={{ fontSize: "12px" }}>InstaCryptoPurchase</h6>
                          <div className="mt-2">
                            <div className="row p-0 m-0">
                              <div className="col-md-7 px-0">
                                <img src={InstaWallet} style={{ width: "100%" }} alt="no_img" />
                              </div>
                              <div className="col-md-5 px-0">
                                <div style={{ position: "relative" }}>
                                  <div className="over-lay">
                                    <div className="ovr-text">View Screens</div>
                                  </div>
                                  <div className="w-100 d-flex justify-content-center align-items-center">
                                    <img src={IPhonescreen} alt="no_img" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="my-3">Instacoins is a financial service that allows you to purchase Bitcoin quickly and safely, from almost anywhere in the world. Our simple and secure Bitcoin buying process appeals to those who want to purchase this cryptocurrency without worries or hassle.</p>
                            <h6>Related Solutions</h6>
                            <div className="related-four">
                              <div className="related-sol" style={{ backgroundColor: "#152A77" }}>
                                <img className="rel-sol-img" src={TrendCardA} alt="no_img" />
                              </div>
                              <div className="related-sol" style={{ backgroundColor: "#1D2024" }}>
                                <img className="rel-sol-img" src={TrendCardB} alt="no_img" />
                              </div>
                              <div className="related-sol" style={{ backgroundColor: "#FFFFFF" }}>
                                <img className="rel-sol-img" src={TrendCardC} alt="no_img" />
                              </div>
                              <div className="related-sol" style={{ backgroundColor: "#182542" }}>
                                <img className="rel-sol-img" src={TrendCardD} alt="no_img" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
              <div className="bottom-search">
                <input placeholder="Type an Action, You Want to Perform" name='searchedR' onChange={cryptoFinding} />
                <button className="btn-search btn">Actions</button>
                <button className="btn-search btn">Items</button>
              </div>

            </div>
          )
        })}
      </ProductConsumer>
    )
  }
}