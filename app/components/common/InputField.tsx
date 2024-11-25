import React from "react";
import { useFormContext, Path, FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

// Input component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, className = "", ...props }, ref) => (
    <input
      ref={ref}
      autoComplete="off"
      className={`w-full px-3 py-2 border rounded-md focus:ring-1 focus:ring-primaryColor outline-none ${
        error ? "border-red-500 focus:ring-0 focus:ring-transparent" : "border-gray-300"
      } ${className}`}
      {...props}
    />
  )
);
Input.displayName = "Input";

// FormField component
interface FormFieldProps<T> {
  name: Path<T>; // Use `Path<T>` for type-safe field names
  label?: string;
  type?: string;
  placeholder?: string;
}

const FormField = <T extends Record<string, any>>({
  name,
  label,
  type = "text",
  placeholder,
}: FormFieldProps<T>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  // Extract error message safely
  const fieldError = errors[name] as
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;

  return (
    <div className={`space-y-1`}>
      {label && (
        <label className="block text-sm leading-sm font-medium text-color1">
          {label}
        </label>
      )}
      <Input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        error={fieldError?.message as string | undefined}
      />
      {fieldError?.message && (
        <p className="text-red-500 text-sm">{fieldError.message as string}</p>
      )}
    </div>
  );
};

export default FormField;
