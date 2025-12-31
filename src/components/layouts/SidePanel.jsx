/**
 * @param {string} className - Custom styling that isn't accounted for (e.g, animations)
 * @param {boolean} isOpen - A state indicating whether or not this component should open
 * @param {string} width - The width of the side panel 
 * @param {string} bgClass - Tailwind background utilities, solid or gradient (e.g., "bg-black" or "bg-gradient-to-t from-black to-white")
 * @param {string} textColor - A class that determines the text's color (e.g., text-white)
 * @param {string} borderThickness - Choose a valid tailwind border-size class (e.g., border-2)
 * @param {string} borderColor - Choose a valid tailwind border color class (e.g., border-white)
 * @param {boolean} bordered - Decides whether or not to show the borders at all (e.g., true)
 */
function SidePanel({
  children,
  isOpen=false,
  width="w-64",
  bgClass="bg-black",
  textColor="text-white",
  borderThickness="border-2",
  borderColor="border-white",
  bordered=true,
  className=""
}) {
  return(
    <div className={`
      ${width}
      ${bgClass}
      ${textColor}
      ${bordered ? `${borderThickness} ${borderColor}` : ""}
      top-0 left-0 bottom-0 fixed
      ${isOpen ? "translate-x-0 pointer-events-auto" : "-translate-x-full pointer-events-none"}
      transition duration-300
      ${className}
    `}>
    </div>
  );
}

export default SidePanel;