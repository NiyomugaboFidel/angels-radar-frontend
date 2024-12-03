import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  isLoading = false,
  disabled,
  ...props 
}) => {
  const variants = {
    primary: 'bg-primaryColor text-white hover:bg-[#052666]',
    secondary: 'bg-white text-primaryColor border-[1.5px] border-primaryColor hover:bg-gray-50',
  };

  return (
    <button
      className={`
        flex items-center justify-center  w-full py-2 px-4 rounded-[5px] font-medium transition-colors 
        text-[14px] leading-[17px] relative
        ${variants[variant]} 
        ${className}
        ${isLoading ? 'cursor-not-allowed opacity-70' : ''}
      `}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className={`w-5 h-5 border-2  border-t-2  ${ variant === "primary" ? "border-t-white border-white/10" : " border-black/20 border-t-primaryColor"} rounded-full animate-spin`}></span>
        </span>
      )}
      <span className={isLoading ? 'invisible' : ''}>
        {isLoading ? 'Loading...' : children}
      </span>
    </button>
  );
};

export default Button;