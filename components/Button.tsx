import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  to, 
  onClick, 
  className = '', 
  type = 'button' 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-600 hover:bg-brand-700 shadow-sm",
    secondary: "border-transparent text-brand-700 bg-brand-100 hover:bg-brand-200",
    outline: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
    ghost: "border-transparent text-gray-600 hover:text-brand-600 hover:bg-gray-50 px-3",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;