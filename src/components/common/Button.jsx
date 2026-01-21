/**
 * A simple button component that accepts CSS classes for styling
 * 
 * @param {string} className - CSS classes (e.g., "btn-primary", "btn-secondary")
 * @param {function} onClick - Click handler
 * @param {string} type - Button type (e.g., "button", "submit")
 */
function Button ({
  children, 
  className="",
  onClick, 
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}

export default Button;