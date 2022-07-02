import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import ReactLogo from "../assets/crown.svg";
import './Navigation.styles.scss';

const Navigation = () =>{
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <img src={ReactLogo} alt="React Logo" className="logo" />
            </Link>
            <div className="nav-links-container">
                 <Link className="nav-link" to='/shop'>
                    Shop
                 </Link>
                 <Link className="nav-link" to='/Authentication'>
                    Singn-In
                 </Link>
            </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  }

  export default Navigation;