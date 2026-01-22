/**
 * A footer component that accepts CSS classes for styling
 * 
 * @param {string} className - Additional CSS classes
 */
function Footer({
  children,
  className=""
}) {
  return(
    <div className={`footer ${className}`}>
      {children}
    </div>
  );
}

export default Footer;