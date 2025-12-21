/**
 * A button component with a fully rounded border radius and 1:1 height and width ratios
 * 
 * @param {string} className - Custom styling that isn't accounted for (e.g, animations)
 * @param {"circ-sm" | "circ-md" | "circ-lg" | "circ-xl" | "2xl"} size - Sets static size
 * @param {string} bgClass - Tailwind background utilities, solid or gradient (e.g., "bg-black" or "bg-gradient-to-r from-black to-white")
 * @param {string} textColor - Choose a valid tailwind text color class (e.g., text-white) 
 * @param {string} borderColor - Choose a valid tailwind border color class (e.g., border-black)
 * @param {string} borderThickness - Choose a valid tailwind border-size class (e.g., border-2)
 * @param {string} onClick - Add a function to trigger on click (e.g., fetchJoke())
 */
function CircularButton({
  children, 
  className, 
  size="circ-md", 
  bgClass="bg-white", 
  textColor="text-white", 
  borderColor="border-black", 
  borderThickness,
  onClick
  }) {

  const sizeClasses = {
    "circ-sm": "h-8 w-8 rounded-full",
    "circ-md": "h-10 w-10 rounded-full",
    "circ-lg": "h-12 w-12 rounded-full",
    "circ-xl": "h-16 w-16 rounded-full",
    "circ-2xl": "h-20 w-20 rounded-full",
    "circ-3xl": "h-24 w-24 rounded-full",
    "circ-4xl": "h-28 w-28 rounded-full"
  }

  return (
    <button 
      onClick={onClick}
      className={`${bgClass} ${sizeClasses[size]} ${textColor} ${borderColor} ${borderThickness} ${className}`}
    >
      {children}
    </button>
  );
}

export default CircularButton;