import './Header.css';

type HeaderProps = {
  commonTheme: any;
  colorTheme: any;
}

const Header: React.FC<HeaderProps> = ({ commonTheme, colorTheme }) => {

  return (
    <div className="header-container">
      <div className="header-section-container" id="hsc-left">
        <div className="header-dropdown-menu-container">
          <button className="header-dropdown-menu-button"
            style={{ color: colorTheme.textColor }}>M</button>
          <ul className="header-dropdown-item-container"
            style={{ color: colorTheme.textColor }}
          >
            <li className="header-dropdown-item" id="hdi-1">
              <a href="/item1"
                style={{
                  color: colorTheme.textColor,
                  textDecoration: "none"
                }}>
                Item 1
              </a>
            </li>
            <li className="header-dropdown-item" id="hdi-2">
              <a href="/item2"
                style={{
                  color: colorTheme.textColor,
                  textDecoration: "none"
                }}>
                Item 2
              </a>
            </li>
            <li className="header-dropdown-item" id="hdi-3">
              <a href="/item3"
                style={{
                  color: colorTheme.textColor,
                  textDecoration: "none"
                }}>
                Item 3
              </a>
            </li>
            <li className="header-dropdown-item" id="hdi-4">
              <a href="/item4"
                style={{
                  color: colorTheme.textColor,
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
          style={{ color: colorTheme.textColor }}
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