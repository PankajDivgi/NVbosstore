import React, { Component } from 'react';
import axios from 'axios';
import { message } from 'antd';
import 'antd/dist/antd.css';
// import appIcon from '../Images/user1.jpg'
import UserIcon from '../Images/UserIcon.png';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    logemail: 'aaaa@aaaa.com',
    logpassword: '',
    loader: false,
    open: false,
    afterLogin: false,
    searchingResult: '',
    cardsitems: [
      { image: 1, text: "Token Options", subText: "Options Exchange" },
      { image: 2, text: "Pulse", subText: "Stay Connected" },
      { image: 3, text: "BrokerApp", subText: "Monitize Everything" },
      { image: 4, text: "InstaCryptoPurchase", subText: "Buy Crypto Now" },
      { image: 5, text: "Vault", subText: "Secure Your Money" },
      { image: 6, text: "Tellers", subText: "Digitalize Cash" },
      { image: 7, text: "CryptoLottery", subText: "Zero-Loss Lottery" },
    ],
    addzindex: ["1", "2", "3", "4", "3", "2", "1"],
    addsize: [140, 160, 180, 200, 180, 160, 140],
    searchedFind: [
      { id: "1", action: "Buy Bitcoin", jurisdiction: "Global", filter: "None" },
      { id: "2", action: "Buy Bitcoin", jurisdiction: "US", filter: "Credit Card" },
      { id: "3", action: "Buy Ethereum", jurisdiction: "Canada", filter: "Bank Transfer" },
      { id: "4", action: "Buy Litecoin", jurisdiction: "UK", filter: "None" },
      { id: "5", action: "Buy Monero", jurisdiction: "US", filter: "None" },
      { id: "6", action: "Buy Dash", jurisdiction: "India", filter: "None" },
    ],
    searchedR: [],
    eachdetail: false,
    navMenu: 'Home',
    rightDrw: false,
    openDrw: false,
    usersTypeCard: [
        { id: "1", UserIcon: UserIcon, UTHead: "User", totalUTs: "1,467", UTPara: "An accounting professional is a user who provides a service to AccountingTool Users." },
        { id: "2", UserIcon: UserIcon, UTHead: "Partners", totalUTs: "45", UTPara: "An accounting professional is a user who provides a service to AccountingTool Users." },
        { id: "3", UserIcon: UserIcon, UTHead: "Developers", totalUTs: "316", UTPara: "An accounting professional is a user who provides a service to AccountingTool Users." },
        { id: "4", UserIcon: UserIcon, UTHead: "Vendors", totalUTs: "21", UTPara: "An accounting professional is a user who provides a service to AccountingTool Users." },
        { id: "5", UserIcon: UserIcon, UTHead: "Bos App User", totalUTs: "467", UTPara: "An accounting professional is a user who provides a service to AccountingTool Users." },
        { id: "6", UserIcon: UserIcon, UTHead: "Admins", totalUTs: "68", UTPara: "An accounting professional is a user who provides a service to AccountingTool Users." },
    ],
    appCategorys: [],
    categoryName: 'All The Bos',
    cereateCompanyName: '',
    cereateName: '',
    cereateDescription: '',
    cereateCategory: 'Select Category',
    cereateCategoryID: '',
    cereateAppicon: null,
    cereateSignupCost: '',
    cereateNativeApp: true,
    showPaidinput: false,
    showFreeinput: false,
    application: [],
    newCrightDrw: false,
    newCopenDrw: false,
    openDrop: false,
    newBosrightdrw: false,
    newBosopendrw: false,
    newBosCTrightdrw: false,
    newBosCTopendrw: false,
    bosAppYes: false,
    bosAppNo: false,
    imgSelected: null,
    singleBlockSearch: '1',
    imgsizeError: false,
    cereateCTimgicon: null,
    cereateCTName: '',
    cereateCTDescription: '',
    CTimgsizeError: false,
    CTimgSelected: null,
    // users *******
    usersOpenDrw: false,
    usersRightDrw: false,
    ULOpenDrw: false,
    ULRightDrw: false,
    UTListingHead: '',
    allUsersList: [],
    allPartnersList: [],
    allDevelopersList: [],
    allVendorsList: [],
    allBosAppUserList: [],
    // api not build
    // allAdminsList: [],
    allUsersListSR: [],
    allPartnersListSR: [],
    allDevelopersListSR: [],
    allVendorsListSR: [],
    allBosAppUserListSR: [],
    ManualOpenDrw: false,
    ManualRightDrw: false,
    gxCheckEmail: '',
    gxUserYN: false,
    gxUserYNDetails: [],
    gxUYesDetails: false,
    gxUNoDetails: false,
    CheckLoad: false,
    gxRegUsername: '',
    gxRegEmail: '',
    gxRegCreatepass: '',
    gxRegConfirmpass: '',
    RegUserInfo: 'Username',
    gxRegEmailCode: '',
    bosgxRegEmail: '',
    RegBosUserInfo: 'Bos Register',
    bosPartnerRegId: '',
    bosDevelopersRegId: '',
    bosVendorsRegId: '',
    bosAppuserRegId: '',
    bosIDfromUser: '',
    selectAppIdAppUser: true,
    DropAPPid: false,
    APPidDis: 'Select',
    APPidDisID: '',
  }

  inputChange = async (e) => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleZindex = (item) => {
    if (item === 1) {
      this.setState({ addzindex: ["7", "6", "5", "4", "3", "2", "1"], addsize: [200, 180, 160, 140, 120, 100, 80] });
    }
    else if (item === 2) {
      this.setState({ addzindex: ["5", "6", "5", "4", "3", "2", "1"], addsize: [180, 200, 180, 160, 140, 120, 100] });
    }
    else if (item === 3) {
      this.setState({ addzindex: ["3", "4", "5", "4", "3", "2", "1"], addsize: [160, 180, 200, 180, 160, 140, 120] });
    }
    else if (item === 4) {
      this.setState({ addzindex: ["1", "2", "3", "4", "3", "2", "1"], addsize: [140, 160, 180, 200, 180, 160, 140] });
    }
    else if (item === 5) {
      this.setState({ addzindex: ["1", "2", "3", "4", "5", "4", "3"], addsize: [120, 140, 160, 180, 200, 180, 160] });
    }
    else if (item === 6) {
      this.setState({ addzindex: ["1", "2", "3", "4", "5", "6", "5"], addsize: [100, 120, 140, 160, 180, 200, 180] });
    }
    else if (item === 7) {
      this.setState({ addzindex: ["1", "2", "3", "4", "5", "6", "7"], addsize: [80, 100, 120, 140, 160, 180, 200] });
    }
  };
  loginVerify = (e) => {
    e.preventDefault();
    this.setState({ loader: true })
    let body = {
      email: this.state.logemail,
      password: this.state.logpassword,
    }
    axios.post("https://gxauth.apimachine.com/gx/user/login", body)
      .then(res => {
        if (res.data.status === true) {
          window.location.href = '/'
          message.success(res.data.message, 8)
          this.setState({ afterLogin: true })
          localStorage.setItem('logemail', this.state.logemail);
          localStorage.setItem('afterLogin', this.state.afterLogin);
        }
        else {
          this.setState({ loader: false })
          message.error(res.data.message, 8)
          localStorage.setItem('logemail', this.state.logemail);
        }
      }
      )
  }
  befLog = () => {
    axios.get("https://localhost:3000")
      .then(res => { this.setState({ afterLogin: localStorage.getItem('afterLogin') }) })
  }
  logedOut = () => {
    this.setState({ afterLogin: localStorage.clear('afterLogin') })
  }
  HomeNavmenu = () => {
    // axios.get("http://localhost:3000")
    // .then(res=>{this.setState({navMenu: 'Home'})})
    this.setState({ navMenu: 'Home' })
    localStorage.setItem('navMenu', this.state.navMenu);
  }
  AppsNavmenu = () => {
    this.setState({ navMenu: 'Apps' })
    localStorage.setItem('navMenu', this.state.navMenu);
  }
  TokensNavmenu = () => {
    this.setState({ navMenu: 'Tokens' })
    localStorage.setItem('navMenu', this.state.navMenu);
  }
  // WearNavmenu = () => {
  //   this.setState({ navMenu: 'Wear' })
  //   localStorage.setItem('navMenu', this.state.navMenu);
  // }

  appsRightDrawer = (side, openDrw) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ ...this.state.rightDrw, [side]: openDrw });
  };
  appsCategory = () => {
    axios.get("https://bos.apimachine.com/categories/software")
      .then(res => {
        this.setState({ appCategorys: res.data.data })
      }
      )
  }
  CategoryPage = (apCat) => { 
    this.setState({ categoryName: apCat.name, rightDrw: false, })
    // this.appsRightDrawer('right', false)
  }
  addNewApp = () => {
    this.setState({ openDrop: prev => !prev });
  };
  addNewAppAway = () => {
    this.setState({ openDrop: false });
  };
  selectCateApp = (apnwCat) => {
    this.setState({ openDrop: false, cereateCategoryID: apnwCat._id, cereateCategory: apnwCat.name })
  }
  addPaidSignupCost = () => {
    this.setState({ showPaidinput: true, showFreeinput: false })
  }
  addFreeSignupCost = () => {
    this.setState({ showPaidinput: false, showFreeinput: true, cereateSignupCost: '0.00' })
  }
  addBosAppYes = () => {
    this.setState({ bosAppYes: true, bosAppNo: false, cereateNativeApp: true })
  }
  addBosAppNo = () => {
    this.setState({ bosAppYes: false, bosAppNo: true, cereateNativeApp: false })
  }
  ValidateImg = (e) => {
    let img = new Image()
    img.src = window.URL.createObjectURL(e.target.files[0])
    img.onload = () => {
      if (img.width === 400 && img.height === 400) {
        // alert("Correct size");
        this.setState({ imgsizeError: false });
        return true;
      }
      // alert("Incorrect size");
      this.setState({ imgSelected: null, imgsizeError: true });
      return true;
    }
  }
  fileUpload = (e) => {
    this.setState({
      cereateAppicon: e.target.files[0],
      imgsizeError: false
    })
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ imgSelected: e.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    this.ValidateImg(e);
  }
  createAppsRecord = (e) => {
    e.preventDefault();
    // let imgurl =  "https://gxnitrousdata.s3.us-east-2.amazonaws.com/userprofiles/"
    const formData = new FormData();
    formData.append('app_icon', this.state.cereateAppicon)
    formData.append('company_name', this.state.cereateCompanyName)
    formData.append('name', this.state.cereateName)
    formData.append('description', this.state.cereateDescription)
    formData.append('category', this.state.cereateCategoryID)
    formData.append('native_app', this.state.cereateNativeApp)
    formData.append('signup_cost', `${'$' + this.state.cereateSignupCost}`)
    // let body = {
    //   company_name: this.state.cereateCompanyName,
    //   name: this.state.cereateName,
    //   description: this.state.cereateDescription,
    //   category: this.state.cereateCategoryID,
    //   app_icon: this.state.cereateAppicon,
    //   native_app: this.state.cereateNativeApp,
    //   signup_cost: `${'$'}`+`${this.state.cereateSignupCost}`
    // }
    // message.loading("Updating")
    axios.post("https://bos.apimachine.com/test/application", formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => {
        if (res.data.status === true) {
          // console.log('Apps', res)
          message.success(res.data.message, 8)
          this.setState({
            cereateCompanyName: '',
            cereateName: '',
            cereateDescription: '',
            cereateCategory: 'Select Category',
            cereateCategoryID: '',
            cereateAppicon: null,
            cereateSignupCost: '',
            cereateNativeApp: true,
            newBosrightdrw: false,
          });
        }
        else {
          message.error(res.data.message, 8)
          this.setState({
            newBosrightdrw: true,
          });
        }
      }
      )
  }
  applicationsShow = () => {
    axios.get("https://bos.apimachine.com/test/application/")
      .then(res => {
        this.setState({ application: res.data.data })
      }
      )
  }
  addNewCategoryDrw = (side, newCopenDrw) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ ...this.state.newCrightDrw, [side]: newCopenDrw });
  };
  addNewBosappDrw = (side, newBosopendrw) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ ...this.state.newBosrightdrw, [side]: newBosopendrw });
  };
  addNewBosCtegoryDrw = (side, newBosCTopendrw) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ ...this.state.newBosCTrightdrw, [side]: newBosCTopendrw });
  };
  singleItemSearch = (serR) => {
    this.setState({ singleBlockSearch: serR.id })
    console.log('singleBlockSearch', this.state.singleBlockSearch)
  }

  ValidCTImg = (e) => {
    let img = new Image()
    img.src = window.URL.createObjectURL(e.target.files[0])
    img.onload = () => {
      if (img.width === 400 && img.height === 400) {
        // alert("Correct size");
        this.setState({ CTimgsizeError: false });
        return true;
      }
      // alert("Incorrect size");
      this.setState({ CTimgSelected: null, CTimgsizeError: true });
      return true;
    }
  }
  CTfileUpload = (e) => {
    this.setState({
      cereateCTimgicon: e.target.files[0],
      CTimgsizeError: false
    })
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ CTimgSelected: e.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    this.ValidCTImg(e);
  }
  createCategoryRecord = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img_icon', this.state.cereateCTimgicon)
    formData.append('name', this.state.cereateCTName)
    formData.append('description', this.state.cereateCTDescription)
    axios.post("https://bos.apimachine.com/categories/software", formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => {
        console.log("add category", res.data)
        if (res.data.status === true) {
          message.success(res.data.message, 8)
          this.setState({
            cereateCTimgicon: null,
            cereateCTName: '',
            cereateCTDescription: '',
            newBosCTrightdrw: false,
          })
        }
        else {
          message.error(res.data.message, 8)
          this.setState({
            newBosCTrightdrw: true,
          });
        }
      })
  }

  // users page start ***************
  openUsersDrw = (side, usersOpenDrw) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ ...this.state.usersRightDrw, [side]: usersOpenDrw, navMenu: 'Users' });
    this.TotallistCount();
  };
  openULDrw = (side, ULOpenDrw) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ ...this.state.ULRightDrw, [side]: ULOpenDrw, navMenu: 'Users' });
  };
  ULdetails = (UTCards) => {
    this.setState({ ULRightDrw: true, UTListingHead: UTCards.UTHead })
  }
  getUsersList = async () => {
    await axios.get("https://bos.apimachine.com/test/user")
      .then(res => {
        this.setState({ allUsersList: res.data.data, allUsersListSR: res.data.data })
      }
      )
  }
  getPartnersList = async () => {
    await axios.get("https://bos.apimachine.com/test/partner")
      .then(res => {
        this.setState({ allPartnersList: res.data.data, allPartnersListSR: res.data.data })
      }
      )
  }
  getDevelopersList = async () => {
    await axios.get("https://bos.apimachine.com/test/partner/developer")
      .then(res => {
        this.setState({ allDevelopersList: res.data.data, allDevelopersListSR: res.data.data })
      }
      )
  }
  getVendorsList = async () => {
    await axios.get("https://bos.apimachine.com/test/partner/vendor")
      .then(res => {
        this.setState({ allVendorsList: res.data.data, allVendorsListSR: res.data.data })
      }
      )
  }
  getBosAppUserList = async () => {
    await axios.get("https://bos.apimachine.com/test/appuser")
      .then(res => {
        this.setState({ allBosAppUserList: res.data.data, allBosAppUserListSR: res.data.data })
      }
      )
  }
  // api not build
  // getAdminsList = async () => {
  //   await axios.get("Admins")
  //     .then(res => {
  //       this.setState({allAdminsList: res.data.data})
  //     }
  //   )
  // }
  openManualDrw = (side, ManualOpenDrw) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ ...this.state.ManualRightDrw, [side]: ManualOpenDrw });
  };
  ManualDetail = (UTCards) => {
    this.setState({ ManualRightDrw: true, UTListingHead: UTCards.UTHead })
  }
  checkforGX = async (e) => {
    this.setState({ CheckLoad: true })
    await axios.get(`https://comms.globalxchange.com/user/details/get?email=${this.state.gxCheckEmail}`)
      .then(res => {
        this.setState({ gxUserYNDetails: res.data, CheckLoad: false })
        if (res.data.status === true) {
          message.success('GX User Verified, Register To Bos', 10)
          this.setState({gxUYesDetails:true, gxRegEmail: this.state.gxCheckEmail, bosgxRegEmail: this.state.gxCheckEmail})
        }
        else {
          message.error('Not GX User, Register To GX', 10)
          this.setState({gxUNoDetails:true, gxRegEmail: this.state.gxCheckEmail, bosgxRegEmail: this.state.gxCheckEmail})
        }
      })
    this.setState({ gxUserYN: true })
  }
  backToGxCheck = () => {
    this.setState({ 
      gxUserYN: false, gxUserYNDetails: [], 
      gxCheckEmail: '', gxUYesDetails:false, 
      gxUNoDetails: false, RegBosUserInfo: 'Bos Register' })
  }
  RegGxUsername = () => {
    this.setState({ RegUserInfo: 'Username', gxRegUsername: '', gxRegEmail: '', gxRegCreatepass: '', gxRegConfirmpass: '', gxRegEmailCode: '' })
  }
  RegGxEmail = () => {
    this.setState({ RegUserInfo: 'Email' })
  }
  RegGxCreatepass = () => {
    this.setState({ RegUserInfo: 'Createpass' })
  }
  RegGxConfirmpass = () => {
    this.setState({ RegUserInfo: 'Confirmpass' })
  }
  submitGxRegistration = (e) => {
    e.preventDefault();
    this.setState({ CheckLoad: true })
    let body = {
      username: this.state.gxRegUsername,
      email: this.state.gxRegEmail,
      password: this.state.gxRegCreatepass,
      ref_affiliate: "1",
      account_type: "Personal",
      signedup_app: "BOS"
    }
    axios.post("https://gxauth.apimachine.com/gx/user/signup", body)
      .then(res => {
        // console.log(res)
        if (res.data.status === true) {
          message.success(res.data.message, 8)
          this.setState({ CheckLoad: false, RegUserInfo: 'EmailCode' })
        }
        else {
          this.setState({ CheckLoad: false })
          message.error(res.data.message, 8)
        }
      })
  }
  submitMailCodeGxRegistration = (e) => {
    e.preventDefault();
    this.setState({ CheckLoad: true })
    let body = {
      username: this.state.gxRegUsername,
      email: this.state.gxRegEmail,
      password: this.state.gxRegCreatepass,
      ref_affiliate: "1",
      account_type: "Personal",
      signedup_app: "BOS",
      code: this.state.gxRegEmailCode
    }
    axios.post("https://gxauth.apimachine.com/gx/user/confirm", body)
      .then(res => {
        if (res.data.status === true) {
          message.success(res.data.message, 8)
          this.setState({ CheckLoad: false, gxUYesDetails: true, gxUNoDetails: false })
        }
        else {
          message.error(res.data.message, 8)
          this.setState({ CheckLoad: false })
        }
      })
  }
BosRegistrationWithGX = (e) => {
  e.preventDefault();
  this.setState({ 
    CheckLoad: true, 
    bosPartnerRegId: this.state.bosgxRegEmail, 
    bosDevelopersRegId: this.state.bosgxRegEmail,
    bosVendorsRegId: this.state.bosgxRegEmail,
    bosAppuserRegId: this.state.bosgxRegEmail
  })
  let body = {
    email: this.state.bosgxRegEmail,
  }
  axios.post("https://bos.apimachine.com/test/user", body)
    .then(res => {
       if (res.data.status === true) {
        message.success(res.data.message, 8)
        this.setState({ CheckLoad: false })
        if(this.state.UTListingHead === 'Partners'){
          this.setState({ RegBosUserInfo: 'Bos Partner Register' })
        }
        else if(this.state.UTListingHead === 'Developers'){
          this.setState({ RegBosUserInfo: 'Bos Developers Register' })
        }
        else if(this.state.UTListingHead === 'Vendors'){
          this.setState({ RegBosUserInfo: 'Bos Vendors Register' })
        }
        else if(this.state.UTListingHead === 'Bos App User'){
          this.setState({ RegBosUserInfo: 'Bos App User Register' })
        }
      }
      else {
        message.error(res.data.message, 8)
        this.setState({ CheckLoad: false })
      }
  })
}
BosRegistration = (e) => {
  e.preventDefault();
  this.setState({ CheckLoad: true })
  let body = {
    username: 'Balle1950',
    email: 'Balle1950@fleckens.hu',
    password: 'Ba123456@',
    ref_affiliate: "1",
    account_type: "Personal",
    signedup_app: "BOS",
  }
  axios.post("https://bos.apimachine.com/test/user", body)
    .then(res => {
      if (res.data.status === true) {
        message.success(res.data.message, 8)
        this.setState({ CheckLoad: false })
      }
      else {
        message.error(res.data.message, 8)
        this.setState({ CheckLoad: false })
      }
    })
}
TotallistCount = async () => {
  await this.setState({
    usersTypeCard: [
      { id: "1", UserIcon: UserIcon, UTHead: "User", totalUTs: this.state.allUsersList.length, UTPara: "An accounting professional is a user who provides a service to AccountingTool Users." },
      { id: "2", UserIcon: UserIcon, UTHead: "Partners", totalUTs:  this.state.allPartnersList.length, UTPara: "An accounting professional is a user who provides a service to AccountingTool Users." },
      { id: "3", UserIcon: UserIcon, UTHead: "Developers", totalUTs: this.state.allDevelopersList.length, UTPara: "An accounting professional is a user who provides a service to AccountingTool Users." },
      { id: "4", UserIcon: UserIcon, UTHead: "Vendors", totalUTs: this.state.allVendorsList.length, UTPara: "An accounting professional is a user who provides a service to AccountingTool Users." },
      { id: "5", UserIcon: UserIcon, UTHead: "Bos App User", totalUTs: this.state.allBosAppUserList.length, UTPara: "An accounting professional is a user who provides a service to AccountingTool Users." },
      { id: "6", UserIcon: UserIcon, UTHead: "Admins", totalUTs: '0', UTPara: "An accounting professional is a user who provides a service to AccountingTool Users." },
  ],
  })
}
BosPartnerRegistration = async (e) => {
  e.preventDefault();
  this.setState({ CheckLoad: true })
  await this.state.allUsersList.filter(data =>{if(data.email === this.state.bosPartnerRegId )
    {return this.setState({ bosPartnerRegId: data._id })}
    return null
  } )
  let body = {
    id: this.state.bosPartnerRegId,
    // 5f03f674027667693128ed57 
  }
  axios.post("https://bos.apimachine.com/test/partner", body)
    .then(res => {
       if (res.data.status === true) {
        message.success(res.data.message, 8)
        this.setState({ CheckLoad: false })
      }
      else {
        message.error(res.data.message, 8)
        this.setState({ CheckLoad: false })
      }
  })
}
BosDevelopersRegistration = async (e) => {
  e.preventDefault();
  this.setState({ CheckLoad: true })
  await this.state.allPartnersList.filter(data =>{if(data.email === this.state.bosDevelopersRegId )
    {return this.setState({ bosDevelopersRegId: data._id })}
    return null
  } )
  let body = {
    id: this.state.bosDevelopersRegId,
    // 5f03f674027667693128ed57
  }
  axios.post("https://bos.apimachine.com/test/partner/developer", body)
    .then(res => {
       console.log('BosDevelopersRegistration',res)
       if (res.data.status === true) {
        message.success(res.data.message, 8)
        this.setState({ CheckLoad: false })
      }
      else {
        message.error(res.data.message, 8)
        this.setState({ CheckLoad: false })
      }
  })
}
BosVendorsRegistration = async (e) => {
  e.preventDefault();
  this.setState({ CheckLoad: true })
  await this.state.allPartnersList.filter(data =>{if(data.email === this.state.bosVendorsRegId )
    {return this.setState({ bosVendorsRegId: data._id })}
    return null
  } )
  let body = {
    id: this.state.bosVendorsRegId,
    // 5f03f674027667693128ed57
  }
  axios.post("https://bos.apimachine.com/test/partner/vendor", body)
    .then(res => {
       console.log('BosVendorsRegistration',res)
       if (res.data.status === true) {
        message.success(res.data.message, 8)
        this.setState({ CheckLoad: false })
      }
      else {
        message.error(res.data.message, 8)
        this.setState({ CheckLoad: false })
      }
  })
  console.log('bosVendorsRegId',this.state.bosVendorsRegId)
}
SelectAPPAppuserRegistration = (e) => {
  this.setState({selectAppIdAppUser: false})
}
backAppuserRegistration = (e) => {
  this.setState({selectAppIdAppUser: true})
}
DropAPPidOpen = () => {
    this.setState({ DropAPPid: prev => !prev });
};
DropAPPidAway = () => {
    this.setState({ DropAPPid: false });
};
selectedDropAPPid = (AppUserid) => {
    this.setState({ DropAPPid: false, APPidDis: AppUserid.name, APPidDisID: AppUserid._id })
}
BosAppuserRegistration = async (e) => {
  e.preventDefault();
  this.setState({ CheckLoad: true })
  // const bosUser_id =
  await this.state.allUsersList.filter(data =>{if(data.email === this.state.bosgxRegEmail )
    {return this.setState({ bosIDfromUser: data._id })}
    return null
  } )
  // const bosUserProfile_id = 
  await this.state.allUsersList.filter(data =>{if(data.email === this.state.bosAppuserRegId )
    {return this.setState({ bosAppuserRegId: data.bos_user_id })}
    return null 
  } )
  let body = {
    bos_user_profile_id: this.state.bosAppuserRegId,
    bos_application_id: this.state.APPidDisID,
    bos_user_id: this.state.bosIDfromUser,
    // expirydate: 1591609899000,
  }
  axios.post("https://bos.apimachine.com/test/appuser", body)
    .then(res => {
       console.log('BosAppuserRegistration',res)
       if (res.data.status === true) {
        message.success(res.data.message, 8)
        this.setState({ CheckLoad: false })
      }
      else {
        message.error(res.data.message, 8)
        this.setState({ CheckLoad: false })
      }
  })
  console.log('bosAppuserRegId',this.state.bosAppuserRegId)
  console.log('APPidDisID',this.state.APPidDisID)
  console.log('bosIDfromUser',this.state.bosIDfromUser)
}
allUserListSearch = async (e) => {
  e.preventDefault()
  let typevalUL = e.target.value;
  let userList = this.state.allUsersList;
  userList = userList.filter((allUL) => {
    return allUL.name.toLowerCase().search(
      typevalUL.toLowerCase()) !== -1;
  });
  await this.setState({ allUsersListSR: userList });
}
allPartnersListSearch = async (e) => {
  e.preventDefault()
  let typevalUL = e.target.value;
  let partnersList = this.state.allPartnersList;
  partnersList = partnersList.filter((allUL) => {
    return allUL.name.toLowerCase().search(
      typevalUL.toLowerCase()) !== -1;
  });
  await this.setState({ allPartnersListSR: partnersList });
}
allDevelopersListSearch = async (e) => {
  e.preventDefault()
  let typevalUL = e.target.value;
  let developersList = this.state.allDevelopersList;
  developersList = developersList.filter((allUL) => {
    return allUL.name.toLowerCase().search(
      typevalUL.toLowerCase()) !== -1;
  });
  await this.setState({ allDevelopersListSR: developersList });
}
allVendorsListSearch = async (e) => {
  e.preventDefault()
  let typevalUL = e.target.value;
  let vendorsList = this.state.allVendorsList;
  vendorsList = vendorsList.filter((allUL) => {
    return allUL.name.toLowerCase().search(
      typevalUL.toLowerCase()) !== -1;
  });
  await this.setState({ allVendorsListSR: vendorsList });
}
  // users page ends ****************

  cryptoFinding = async (e) => {
    e.preventDefault()
    let typeval = e.target.value;
    let cryptoList = this.state.searchedFind;
    cryptoList = cryptoList.filter((crypto) => {
      return crypto.action.toLowerCase().search(
        typeval.toLowerCase()) !== -1 ||
        crypto.jurisdiction.toLowerCase().search(
          typeval.toLowerCase()) !== -1 ||
        crypto.filter.toLowerCase().search(
          typeval.toLowerCase()) !== -1;
    });
    await this.setState({ searchedR: cryptoList, searchingResult: typeval });
  }
  componentWillMount() {
    this.setState({ searchedR: this.state.searchedFind });
    console.log('allUsersListSRcomponentWillMount',this.state.allUsersListSR)
  }

  componentDidMount = () => {
    this.appsCategory();
    this.setState({ afterLogin: localStorage.getItem('afterLogin') })
    // this.setState({afterLogin:localStorage.clear('afterLogin')})
    this.befLog();
    // let menuNav = localStorage.getItem('navMenu')
    // const menuNavFun = () => {
    //     let MenuNV = this.setState({navMenu: menuNav})
    //     return MenuNV
    // }
    // console.log('rendesadsfeer', MenuNV)
    this.applicationsShow();
    this.getUsersList();
    this.getPartnersList();
    this.getDevelopersList();
    this.getVendorsList();
    this.getBosAppUserList();
    // api not build
    // this.getAdminsList();

  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,

        inputChange: this.inputChange,
        handleZindex: this.handleZindex,
        loginVerify: this.loginVerify,
        logedOut: this.logedOut,
        cryptoFinding: this.cryptoFinding,
        appsRightDrawer: this.appsRightDrawer,
        CategoryPage: this.CategoryPage,
        createAppsRecord: this.createAppsRecord,
        fileUpload: this.fileUpload,
        createCategoryRecord: this.createCategoryRecord,
        CTfileUpload: this.CTfileUpload,
        applicationsShow: this.applicationsShow,
        addNewCategoryDrw: this.addNewCategoryDrw,
        addNewBosappDrw: this.addNewBosappDrw,
        addNewBosCtegoryDrw: this.addNewBosCtegoryDrw,
        addNewApp: this.addNewApp,
        addNewAppAway: this.addNewAppAway,
        selectCateApp: this.selectCateApp,
        addPaidSignupCost: this.addPaidSignupCost,
        addFreeSignupCost: this.addFreeSignupCost,
        addBosAppYes: this.addBosAppYes,
        addBosAppNo: this.addBosAppNo,
        singleItemSearch: this.singleItemSearch,
        // users ******
        openUsersDrw: this.openUsersDrw,
        openULDrw: this.openULDrw,
        ULdetails: this.ULdetails,
        openManualDrw: this.openManualDrw,
        ManualDetail: this.ManualDetail,
        checkforGX: this.checkforGX,
        backToGxCheck: this.backToGxCheck,
        RegGxUsername: this.RegGxUsername,
        RegGxEmail: this.RegGxEmail,
        RegGxCreatepass: this.RegGxCreatepass,
        RegGxConfirmpass: this.RegGxConfirmpass,
        submitGxRegistration: this.submitGxRegistration,
        submitMailCodeGxRegistration: this.submitMailCodeGxRegistration,
        BosRegistration: this.BosRegistration,
        BosRegistrationWithGX: this.BosRegistrationWithGX,
        BosPartnerRegistration: this.BosPartnerRegistration,
        BosDevelopersRegistration: this.BosDevelopersRegistration,
        BosVendorsRegistration: this.BosVendorsRegistration,
        SelectAPPAppuserRegistration: this.SelectAPPAppuserRegistration,
        backAppuserRegistration: this.backAppuserRegistration,
        DropAPPidOpen: this.DropAPPidOpen,
        DropAPPidAway: this.DropAPPidAway,
        selectedDropAPPid: this.selectedDropAPPid,
        BosAppuserRegistration: this.BosAppuserRegistration,
        allUserListSearch: this.allUserListSearch,
        allPartnersListSearch: this.allPartnersListSearch,
        allDevelopersListSearch: this.allDevelopersListSearch,
        allVendorsListSearch: this.allVendorsListSearch,

        HomeNavmenu: this.HomeNavmenu,
        AppsNavmenu: this.AppsNavmenu,
        TokensNavmenu: this.TokensNavmenu,
        // WearNavmenu: this.WearNavmenu

      }}>
        {this.props.children}
      </ProductContext.Provider>
    )

  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };