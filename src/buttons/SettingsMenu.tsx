import { useRef } from "react";

type SettingsMenuProps = {
    sectionThemes: any;
    darkTheme: boolean;
    toggleTheme: any;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({
    sectionThemes, darkTheme, toggleTheme
}) => {
    const themeIcons = { dark: "🌙", light: "⛅" }
    const themeIconRef = useRef<string>(darkTheme ? themeIcons.dark : themeIcons.light);
    return (
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
    )
}

export default SettingsMenu