import React from "react";
import { useFormContext } from "react-hook-form";
// Types
interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
}


const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { error?: string }
>(({ error, className = '', ...props }, ref) => (
  <input
    ref={ref}
    autoComplete={'off'}
    className={`w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-primaryColor outline-none ${
      error ? 'border-red-500' : 'border-gray-300'
    } ${className}`}
    {...props}
  />
));
Input.displayName = 'Input';


const FormField: React.FC<{
  name: keyof SignupData;
  label?: string;
  type?: string;
  placeholder?: string;
}> = ({ name, label, type = 'text', placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SignupData>();

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-[14px] leading-[17px]  font-medium text-color1">{label}</label>
      )}
      <Input
        type={type}
        
        placeholder={placeholder}
        {...register(name)}
        error={errors[name]?.message}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default FormField