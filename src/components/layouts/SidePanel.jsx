/**
 * A side panel component that accepts CSS classes for styling
 * 
 * @param {boolean} isOpen - Controls visibility and slide-in animation
 * @param {string} width - Tailwind width class (e.g., "w-64")
 * @param {string} className - Additional CSS classes
 */
function SidePanel({
  children,
  isOpen=false,
  width="w-64",
  className=""
}) {
  return(
    <div className={`
      ${width}
      top-0 left-0 bottom-0 fixed
      ${isOpen ? "translate-x-0 pointer-events-auto" : "-translate-x-full pointer-events-none"}
      transition duration-300
      ${className}
    `}>
      {children}
    </div>
  );
}

export default SidePanel;