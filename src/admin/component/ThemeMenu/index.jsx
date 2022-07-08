import React, { Fragment } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineDarkMode } from 'react-icons/md';
import { useDispatch } from 'react-redux';

ThemeMenu.propTypes = {};

function ThemeMenu({ onSubmit }) {
  const [isTheme, setisTheme] = React.useState(false);

  const mode_settings = [
    {
      id: 'light',
      name: 'light',
      background: 'light-background',
      class: 'theme-mode-light',
    },
    {
      id: 'dark',
      name: 'Dark',
      background: 'dark-background',
      class: 'theme-mode-dark',
    },
  ];

  const handleThemeClass = (values) => {
    if (values) {
      onSubmit(values);
    }
    setisTheme(false);
  };
  const handleOnclickOpenTheme = () => {
    setisTheme(true);
  };
  const handleOnclickCloseTheme = () => {
    setisTheme(false);
  };
  return (
    <div className="admin_theme">
      <div className="admin_theme-icon">
        <MdOutlineDarkMode onClick={handleOnclickOpenTheme} />
      </div>

      <div className={isTheme ? 'admin_theme-swapper active_model' : 'admin_theme-swapper'}>
        <div className="admin_theme-block">
          <div className="admin_theme-title">
            <span>Theme settings</span>
            <AiOutlineClose onClick={handleOnclickCloseTheme} />
          </div>

          <div className="admin_theme-chosse">
            <div className="admin_theme-chosse-title">
              <span>Chosse Mode</span>
            </div>
            <div className="admin_theme-chosse-list">
              {mode_settings.map((item, index) => (
                <Fragment key={index}>
                  <div className="admin_theme-item">
                    <button
                      className={item.background}
                      onClick={() => handleThemeClass(item.class)}
                    ></button>
                    <span>{item.name}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeMenu;
