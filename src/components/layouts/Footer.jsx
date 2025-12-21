/**
 * @param {string} className - Custom styling that isn't accounted for (e.g, animations)
 * @param {string} height - A class that defines the height (e.g., h-20)
 * @param {string} bgClass - Tailwind background utilities, solid or gradient (e.g., "bg-black" or "bg-gradient-to-t from-black to-white")
 * @param {string} bgColor - A class that determines the text's color (e.g., text-white)
 * @param {string} borderThickness - Choose a valid tailwind border-size class (e.g., border-2)
 * @param {string} borderColor - Choose a valid tailwind border color class (e.g., border-white)
 * @param {boolean} bordered - Decides whether or not to show the borders at all (e.g., true)
 */
function Footer({
  children,
  className="",
  height="h-20",
  bgClass="bg-black",
  textColor="text-white",
  borderThickness="border-2",
  borderColor="border-white",
  bordered=true
}) {
  return(
    <div className={`
      w-full 
      ${height}
      ${className}
      ${bgClass}
      ${textColor}
      ${bordered ? `${borderThickness} ${borderColor}` : ""}
      `}>
      {children}
    </div>
  );
}

export default Footer;