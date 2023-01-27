import { NavLink } from "react-router-dom";

const Header = () => (
  <>
    <header className="header-style">
      <div aria-label="name of the aplication is 'App Name'" tabIndex={0}>
        App Name
      </div>
    </header>
    <nav className="nav-bar" aria-label="navigation bar">
      <NavLink
        to="/home"
        activeClassName="link-active"
        className="links"
        aria-label="navigate to home page"
      >
        Home
      </NavLink>
      <NavLink
        to="/dummy-link1"
        activeClassName="link-active"
        className="links"
        aria-label="t dummy link, no navigation"
      >
        DummyLink1
      </NavLink>
      <NavLink
        to="/dummy-link2"
        activeClassName="link-active"
        className="links"
        aria-label=" dummy link, no navigation"
      >
        DummyLink2
      </NavLink>{" "}
    </nav>
  </>
);

export default Header;
