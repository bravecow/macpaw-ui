import React from 'react';
import cx from 'clsx';
import ButtonLoader from './ButtonLoader';

const Button = (props) => {
  const {
    children,
    className,
    type = 'button',
    color = 'primary',
    size = 'medium',
    wide,
    disabled,
    loading,
    outline,
    ...other
  } = props;
  const classNames = cx(className, 'button', `-${color}`, {
    '-wide': wide,
    '-medium': size === 'medium',
    '-small': size === 'small',
    '-loading': loading,
    '-outline': outline,
  });
  return (
    <button type={type} className={classNames} disabled={disabled || loading} {...other}>
      {loading && '\u00A0'}
      {loading && <ButtonLoader />}
      {!loading && children}
    </button>
  );
};

export default Button;