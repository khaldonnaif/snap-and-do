import { Link } from "react-router-dom";

/**
 * A button component with predefined size options from sm to 2xl
 * 
 * @param {string} className - Custom styling that isn't accounted for (e.g, animations)
 * @param {string} bgColor - Choose a valid tailwind background color class (e.g., bg-black)
 * @param {string} textColor - Choose a valid tailwind text color class (e.g., text-white) 
 * @param {string} borderColor - Choose a valid tailwind border color class (e.g., border-black)
 * @param {string} borderThickness - Choose a valid tailwind border-size class (e.g., border-2)
 * @param {boolean} bordered - Decides whether or not to show the borders at all (e.g., true)
 */
function Button ({
  children, 
  size="md", 
  padding="px-2 py-1",
  bgColor="bg-white", 
  textColor="text-white", 
  borderColor="border-black", 
  borderThickness="border-2",
  bordered=true,
  className="",
  onClick, // forwarded click handler
  type = "button",
}) {

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${padding}
        ${bgColor} 
        ${textColor} 
        ${bordered ? `${borderColor} ${borderThickness}` : ""} 
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;