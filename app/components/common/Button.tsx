interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
  }
  
  
  const Button: React.FC<ButtonProps> = ({ 
    children, 
    variant = 'primary', 
    className = '',
    ...props 
  }) => {
    const variants = {
      primary: 'bg-primaryColor text-white hover:bg-[#052666]',
      secondary: 'bg-white text-primaryColor  border-[1.5px] border-primaryColor hover:bg-gray-50',
    };
  
    return (
      <button
        className={`w-full py-2 px-4 rounded-[5px] font-medium transition-colors text-[14px] leading-[17px] ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  export default Button;
  