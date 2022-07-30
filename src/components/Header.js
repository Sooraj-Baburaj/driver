import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FooterLogo, MainLogo } from "../assets/images";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  const { pathname } = useLocation();
  const matches840 = useMediaQuery("(max-width:840px)");

  const [isMobile, setIsMobile] = useState(false);
  const [services, setServices] = useState("Services");

  const handleChange = (e) => {
    console.log(e, "hiii");
  };

  useEffect(() => {
    if (window.screen.width > 758) {
      setIsMobile(false);
    }
  }, [window.screen]);
  const [active, setActive] = useState({
    home: false,
    about_us: false,
    services: false,
    clientele: false,
    career: false,
    blog: false,
    contact: false,
    login: false,
  });
  useEffect(() => {
    switch (pathname) {
      case "/":
        setActive({ home: true });
        break;
      case "/about-us":
        setActive({ about_us: true });
        break;
      case "/warehouse-management":
        setActive({ services: true });
        break;
      case "/fleet-and-transportation":
        setActive({ servicesTwo: true });
        break;
      case "/3PL-consultation":
        setActive({ servicesThree: true });
        break;
      case "/clientele":
        setActive({ clientele: true });
        break;
      case "/career":
        setActive({ career: true });
        break;
      case "/blog":
        setActive({ blog: true });
        break;
      case "/news":
        setActive({ news: true });
        break;
      case "/case-studies":
        setActive({ case_studies: true });
        break;
      case "/news-letters":
        setActive({ news_letters: true });
        break;
      case "/contact":
        setActive({ contact: true });
        break;
      case "/login":
        setActive({ login: true });
        break;
      default:
        setActive({ home: true });
    }
  }, [pathname]);
  return (
    <section className="header_section" style={{ padding: "0px" }}>
      <Container className={clsx("headerContainer", isMobile && "fullWidth")}>
        <Col
          md={12}
          style={{ padding: "0px" }}
          className={matches840 && isMobile && "mobile-nav-container"}
        >
          <div className="header_outer">
            <Col md={3} sm={3}>
              <div className="main_logo" style={{ textAlign: "left" }}>
                <Link to="/">
                  {isMobile ? (
                    <img
                      src={FooterLogo}
                      alt="Driver Logistics"
                      title="Driver Logistics"
                    />
                  ) : (
                    <img
                      src={MainLogo}
                      alt="Driver Logistics"
                      title="Driver Logistics"
                    />
                  )}
                </Link>
              </div>
            </Col>

            <Col
              md={9}
              sm={9}
              style={{ flex: 1 }}
              className={matches840 && isMobile && "mobile-nav"}
            >
              <div className="menupart">
                <div id="main-nav" style={{ whiteSpace: "nowrap" }}>
                  <ul
                    onClick={() => setIsMobile(false)}
                    className={
                      matches840 && isMobile
                        ? "stellarnav-mobile"
                        : "stellarnav"
                    }
                  >
                    <li className={clsx(active.home && "menu_active")}>
                      <Link to="/">
                        {isMobile ? (
                          "Home"
                        ) : (
                          <FontAwesomeIcon icon={faHome} size="1x" />
                        )}
                      </Link>
                    </li>
                    <li className={clsx(active.about_us && "menu_active")}>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    {/* <li className={clsx(active.services && "menu_active")}>
                      <Link to="/services">Services</Link>
                    </li> */}
                    <li>
                      <Dropdown
                        className={`header-dropdown ${clsx(
                          active.services
                            ? "menu_active"
                            : active.servicesTwo
                            ? "menu_active"
                            : active.servicesThree && "menu_active"
                        )}`}
                      >
                        <Dropdown.Toggle
                          style={{
                            fontSize: "clamp(13px, 1vw, 17px)",
                            fontWeight: "600",
                          }}
                          variant
                          id="dropdown-basic"
                        >
                          SERVICES
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            style={{
                              color: clsx(
                                active.services ? "#d01a38" : "rgba(0,0,0,0.8)"
                              ),
                            }}
                            href="/warehouse-management"
                          >
                            WAREHOUSE MANAGEMENT
                          </Dropdown.Item>
                          <Dropdown.Item
                            style={{
                              color: clsx(
                                active.servicesTwo
                                  ? "#d01a38"
                                  : "rgba(0,0,0,0.8)"
                              ),
                            }}
                            href="/fleet-and-transportation"
                          >
                            FLEET & TRANSPORTATION
                          </Dropdown.Item>
                          <Dropdown.Item
                            style={{
                              color: clsx(
                                active.servicesThree
                                  ? "#d01a38"
                                  : "rgba(0,0,0,0.8)"
                              ),
                            }}
                            href="/3PL-consultation"
                          >
                            3PL CONSULTATION
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li className={clsx(active.clientele && "menu_active")}>
                      <Link to="/clientele">Clientele</Link>
                    </li>
                    <li className={clsx(active.career && "menu_active")}>
                      <Link to="/career">Career</Link>
                    </li>
                    <li className={clsx(active.blog && "menu_active")}>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li className={clsx(active.news && "menu_active")}>
                      <Link to="/news">News</Link>
                    </li>
                    {/* <li className={clsx(active.case_studies && 'menu_active')}><Link to="/case-studies">Case Studies</Link></li> */}
                    {/* <li className={clsx(active.news_letters && 'menu_active')}><Link to="/news-letters">News Letters</Link></li> */}
                    <li className={clsx(active.contact && "menu_active")}>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li className={clsx(active.login && "menu_active")}>
                      <Link to="/login">Login</Link>
                    </li>
                    <li className="extra-text visible-xs">
                      <a href="#" class="probootstrap-burger-menu active">
                        <i></i>
                      </a>
                      <h5 style={{ fontSize: "15px" }}>Address</h5>
                      <p
                        style={{
                          wordWrap: "break-word",
                          textOverflow: "ellipsis",
                        }}
                      >
                        University Road,
                        <br />
                        CUSAT PO, Kochi,
                        <br />
                        Kerala, India - 682022
                      </p>
                      <h5>Call</h5>
                      <p>+91 484 254 4002</p>
                      <h5>Connect</h5>
                      <ul class="social-buttons">
                        <li className="dlab-social-icon">
                          <Link
                            to={{
                              pathname:
                                "https://www.instagram.com/driverlogistics/",
                            }}
                            target="_blank"
                          >
                            {" "}
                            <FontAwesomeIcon
                              icon={faInstagram}
                              size="1x"
                              color="#000"
                            />{" "}
                          </Link>
                        </li>
                        <li class="dlab-social-icon">
                          <Link
                            to={{
                              pathname:
                                "https://www.facebook.com/driverlogisticsllp",
                            }}
                            target="_blank"
                          >
                            {" "}
                            <FontAwesomeIcon
                              icon={faFacebookF}
                              size="1x"
                              color="#000"
                            />{" "}
                          </Link>
                        </li>
                        <li class="dlab-social-icon">
                          <Link
                            to={{
                              pathname:
                                "https://www.linkedin.com/company/driver-logistics-llp",
                            }}
                            target="_blank"
                          >
                            {" "}
                            <FontAwesomeIcon
                              icon={faLinkedinIn}
                              size="1x"
                              color="#000"
                            />{" "}
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </div>
          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <i className="fa fa-times" style={{ color: "#fff" }}></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </Col>
      </Container>
    </section>
  );
};

export default Header;
