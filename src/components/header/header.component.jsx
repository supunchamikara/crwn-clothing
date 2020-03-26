import React from "react";
//import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assests/crown.svg";
//import "./header.styles.scss";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

// both code same abouve code is efficient
// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// });

export default connect(mapStateToProps)(Header);

// old scss 
// const Header = ({ currentUser, hidden }) => (
//     <div className="header">
//       <Link className="logo-container" to="/">
//         <Logo className="logo" />
//       </Link>
//       <div className="options">
//         <Link className="option" to="/shop">
//           SHOP
//         </Link>
//         <Link className="option" to="/shop">
//           CONTACT
//         </Link>
//         {currentUser ? (
//           <div className="option" onClick={() => auth.signOut()}>
//             SIGN OUT
//           </div>
//         ) : (
//           <Link className="option" to="/signin">
//             SIGN IN
//           </Link>
//         )}
//         <CartIcon />
//       </div>
//       {hidden ? null : <CartDropdown />}
//     </div>
//   );
