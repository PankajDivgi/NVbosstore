import React, { Component } from 'react';
import './LoginLand.css';
import BOSPartnersLogo from '../../Images/BOSPartnersLogo.svg';
import { ProductConsumer } from '../../Context_Api/Context';

export default class Login extends Component {
    render() {
        return (
            <ProductConsumer>
                {((value) => {
                    const { logemail, logpassword, inputChange, loginVerify, loader } = value;
                    const loginEnabled = logpassword.length > 2 && logemail.length > 4
                    return (
                        <>
                            <div className="login-ag">
                                <div>
                                    <img src={BOSPartnersLogo} style={{ width: "340px" }} alt="no_img" />
                                    <h1 className="mt-1 mb-0" style={{fontSize: "2.8rem",fontWeight:"800"}}>P A R T N E R S</h1>
                                    <form className="w-100 mt-5" onSubmit={loginVerify}>
                                        <div className="form-group">
                                            <input onChange={inputChange} type="email" name="logemail" className="login-in-mail" placeholder="Enter Email" />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={inputChange} type="password" className="login-in-pass" placeholder="Password" name="logpassword" />
                                        </div>
                                        <button disabled={!loginEnabled} type="submit" className="btn login-in-login" >Login</button>
                                    </form>
                                </div>
                            </div>
                            {loader ?
                                <div className="verifying" >
                                    <h3>VERIFYING</h3>
                                    <div className="myProgressfull">
                                        <div className="myBarfull"></div>
                                    </div>
                                </div>
                            : null}
                        </>
                    )
                })}
            </ProductConsumer>
        )
    }
}