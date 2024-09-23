import "./Navbar.style.css";
import { useEffect, useState } from "react";
// import {
//   Bars3BottomLeftIcon,
//   XMarkIcon,
// } from "@heroicons/react/20/solid";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import LogoImg from '../../assets/logo.svg';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    if (firstLoad) {
      setFirstLoad(false);
      setScrolling(true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [firstLoad]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      document.body.classList.add("menu-open");
      document.body.classList.remove("menu-closed");
    } else {
      document.body.classList.add("menu-closed");
      document.body.classList.remove("menu-open");
    }
  };

  const handleNavLinkClick = () => {
    setShowMenu(false);
    document.body.classList.remove("menu-open");
    document.body.classList.add("menu-closed");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (showMenu && target && !target.closest('.mobile-menu')) {
        setShowMenu(false);
        document.body.classList.remove("menu-open");
        document.body.classList.add("menu-closed");
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  useEffect(() => {
    setShowMenu(false);
  }, []);


  return (
    <header
      className={`header ${scrolling ? "bg-white" : "bg-primary"
        } duration-200 ${scrolling ? "bg-transparent" : "bg-primary"} ${showMenu ? "menu-open" : ""
        }`}
      style={{
        display: `${scrolling === true ? "" : "none"}`,
        background: `${window.scrollY < 10 ? "transparent" : ""}`,
        animation: `${window.scrollY > 50 ? "fadeUpNav 0.4s ease-out" : ""}`,
        position: "fixed",
        top: 0,
        width: "100%",
        height: "78px",
        zIndex: "3000",
      }}
    >
      <div
        className={`menu__wrapper duration-200 ${scrolling ? "bg-transparent" : "text-primary"
          }`}
        style={{
          background: `${window.scrollY < 10 ? "transparent" : ""}`,
          animation: `${window.scrollY > 50 ? "fadeUpNav 0.4s ease-out" : ""}`,
        }}
      >
        <div className="menu__bar">
          <ScrollLink
            onClick={() => scroll.scrollToTop()}
            to="/"
            title={"Bringovia SMSID"}
            aria-label="home"
            className="logo"
          >
            <img
              className={`ml-0`}
              src={LogoImg}
              alt="logo"
            />
          </ScrollLink>
          <nav>
            <ul className="navigation hide">
              <li>
                <ScrollLink
                  className="nav-link"
                  activeClass="active"
                  to="landing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleNavLinkClick}
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  className="nav-link"
                  activeClass="active"
                  to="feature"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleNavLinkClick}
                >
                  Our Feature
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  className="nav-link"
                  activeClass="active"
                  to="prices"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleNavLinkClick}
                >
                  Prices
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  className="nav-link"
                  activeClass="active"
                  to="feedbacks"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleNavLinkClick}
                >
                  Feedbacks
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  className="nav-link"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleNavLinkClick}
                >
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </nav>
          <div className="action-buttons hide">
            <Link
              to="/auth/login"
              className={`primary font-medium rounded-lg text-[15px] cursor-pointer duration-150`}
              onClick={handleNavLinkClick}
            >
              Get Started
            </Link>
          </div>
        </div>
        <button
          aria-label="Toggle menu"
          className="burger-menu z-20"
          type="button"
          onClick={toggleMenu}
        >
          {/* {showMenu ? (
            <XMarkIcon className={"fill-white"} />
          ) : <Bars3BottomLeftIcon className={"fill-white"} />} */}
        </button>
        {showMenu && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu">
              <nav>
                <ul className="text-center space-y-5">
                  <li className="text-primary text-xl hover:text-secondary duration-150">
                    <ScrollLink to="home" smooth={true} duration={500} onClick={handleNavLinkClick}>
                      Home
                    </ScrollLink>
                  </li>
                  <li className="text-primary text-xl hover:text-secondary duration-150">
                    <ScrollLink to="about-us" smooth={true} duration={500} onClick={handleNavLinkClick}>
                      Our Feature
                    </ScrollLink>
                  </li>
                  <li className="text-primary text-xl hover:text-secondary duration-150">
                    <ScrollLink to="services" smooth={true} duration={500} onClick={handleNavLinkClick}>
                      Services
                    </ScrollLink>
                  </li>
                  <li className="text-primary text-xl hover:text-secondary duration-150">
                    <ScrollLink to="feedbacks" smooth={true} duration={500} onClick={handleNavLinkClick}>
                      Feedbacks
                    </ScrollLink>
                  </li>
                  <li className="text-primary text-xl hover:text-secondary duration-150">
                    <ScrollLink to="contact" smooth={true} duration={500} onClick={handleNavLinkClick}>
                      Contact Us
                    </ScrollLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
