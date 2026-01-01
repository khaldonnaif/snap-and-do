/**
 * @param {string} classNameCard - Custom styling of the card that isn't accounted for (e.g, animations)
 * @param {string} classNameChildren - Custom styling of the card that isn't accounted for (e.g, custom backgrounds)
 * @param {string} flex - Full flex build (e.g., flex flex-col justify-evenly items-center)
 * @param {string} bgColor - Choose a valid tailwind background color class (e.g., bg-black)
 * @param {string} textColor - Choose a valid tailwind text color class (e.g., text-white) 
 * @param {string} borderColor - Choose a valid tailwind border color class (e.g., border-black)
 * @param {string} borderThickness - Choose a valid tailwind border-size class (e.g., border-2)
 * @param {string} maxWidth - Choose a valid tailwind max-width class (e.g., max-w-4xl)
 * @param {string} minHeight - Choose a valid tailwind min-height class (e.g., min-h-[300px])
 * @param {string} borderRadius - Choose a valid tailwind border-radius class (e.g., rounded-lg)
 * @param {Object} orbsDiagonalTRBL - Optional configuration for decorative background orbs (top right, bottom left). Pass an object with topColor, bottomColor, topPosition, bottomPosition, and size properties.
 * @param {Object} orbsDiagonalTLBR - Optional configuration for decorative background orbs (top left, bottom right). Pass an object with topColor, bottomColor, topPosition, bottomPosition, and size properties.
 * @param {Object} orbsCenter - Optional configuration for decorative background orbs (center). Pass an object with color, position, and size properties.
 */
function Card({
  children, 
  flex="flex flex-col justify-evenly items-center",
  maxWidth="max-w-4xl", 
  minHeight="min-h-[300px]", 
  textColor="text-black", 
  bgColor="bg-white", 
  borderColor="border-black", 
  borderThickness="border-2", 
  borderRadius="rounded-lg",
  orbsDiagonalTRBL,
  orbsDiagonalTLBR,
  orbsCenter,
  classNameCard="",
  classNameChildren=""
  }) {

  return (
    <div className={`${flex} relative overflow-hidden ${bgColor} w-full m-12 ${maxWidth} ${minHeight} ${borderThickness} ${borderColor} ${borderRadius} p-8 ${classNameCard}`}>

      {/* Background decorations */}
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
      <div className={`${textColor} z-10 w-full flex-1 ${classNameChildren}`}>
        {children}
      </div>
    </div>
  );
}

export default Card;