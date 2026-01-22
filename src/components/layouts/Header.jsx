/**
 * A header component that accepts CSS classes for styling
 * 
 * @param {string} className - Additional CSS classes
 */
function Header({
  children,
  className=""
}) {
  return (
    <div className={`header ${className}`}>
      {children}
    </div>
  );
}

export default Header;