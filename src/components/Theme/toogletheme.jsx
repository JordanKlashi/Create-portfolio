import { useTheme } from './Themecontexte';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='theme-toggle'>
    <button onClick={toggleTheme} className="theme-toggle-button">
      {theme === 'light' ? (
        <FontAwesomeIcon icon={faMoon} className="icon moon-icon" />
      ) : (
        <FontAwesomeIcon icon={faSun} className="icon sun-icon" />
      )}
    </button>
    </div>
  );
};

export default ThemeToggleButton;