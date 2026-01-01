/**
 * @param {string} className - Custom styling that isn't accounted for (e.g, animations)
 * @param {string} bgColor - Choose a valid tailwind background color class (e.g., bg-black)
 * @param {"sm" | "md" | "lg" | "xl" | "2xl"} size - Sets static size
 * @param {string} borderThickness - Choose a valid tailwind border-size class (e.g., border-2)
 * @param {string} borderColor - Choose a valid tailwind border color class (e.g., border-white)
 * @param {boolean} bordered - Decides whether or not to show the borders at all (e.g., true)
 */
function Circle({
  bgColor="bg-white",
  size="md",
  borderThickness="border-2",
  borderColor="border-black",
  bordered=true,
  className=""
}) {
  const circleSize = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
    "2xl": "w-32 h-32"
  };

  return (
    <div className={`
      rounded-full
      ${bgColor} 
      ${circleSize[size]} 
      ${bordered ? `${borderThickness} ${borderColor}` : ""}
      ${className}
      `} />
  );
}

export default Circle;