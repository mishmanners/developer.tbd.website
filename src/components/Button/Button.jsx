import PropTypes from 'prop-types';
import React from 'react';
import { useEffect, useState } from 'react';
const Button = ({ label, url, className, isExternalLink, colorDarkMode }) => {
  const [classesDarkMode, setClassesDarkMode] = useState('');
  useEffect(() => {
    if (colorDarkMode === 'cyan') {
      setClassesDarkMode(
        'dark:shadow-button-sh-cyan dark:border-accent-cyan dark:hover:shadow-button-sh-hv-cyan dark:text-accent-cyan',
      );
    }
    if (colorDarkMode === 'yellow') {
      setClassesDarkMode(
        'dark:shadow-button-sh-yellow dark:border-primary-yellow dark:hover:text-accent-cyan dark:hover:border-accent-cyan dark:hover:shadow-button-sh-hv-cyan dark:text-primary-yellow',
      );
    }
    if (colorDarkMode === 'purple') {
      setClassesDarkMode(
        'dark:shadow-button-sh-purple dark:border-accent-purple dark:hover:shadow-button-sh-hv-purple dark:text-accent-cyan',
      );
    }
  }, [colorDarkMode]);

  let cssClasses = `w-fit px-[1.375rem] py-[0.75rem] mb-2 mr-2 nav-links border-solid border-2 hover:translate-x-[4px] hover:translate-y-[4px] ${
    className ? className : ''
  }`;

  cssClasses +=
    'bg-primary-yellow dark:bg-primary-black text-primary-black shadow-button-sh border-primary-black hover:shadow-button-sh-hv  ' +
    classesDarkMode;

  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={url}
      target={isExternalLink ? '_blank' : ''}
      rel={isExternalLink ? 'noopener noreferrer' : ''}
    >
      <div className={cssClasses}>{label}</div>
    </a>
  );
};

Button.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Button URL
   */
  url: PropTypes.string.isRequired,

  /**
   * Button className
   */
  className: PropTypes.string,
  isExternalLink: PropTypes.bool,
  colorDarkMode: PropTypes.string,
};
Button.defaultProps = {
  isExternalLink: false,
  colorDarkMode: 'yellow',
};
export default Button;
