/**
 * A flexible card component that accepts CSS classes for styling
 * 
 * @param {string} className - CSS classes for outer container (e.g., "card-dark")
 * @param {string} classNameChildren - CSS classes for children container (e.g., "p-4 flex flex-col")
 * @param {Object} orbsDiagonalTRBL - Optional config for decorative orbs (top right, bottom left)
 *   @property {string} topColor - Tailwind color class for top orb (e.g., "bg-purple-500/20")
 *   @property {string} bottomColor - Tailwind color class for bottom orb (e.g., "bg-blue-500/20")
 *   @property {string} topPosition - Tailwind position classes (e.g., "top-0 right-0")
 *   @property {string} bottomPosition - Tailwind position classes (e.g., "bottom-0 left-0")
 *   @property {string} size - Tailwind size classes (e.g., "w-64 h-64")
 * @param {Object} orbsDiagonalTLBR - Optional config for decorative orbs (top left, bottom right)
 *   @property {string} topColor - Tailwind color class for top orb
 *   @property {string} bottomColor - Tailwind color class for bottom orb
 *   @property {string} topPosition - Tailwind position classes (e.g., "top-0 left-0")
 *   @property {string} bottomPosition - Tailwind position classes (e.g., "bottom-0 right-0")
 *   @property {string} size - Tailwind size classes
 * @param {Object} orbsCenter - Optional config for decorative orbs (center)
 *   @property {string} topColor - Tailwind color class for orb
 *   @property {string} position - Tailwind position classes (e.g., "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2")
 *   @property {string} size - Tailwind size classes
 */
function Card({
  children, 
  className="",
  classNameChildren="",
  orbsDiagonalTRBL,
  orbsDiagonalTLBR,
  orbsCenter,
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {orbsDiagonalTRBL && (
        <>
          <div className={`absolute ${orbsDiagonalTRBL.topPosition || "top-0 right-0"} ${orbsDiagonalTRBL.size || "w-64 h-64"} ${orbsDiagonalTRBL.topColor || "bg-white/10"} rounded-full blur-3xl`}></div>
          <div className={`absolute ${orbsDiagonalTRBL.bottomPosition || "bottom-0 left-0"} ${orbsDiagonalTRBL.size || "w-64 h-64"} ${orbsDiagonalTRBL.bottomColor || "bg-white/10"} rounded-full blur-3xl`}></div>
        </>
      )}
      {orbsDiagonalTLBR && (
        <>
          <div className={`absolute ${orbsDiagonalTLBR.topPosition || "top-0 left-0"} ${orbsDiagonalTLBR.size || "w-64 h-64"} ${orbsDiagonalTLBR.topColor || "bg-white/10"} rounded-full blur-3xl`}></div>
          <div className={`absolute ${orbsDiagonalTLBR.bottomPosition || "bottom-0 right-0"} ${orbsDiagonalTLBR.size || "w-64 h-64"} ${orbsDiagonalTLBR.bottomColor || "bg-white/10"} rounded-full blur-3xl`}></div>
        </>
      )}
      {orbsCenter && (
        <>
          <div className={`absolute ${orbsCenter.position || "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"} ${orbsCenter.size || "w-64 h-64"} ${orbsCenter.topColor || "bg-white/10"} rounded-full blur-3xl`}></div>
        </>
      )}
      
      <div className={`relative z-10 w-full ${classNameChildren}`}>
        {children}
      </div>
    </div>
  );
}

export default Card;