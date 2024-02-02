import React, { PropsWithChildren, ReactElement } from 'react';

interface ButtonProps {
  title?: string;
  onClick?: () => void;
  size: 'sm' | 'md' | 'lg';
  type?: 'submit' | 'button' | 'reset';
  variation: 'fill' | 'outline' | 'link';
  colorScheme: 'primary' | 'secondary' | 'light' | 'dark';
}

const Button = ({
  type,
  title,
  onClick,
  children,
  colorScheme,
  size,
  variation,
}: PropsWithChildren<ButtonProps>) => {
  let sizeStyle = '';
  let variationStyle = '';

  if (size === 'sm') sizeStyle = 'px-3 py-1.5 text-sm';
  if (size === 'md') sizeStyle = 'px-4 py-2';
  if (size === 'lg') sizeStyle = 'px-4 py-2 text-lg';

  if (variation === 'fill') {
    if (colorScheme === 'primary') {
      variationStyle = 'text-white bg-primary-100 hover:bg-[#333]';
    }
    if (colorScheme === 'secondary') {
      variationStyle = 'text-white bg-coral-500 hover:bg-coral-600';
    }
    if (colorScheme === 'light') {
      variationStyle = 'text-black bg-white hover:bg-slate-100';
    }
    if (colorScheme === 'dark') {
      variationStyle = 'text-white bg-slate-950 hover:bg-slate-800';
    }
  }

  if (variation === 'outline') {
    if (colorScheme === 'primary') {
      variationStyle =
        'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white';
    }
    if (colorScheme === 'secondary') {
      variationStyle =
        'border border-coral-500 text-coral-500 hover:bg-coral-500 hover:text-white';
    }
    if (colorScheme === 'light') {
      variationStyle =
        'border border-white text-white hover:bg-white hover:text-black';
    }
    if (colorScheme === 'dark') {
      variationStyle =
        'border border-black text-black hover:bg-black hover:text-white';
    }
  }

  return (
    <button
      type={type}
      title={title}
      onClick={onClick}
      className={`${sizeStyle} ${variationStyle}`}
    >
      {children}
    </button>
  );
};

export default Button;
