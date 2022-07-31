import { useRef } from 'react';
import './Header.css';

type HeaderProps = {
  sectionThemes: any;
  generalTheme: any;
  darkTheme: boolean;
  toggleTheme: any;
}

const Header: React.FC<HeaderProps> = ({
  sectionThemes, generalTheme, darkTheme, toggleTheme
}) => {
  const themeIcons = { dark: "🌙", light: "⛅" }
  const themeIconRef = useRef<string>(darkTheme ? themeIcons.dark : themeIcons.light);
  return (
    <div className="header-container">
      <div className="header-section-container" id="hsc-left">
        <div className="header-dropdown-menu-container">
          <button className="header-dropdown-menu-button"
            style={{ color: sectionThemes.textColor }}>M</button>
          <ul className="header-dropdown-item-container" id="hdic-left"
            style={{ color: sectionThemes.textColor }}
          >
            <li className="header-dropdown-item" id="hdi-1">
              <a href="/item1"
                style={{
                  color: sectionThemes.textColor,
                  textDecoration: "none"
                }}>
                Item 1
              </a>
            </li>
            <li className="header-dropdown-item" id="hdi-2">
              <a href="/item2"
                style={{
                  color: sectionThemes.textColor,
                  textDecoration: "none"
                }}>
                Item 2
              </a>
            </li>
            <li className="header-dropdown-item" id="hdi-3">
              <a href="/item3"
                style={{
                  color: sectionThemes.textColor,
                  textDecoration: "none"
                }}>
                Item 3
              </a>
            </li>
            <li className="header-dropdown-item" id="hdi-4">
              <a href="/item4"
                style={{
                  color: sectionThemes.textColor,
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
          style={{ color: sectionThemes.textColor }}
        >
          {"N3K😽"}
        </a>
      </div>
      <div className="header-section-container" id="hsc-right">
        <div className="setting-container header-right-element">
          <button className="header-dropdown-menu-button" id="hrdmb-settings"
            style={{
              color: sectionThemes.textColor
            }}>
            <span>{"⚙"}</span>
          </button>
          <ul className="header-dropdown-item-container" id="hdic-settings">
            <li className="header-dropdown-item setting-item">
              <button className="change-theme-button"
                onClick={() => {
                  themeIconRef.current = !darkTheme ? themeIcons.dark : themeIcons.light;
                  toggleTheme();
                }}>
                {themeIconRef.current}
              </button>
            </li>
            <li className="header-dropdown-item setting-item">
              <button className="change-language-button"
                style={{
                  color: sectionThemes.textColor,
                }}>
                {"EN"}
              </button>
            </li>
            <li className="header-dropdown-item setting-item">
              <button className="change-font-size-button"
                style={{
                  color: sectionThemes.textColor,
                }}>
                {"🖋"}
              </button>
            </li>
          </ul>
        </div>
        <span></span>
        <div className="about-container header-right-element">
          <button id="hrdmb-about" style={{ color: sectionThemes.textColor }}>
            <a href="/about-me"
              style={{
                color: sectionThemes.textColor, textDecoration: "none"
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
              color: sectionThemes.textColor
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