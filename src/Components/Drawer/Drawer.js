import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer, List, ListItem, ListItemText, 
} from '@material-ui/core';
import { ProductConsumer } from '../../Context_Api/Context';
import { NavLink } from 'react-router-dom';
import './Drawer.css';
import BoslogoW from '../../Images/boslogoW.svg';
import AddNewCategory from '../Apps/AddNewCategory';
import Users from '../Users/Users'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#000',
    color: '#fff !important',
    overflow: 'hidden'
  },
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    overflowX: "hidden"
  },
  active: {
    color: "red"
  }
}));

export default function MiniDrawer(props) {
  const classes = useStyles();

  const { children } = props

  return (
    <ProductConsumer>
      {((value) => {
        const { navMenu, HomeNavmenu, AppsNavmenu, TokensNavmenu } = value;
        // let menuNav = localStorage.getItem('navMenu')
        // const menuNavFun = () => {
        //   let MenuNV = this.setState({navMenu: menuNav})
        //   return MenuNV
        // }
        // console.log('rendesadsfeer', menuNavFun)
        // console.log('render', menuNav)
        return (
          <>
            <div className={classes.root}>
              {/* <CssBaseline /> */}
              <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                  paper: classes.drawerPaper,
                }}
                anchor="left"
              >
                <div className="toolbar">
                    <img src={BoslogoW} alt="no_img" />
                </div>

                <List className="list-menu">
                    <NavLink to="/">
                      <ListItem button className={navMenu=== 'Home' ?"menuAfter":"menuBefore"} onClick={HomeNavmenu}>
                        <ListItemText >Home</ListItemText>
                      </ListItem>
                    </NavLink>
                    <NavLink to="/apps">
                      <ListItem button className={navMenu=== 'Apps' ?"menuAfter":"menuBefore"} onClick={AppsNavmenu}>
                        <ListItemText >Apps</ListItemText>
                      </ListItem>
                    </NavLink>
                    <Users/>
                    <NavLink to="/">
                      <ListItem button className={navMenu==="H"?"menuAfter":"menuBefore"} onClick={TokensNavmenu}>
                        <ListItemText >Products</ListItemText>
                      </ListItem>
                    </NavLink>
                    <NavLink to="/">
                      <ListItem button className={navMenu==="H"?"menuAfter":"menuBefore"} onClick={TokensNavmenu}>
                        <ListItemText >Services</ListItemText>
                      </ListItem>
                    </NavLink>
                    <NavLink to="/">
                      <ListItem button className={navMenu==="H"?"menuAfter":"menuBefore"} onClick={TokensNavmenu}>
                        <ListItemText >Offers</ListItemText>
                      </ListItem>
                    </NavLink>
                    <NavLink to="/">
                      <ListItem button className={navMenu==="H"?"menuAfter":"menuBefore"} onClick={TokensNavmenu}>
                        <ListItemText >Media</ListItemText>
                      </ListItem>
                    </NavLink>
                    <NavLink to="/">
                      <ListItem button className={navMenu==="H"?"menuAfter":"menuBefore"} onClick={TokensNavmenu}>
                        <ListItemText >Events</ListItemText>
                      </ListItem>
                    </NavLink>
                    <NavLink to="/">
                      <ListItem button className={navMenu==="H"?"menuAfter":"menuBefore"} onClick={TokensNavmenu}>
                        <ListItemText >Support</ListItemText>
                      </ListItem>
                    </NavLink>
                    <NavLink to="/">
                      <ListItem button className={navMenu==="H"?"menuAfter":"menuBefore"} onClick={TokensNavmenu}>
                        <ListItemText >Give Back</ListItemText>
                      </ListItem>
                    </NavLink>
                </List>

                <div className="toolbarBo">
                  <List className="bottom-list-menu">
                    {/* <NavLink to="/"> */}
                        <AddNewCategory/>
                    {/* </NavLink> */}
                    <NavLink to="/">
                      <ListItem button className={navMenu==="H"?"menuAfter":"menuBefore"} onClick={TokensNavmenu}>
                        <ListItemText >For Developers</ListItemText>
                      </ListItem>
                    </NavLink>
                    </List>
                </div>

              </Drawer>

              <main className={classes.content}>
                {children}
              </main>

            </div>
          </>
        )
      })}
    </ProductConsumer>
  );
}