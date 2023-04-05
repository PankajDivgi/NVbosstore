import React, { Component } from 'react';
import './LoginLand.css';
import BOSPartnersLogo from "../../Images/BOSPartnersLogo.svg";
import { Link } from 'react-router-dom';
import GxNvest from "../../Images/Gx_Nvest.svg"

export default class LoginLand extends Component {
  render() {
    return (
      <div className="login-ag">
        <div>
          <img src={BOSPartnersLogo} style={{ width: "298px" }} alt="no_img" />
          <h1 className="mt-1 mb-0" style={{fontSize: "2.4rem",fontWeight:"800"}}>P A R T N E R S</h1>
          <Link to="/login" className="login-btn-ag">Login</Link>
          <Link to='/' className="get-srt-btn">Get Started</Link>
          <div className="pow-by">
            <h5>P O W E R E D B Y</h5>
            <img src={GxNvest} alt="no_img" />
          </div>
        </div>
      </div>
    )
  }
}
