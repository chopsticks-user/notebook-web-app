import './Header.css';

function Header() {

  return (
    <div className="header-container">
      <div className="header-section-container" id="hsc-left">
        <div className="header-dropdown-menu">

        </div>
      </div>
      <div className="header-homepage-shortcut-container">
        <div className="header-homepage-icon">
          <a className="header-homepage-link" href="#"></a>
        </div>
        <div className="header-homepage-brand">
          <a className="header-homepage-link" href="#">
            NEKO
          </a>
        </div>
      </div>
      <div className="header-section-container" id="hsc-right">

      </div>
    </div>
  );
}

export default Header;