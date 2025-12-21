import { Link } from "react-router-dom";

/**
 * A button component with predefined size options from sm to 2xl
 * 
 * @param {"sm" | "md" | "lg" | "xl" | "2xl"} size - Sets static size
 * @param {string} bgColor - Choose a valid tailwind background color class (e.g., bg-black)
 * @param {string} textColor - Choose a valid tailwind text color class (e.g., text-white) 
 * @param {string} borderColor - Choose a valid tailwind border color class (e.g., border-black)
 * @param {string} borderThickness - Choose a valid tailwind border-size class (e.g., border-2)
 */
function Button ({children, size="md", bgColor="bg-white", textColor="text-white", borderColor="border-black", borderThickness="border-2"}) {
  const sizeClasses = {
    sm: "px-4 py-1 rounded-sm",
    md: "px-6 py-2 rounded-md",
    lg: "px-8 py-3 rounded-md",
    xl: "px-12 py-4 rounded-md",
    "2xl": "px-16 py-5 rounded-lg" 
  }

  return (
    <button className={`${bgColor} ${sizeClasses[size]} ${textColor} ${borderColor} ${borderThickness}`}>
      {children}
    </button>
  );
};

export default Button;