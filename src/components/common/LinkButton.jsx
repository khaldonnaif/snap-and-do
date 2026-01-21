import { Link } from "react-router-dom";

/**
 * A link button component that accepts CSS classes for styling
 * 
 * @param {string} to - Route path (e.g., "/about")
 * @param {string} className - CSS classes (e.g., "btn-primary")
 */
function LinkButton({ children, to, className="" }) {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;