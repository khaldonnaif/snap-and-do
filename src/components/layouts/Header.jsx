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
    <div className={`header flex-col sm:flex-row gap-4 sm:gap-0 ${className}`}>
      {children}
    </div>
  );
}

export default Header;