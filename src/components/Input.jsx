import React, { useId, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className="w-full">
            {label && (
                <label
                    className="inline-block mb-1 pl-1"
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <div className="relative w-full">
                <input
                    type={type === 'password' && showPassword ? 'text' : type}
                    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full pr-10 ${className}`}
                    ref={ref}
                    {...props}
                    id={id}
                />
                {type === 'password' && (
                    <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? (
                            <AiFillEyeInvisible size={20} />
                        ) : (
                            <AiFillEye size={20} />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
});

export default Input;
