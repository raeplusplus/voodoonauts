import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  // NavBtn,
  // NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Voodoonauts</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to="news">News</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks to="alumni">Alumni</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to="bookshelf">Bookshelf</NavLinks>
            </NavItem> */}
            {/* <NavItem>
              <NavLinks to="contact">Contact Us</NavLinks>
            </NavItem> */}
            {/* <NavItem>
              <NavLinks to="signin">Sign In</NavLinks>
            </NavItem> */}
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to="/signin">Join The Fellowship</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
