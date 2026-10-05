import React, { useState, useEffect, useRef } from "react";

export const themes = [
  {
    id: "theme-emerald",
    name: "Emerald Neon",
    label: "Emerald",
    color: "#0ee68c",
    previewBg: "#1e231e",
    tag: "Default",
  },
  {
    id: "theme-violet",
    name: "Cyber Violet",
    label: "Violet",
    color: "#a855f7",
    previewBg: "#191428",
    tag: "Cyberpunk",
  },
  {
    id: "theme-cyan",
    name: "Ocean Cyan",
    label: "Cyan",
    color: "#00f0ff",
    previewBg: "#0f1828",
    tag: "Electric",
  },
  {
    id: "theme-amber",
    name: "Sunset Amber",
    label: "Amber",
    color: "#f59e0b",
    previewBg: "#1e1814",
    tag: "Warm Solar",
  },
  {
    id: "theme-light",
    name: "Clean Light",
    label: "Light",
    color: "#059669",
    previewBg: "#f8fafc",
    tag: "Minimalist",
  },
];

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem("portfolio_theme") || "theme-emerald";
  });
  const dropdownRef = useRef(null);

  // Apply theme to document element
  useEffect(() => {
    const root = document.documentElement;
    // Remove all previous theme classes
    themes.forEach((t) => root.classList.remove(t.id));
    // Add current theme class
    root.classList.add(currentTheme);
    localStorage.setItem("portfolio_theme", currentTheme);
  }, [currentTheme]);

  // Click outside listener to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectTheme = (themeId) => {
    setCurrentTheme(themeId);
    setIsOpen(false);
  };

  const activeThemeObj = themes.find((t) => t.id === currentTheme) || themes[0];

  return (
    <div className="theme_switcher_container" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        className={`theme_toggle_btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Select theme"
        aria-expanded={isOpen}
        title="Change Portfolio Theme"
      >
        <div
          className="theme_swatch_dot"
          style={{ backgroundColor: activeThemeObj.color }}
        ></div>
        <span className="theme_btn_label">{activeThemeObj.label}</span>
        <svg
          className={`theme_chevron ${isOpen ? "rotate" : ""}`}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {/* Floating Dropdown Menu */}
      {isOpen && (
        <div className="theme_dropdown_menu" role="menu">
          <div className="theme_dropdown_header">
            <span className="dropdown_title">{"// COLOR THEME"}</span>
            <span className="dropdown_subtitle">Select your palette</span>
          </div>

          <div className="theme_options_list">
            {themes.map((theme) => {
              const isSelected = theme.id === currentTheme;
              return (
                <button
                  key={theme.id}
                  type="button"
                  className={`theme_option_item ${isSelected ? "selected" : ""}`}
                  onClick={() => handleSelectTheme(theme.id)}
                  role="menuitem"
                >
                  <div className="theme_item_left">
                    <span
                      className="theme_item_swatch"
                      style={{
                        backgroundColor: theme.color,
                        boxShadow: `0 0 10px ${theme.color}66`,
                      }}
                    ></span>
                    <div className="theme_item_text">
                      <span className="theme_item_name">{theme.name}</span>
                      <span className="theme_item_tag">{theme.tag}</span>
                    </div>
                  </div>

                  {isSelected && (
                    <svg
                      className="theme_item_check"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={theme.color}
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
