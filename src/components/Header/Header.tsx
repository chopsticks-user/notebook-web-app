import './Header.css';

type HeaderProps = {
  sectionThemes: any;
  generalTheme: any;
}

const Header: React.FC<HeaderProps> = ({ sectionThemes, generalTheme }) => {

  return (
    <div className="header-container">
      <div className="header-section-container" id="hsc-left">
        <div className="header-dropdown-menu-container">
          <button className="header-dropdown-menu-button"
            style={{ color: generalTheme.textColor }}>M</button>
          <ul className="header-dropdown-item-container" id="hdic-left"
            style={{ color: generalTheme.textColor }}
          >
            <li className="header-dropdown-item" id="hdi-1">
              <a href="/item1"
                style={{
                  color: generalTheme.textColor,
                  textDecoration: "none"
                }}>
                Item 1
              </a>
            </li>
            <li className="header-dropdown-item" id="hdi-2">
              <a href="/item2"
                style={{
                  color: generalTheme.textColor,
                  textDecoration: "none"
                }}>
                Item 2
              </a>
            </li>
            <li className="header-dropdown-item" id="hdi-3">
              <a href="/item3"
                style={{
                  color: generalTheme.textColor,
                  textDecoration: "none"
                }}>
                Item 3
              </a>
            </li>
            <li className="header-dropdown-item" id="hdi-4">
              <a href="/item4"
                style={{
                  color: generalTheme.textColor,
                  textDecoration: "none"
                }}>
                Item 4
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-homepage-shortcut-container">
        <a className="header-homepage-link" href="/"
          style={{ color: generalTheme.textColor }}
        >
          {"N3K😽"}
        </a>
      </div>
      <div className="header-section-container" id="hsc-right">
        <div className="setting-container header-right-element">
          <button className="header-dropdown-menu-button" id="hrdmb-settings" style={{ color: generalTheme.textColor }}>
            {"S"}
          </button>
          <ul className="header-dropdown-item-container" id="hdic-settings">

          </ul>
          <div className="language-setting-container"></div>
        </div>
        <span></span>
        <div className="about-container header-right-element">
          <button id="hrdmb-about" style={{ color: generalTheme.textColor }}>
            <a href="/about-me"
              style={{
                color: generalTheme.textColor, textDecoration: "none"
              }}>
              {"About"}
            </a>
          </button>
          <ul id="hdic-about">

          </ul>
        </div>
        <span></span>
        <div className="login-container header-right-element">
          <button className="header-dropdown-menu-button" id="hrdmb-login"
            style={{
              color: generalTheme.textColor
            }}>
            {"Log In"}
          </button>
          <ul className="header-dropdown-item-container" id="hdic-login">

          </ul>
        </div>
        <span></span>
      </div>
    </div>
  );
}

export default Header;