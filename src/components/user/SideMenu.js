import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import DashboardIcon from "../../assets/user/dashboard.svg";
import IntransitIcon from "../../assets/user/intransit.svg";
import DeliveredIcon from "../../assets/user/delivered.svg";
import FinanceIcon from "../../assets/user/finance.svg";
import clsx from "clsx";
import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const SideMenu = ({ open, setOpen }) => {
  const [hover, setHover] = useState(false);
  const { pathname } = useLocation();
  const history = useHistory();
  const logout = () => {
    const confirmBox = window.confirm("Do you want to logout?");
    if (confirmBox === true) {
      localStorage.removeItem("user");
      history.push("/login");
    }
  };

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  const useStyles = makeStyles(() => ({
    SideMenu: {
      position: "absolute",
      zIndex: 9,
      transition: "0.3s",
      width: hover ? "200px" : "65px",
      overflow: "hidden",
      height: "100vh",
      backgroundColor: "white",
    },
    menuContent: {
      display: "flex",
      height: "100%",
      alignItems: "center",
    },
    menuHeading: {
      height: "100%",
      paddingLeft: "15px",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.SideMenu}>
      {/* <Drawer  variant="temporary" open={open} style={{ top: '60 important' }} onClose={handleClose}> */}
      <div>
        <ul className="side_menu">
          <li className={clsx(pathname === "/dashboard" && "selectedNav")}>
            <Link
              to="/dashboard"
              onMouseLeave={handleLeave}
              onMouseOver={handleMouseOver}
            >
              <div className={classes.menuContent}>
                <img
                  className="sidemenu-image"
                  src={DashboardIcon}
                  alt="dashboard icon"
                />
                <p className={classes.menuHeading}>Dashboard</p>
              </div>{" "}
            </Link>
          </li>
          {/* <li
            className={clsx(
              pathname === "/dashboard/delivered" && "selectedNav"
            )}
          >
            {" "}
            <Link
              to="/dashboard/delivered"
              onMouseLeave={handleLeave}
              onMouseOver={handleMouseOver}
            >
              <div className={classes.menuContent}>
                <img
                  className="sidemenu-image"
                  src={IntransitIcon}
                  alt="dashboard icon"
                />
                <p className={classes.menuHeading}>Delivered</p>
              </div>
            </Link>
          </li> */}
          <li className={clsx(pathname === "/dashboard/all" && "selectedNav")}>
            <Link
              to="/dashboard/all"
              onMouseLeave={handleLeave}
              onMouseOver={handleMouseOver}
            >
              <div className={classes.menuContent}>
                <img
                  className="sidemenu-image"
                  src={DeliveredIcon}
                  alt="dashboard icon"
                />
                <p className={classes.menuHeading}>Track</p>
              </div>
            </Link>
          </li>
          {/* <li
            className={clsx(
              pathname === "/dashboard/returned" && "selectedNav"
            )}
          >
            <Link
              onMouseLeave={handleLeave}
              onMouseOver={handleMouseOver}
              to="/dashboard/returned"
            >
              <div className={classes.menuContent}>
                <img
                  className="sidemenu-image"
                  src={FinanceIcon}
                  alt="dashboard icon"
                />
                <p className={classes.menuHeading}>Returned</p>
              </div>
            </Link>
          </li> */}
          {/* <li><a href=""> <i  class="fa fa-truck "></i> Tracking</a></li> */}
          {/* <li style={{ cursor: "pointer" }}>
            <a
              onMouseLeave={handleLeave}
              onMouseOver={handleMouseOver}
              style={{ display: "flex", alignItems: "center" }}
              onClickCapture={logout}
            >
              <i class="fa fa-sign-out"></i>
              <p style={{ fontSize: "12px", margin: 0, paddingLeft: "20px" }}>
                Logout
              </p>
            </a>
          </li> */}
        </ul>
      </div>
      {/* </Drawer> */}
    </div>
  );
};
export default SideMenu;
