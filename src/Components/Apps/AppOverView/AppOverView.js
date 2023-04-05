import React, { Component } from 'react';
import './AppOverView.css';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import MobBg from '../../../Images/BgMob.svg'
import BrainStreamMob from '../../../Images/BrainStreamMob.svg';

export default class AppOverView extends Component {
  render() {
    return (
      <div className="">
        <div className="d-flex align-items-center justify-content-center">
          <div className="app-divided-a">
            <div className="bg-mob-slide">
              <img className="MobBg" src={MobBg} alt="no_img" />
              <img className="MobBs" src={BrainStreamMob} alt="no_img" />
            </div>
          </div>
          <div className="app-divided-b">
            <Demo />
          </div>
        </div>
      </div>
    )
  }
}


const { TabPane } = Tabs;

class Demo extends React.Component {
  state = {
    tabKeyA: 1, tabKeyB: 2, tabKeyC: 3, tabKeyD: 4
  }
  keyUpdateA = () => { this.setState({ tabKeyA: 1, tabKeyB: 2, tabKeyC: 3, tabKeyD: 4 }) }
  keyUpdateB = () => { this.setState({ tabKeyA: 4, tabKeyB: 1, tabKeyC: 2, tabKeyD: 3 }) }
  keyUpdateC = () => { this.setState({ tabKeyA: 3, tabKeyB: 4, tabKeyC: 1, tabKeyD: 2 }) }
  keyUpdateD = () => { this.setState({ tabKeyA: 2, tabKeyB: 3, tabKeyC: 4, tabKeyD: 1 }) }

  render() {
    console.log('tabKeyA', this.state.tabKeyA)
    console.log('tabKeyB', this.state.tabKeyB)
    console.log('tabKeyC', this.state.tabKeyC)
    console.log('tabKeyD', this.state.tabKeyD)
    return (
      <div>
        <Tabs tabPosition='right' className="tabs-ver">
          <TabPane tab={<span className="advvdsvsesvrsgvrgergergerger" onClick={this.keyUpdateA}>Review</span>} key={1} >
            <div>
              <p>Beats</p>
              <h2><span style={{ fontWeight: "300" }}>Beats Solo3 Wireless On-Ear</span><br />Headphones</h2>
              <h1 className="mt-4"><span style={{ borderBottom: "1px solid #000", }}>$299</span></h1>
              <p style={{ color: "#B9B9B9", maxWidth: "540px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
            <div className="mt-4">
              <h5 style={{ fontWeight: "400" }}>Pick your color</h5>
              <div className="d-flex justify-content-center">
                <div className="pick-color"><i className="fas fa-check"></i></div>
                <div className="pick-color"></div>
                <div className="pick-color"></div>
                <div className="pick-color"></div>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-2">
                <span className="add-quntity">
                  <span className="add-minus">-</span>
                  <span>1</span>
                  <span className="add-pluse">+</span>
                </span>
                <span className="add-carte">ADD TO BAG</span>
              </div>
            </div>
          </TabPane>
          <TabPane tab={<span className="advvdsvsesvrsgvrgergergerger" onClick={this.keyUpdateB}>Comments</span>} key={2} >
            <div>
              <p>Beats</p>
              <h2><span style={{ fontWeight: "300" }}>Beats Solo3 Wireless On-Ear</span><br />Headphones</h2>
              <h1 className="mt-4"><span style={{ borderBottom: "1px solid #000", }}>$299</span></h1>
              <p style={{ color: "#B9B9B9", maxWidth: "540px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
          </TabPane>
          <TabPane tab={<span className="advvdsvsesvrsgvrgergergerger" onClick={this.keyUpdateC}>Features</span>} key={3} >
            <div>
              <p>Beats</p>
              <h2><span style={{ fontWeight: "300" }}>Beats Solo3 Wireless On-Ear</span><br />Headphones</h2>
              <h1 className="mt-4"><span style={{ borderBottom: "1px solid #000", }}>$299</span></h1>
              <p style={{ color: "#B9B9B9", maxWidth: "540px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
          </TabPane>
          <TabPane tab={<span className="advvdsvsesvrsgvrgergergerger" onClick={this.keyUpdateD}>Detailes</span>} key={4} >
            <div>
              <p>Beats</p>
              <h2><span style={{ fontWeight: "300" }}>Beats Solo3 Wireless On-Ear</span><br />Headphones</h2>
              <h1 className="mt-4"><span style={{ borderBottom: "1px solid #000", }}>$299</span></h1>
              <p style={{ color: "#B9B9B9", maxWidth: "540px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

