import './Header.css';

function Header() {

  return (
    <div className="header-container">
      <div className="header-section-container" id="hsc-left">
        <div className="header-dropdown-menu-container">

        </div>
      </div>
      <div className="header-homepage-shortcut-container">
        <a className="header-homepage-link" href="/homepage"
          style={{ color: "white", fontSize: "25px", letterSpacing: "5px" }}
        >
          {"N3K😽"}
        </a>
      </div>
      <div className="header-section-container" id="hsc-right">

      </div>
    </div>
  );
}

export default Header;