/**
 * A circular component that accepts CSS classes for styling
 * 
 * @param {string} size - Predefined size (e.g., "circle-sm", "circle-md", "circle-lg", "circle-xl", "circle-2xl")
 * @param {string} className - Additional CSS classes
 */
function Circle({
  size="md",
  className=""
}) {
  const circleSize = {
    sm: "circle-sm",
    md: "circle-md",
    lg: "circle-lg",
    xl: "circle-xl",
    "2xl": "circle-2xl"
  };

  return (
    <div className={`${circleSize[size]} ${className}`} />
  );
}

export default Circle;