import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../store/user/user.selector";
import { selectIsCartOpen } from "../store/cart/cart.selector";
import { signoutuser } from "../utils/Firebase";
import CartIcon from "../Components/cart-icon/CartIcon";
import CardDropDown from "../Components/Card-Drop-Down/CardDropDown";
import ReactLogo from "../assets/crown.svg";
import './Navigation.styles.scss';

const Navigation = () =>{
    const Currentuser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)

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
                 {
                  Currentuser ? (
                    <span className="nav-link" onClick={signoutuser}>Sign out</span>
                  ):(
                  <Link className="nav-link" to='/Authentication'>
                    Singn in
                  </Link>
                  )
                 }
                 <CartIcon />
            </div>
            { isCartOpen && <CardDropDown/> }
        </div>
        <Outlet/>
      </Fragment>
    );
  }

  export default Navigation;