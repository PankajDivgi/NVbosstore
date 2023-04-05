import React, { Component } from 'react';
import './Wear.css'
import { ProductConsumer } from '../../Context_Api/Context';
import { Link } from 'react-router-dom';

export default class Wear extends Component {
    render() {
        return (
            <ProductConsumer>
                {((value) => {
                    const { cryptoFinding } = value;
                    return (
                        <div>
                            <div className="p-5 mb-4">
                                <div className="wear-menu-tp">
                                    <div className="menus-wear">
                                        <div>Home</div>
                                        <div>Collection</div>
                                        <div>women</div>
                                        <div>men</div>
                                        <div>BAGS</div>
                                        <div>SHOES</div>
                                        <div>KIDS</div>
                                    </div>
                                    <Link to="/login_start" className="btn-bos btn ml-auto">Login</Link>
                                </div>
                                <div className="wr-tp-slides">
                                    <div className="exl-tag"><p># Exclusive</p></div>
                                    <h1 className="sls-head-tp">Express <br/>Your <span>Attitude.</span></h1>
                                    <p>New collection for spring & summer 2019!</p>
                                    <div className="shp-nw">
                                        <div></div> <Link to='/'>shop now <i class="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                                <div className="wr-bt-tr-sls">
                                    <div className="wr-bt-slide">
                                        <h4>Shoes</h4>
                                        <p>winter Collection</p>
                                    <div className="shp-nw">
                                        <div></div> <Link to='/'>shop now <i class="fas fa-arrow-right"></i></Link>
                                    </div>
                                    </div>
                                    <div className="wr-bt-slide">
                                        <h4>Shoes</h4>
                                        <p>winter Collection</p>
                                    <div className="shp-nw">
                                        <div></div> <Link to='/'>shop now <i class="fas fa-arrow-right"></i></Link>
                                    </div>
                                    </div>
                                    <div className="wr-bt-slide">
                                        <h4>Shoes</h4>
                                        <p>winter Collection</p>
                                    <div className="shp-nw">
                                        <div></div> <Link to='/'>shop now <i class="fas fa-arrow-right"></i></Link>
                                    </div>
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
