import { useState, useEffect } from 'react';

/**
 * A side panel component that accepts CSS classes for styling
 * Mobile: Full-screen overlay that slides in from left
 * Desktop: Fixed left sidebar with variable width
 * 
 * @param {boolean} isOpen - Controls visibility and slide-in animation
 * @param {string} width - Tailwind width class (e.g., "w-64")
 * @param {function} onClose - Callback to close the panel
 * @param {string} className - Additional CSS classes
 */
function SidePanel({
  children,
  isOpen=false,
  width="w-64",
  onClose,
  className=""
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const widthMap = {
    "w-64": "16rem",
    "w-80": "20rem",
    "w-96": "24rem"
  };
  
  const panelWidth = widthMap[width] || "16rem";
  const displayWidth = isMobile ? '100%' : panelWidth;

  return(
    <div 
      className={`
        top-0 left-0 bottom-0 fixed
        ${isOpen ? "translate-x-0 pointer-events-auto" : "-translate-x-full pointer-events-none"}
        transition duration-300
        z-40
        md:z-auto
        flex flex-col
        ${className}
      `}
      style={{
        width: displayWidth
      }}
    >
      {onClose && (
        <div className="flex justify-end p-4 md:hidden">
          <button
            onClick={onClose}
            className="text-white bg-[#3a3a4a] hover:bg-[#484859] rounded-full w-10 h-10 flex items-center justify-center transition-all duration-150"
            aria-label="Close side panel"
          >
            ✕
          </button>
        </div>
      )}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

export default SidePanel;