/**
 * A circular button component that accepts CSS classes for styling
 * 
 * @param {string} size - Predefined size (e.g., "circ-sm", "circ-md", "circ-lg", "circ-xl")
 * @param {function} onClick - Click handler
 * @param {string} className - Additional CSS classes
 */
function CircularButton({
  children, 
  size="circ-md", 
  onClick,
  className=""
}) {
  const sizeClasses = {
    "circ-sm": "circ-btn-sm",
    "circ-md": "circ-btn-md",
    "circ-lg": "circ-btn-lg",
    "circ-xl": "circ-btn-xl",
  }

  return (
    <button 
      onClick={onClick}
      className={`${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export default CircularButton;