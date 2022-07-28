import React, { useEffect, useState } from "react";
// import './assets/styles/mysass.scss'
import Header from "./components/user/Header";
import Footer from "./components/user/Footer";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import Routes from "./Routes";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/user/css/style.css";
import "./assets/user/css/responsive.css";
import "./assets/user/font-awesome-4.6.3/css/font-awesome.css";
import SideMenu from "./components/user/SideMenu";
import Intransist from "./components/user/Intransist";
import {
  AppBar,
  Card,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Drawer } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appbar: {
    width: "100%",
    height: 60,
    display: "flex",
  },
  sectionContainer: {
    display: "flex",
    width: "100%",
    position: "relative",
  },
}));
function UserEnd() {
  const onSearch = async (text) => {
    // console.log(text)
  };
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const { pathname } = useLocation();

  const [name, setName] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const initialValue = user ? user.Username : "";
    return initialValue;
  });

  return (
    <div className={"userend"}>
      <div class="admin">
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(true)}
          edge="start"
        >
          <i class="fa-solid fa-bars"></i>
        </IconButton> */}
        {/* <Drawer anchor={'left'} open={open} onClose={() => setOpen(false)} > */}
        {/* </Drawer> */}

        <div class="right_col">
          <Header onSearch={onSearch} headline="Header" />
          <div className={classes.sectionContainer}>
            <SideMenu open={open} setOpen={setOpen} />
            <div style={{ flex: 1 }}>
              <section
                style={{ marginLeft: "94px" }}
                class="col_dlp_transist clearfix"
              >
                <ul class="tab_clp">
                  {pathname === "/dashboard" ? (
                    <h1
                      style={{
                        textAlign: "left",
                        fontWeight: 300,
                        margin: "20px 0 0 94px",
                      }}
                      className="title"
                    >{`Hello ${name}`}</h1>
                  ) : (
                    <>
                      <li>
                        <Link to="/dashboard/intransist">Intransit</Link>
                      </li>
                      <li>
                        <Link to="/dashboard/delivered">Delivered</Link>
                      </li>
                      <li>
                        <Link to="/dashboard/returned">Return</Link>
                      </li>
                    </>
                  )}
                </ul>
              </section>
              <Routes />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* <div class="clearfix"></div>
        <main className="main">

        </main> */}
      {/* <Footer /> */}
    </div>
  );
}

export default UserEnd;
