/**
 * @param {string} className - Custom styling that isn't accounted for (e.g, animations)
 * @param {boolean} sidePanelOpen - A state boolean
 * @param {string} sidePanelWidth - Size of the side panel. Used to know the margin and width of the main layout
 */
function MainLayout({
  sidePanelOpen = false,
  sidePanelWidth = "w-64",
  children,
  className=""
}) {

  const widthMap = {
    "w-64": {margin: "md:ml-64", width: "md:w-[calc(100%-16rem)]"},
    "w-80": {margin: "md:ml-80", width: "md:w-[calc(100%-20rem)]"},
    "w-96": {margin: "md:ml-96", width: "md:w-[calc(100%-24rem)]"}
  };

  const { margin, width } = sidePanelOpen
    ? widthMap[sidePanelWidth]
    : { margin: "ml-0", width: "w-full" };

  return (
    <div className={`
      relative
      min-h-screen
      w-full
      ${margin}
      ${width}
      transition-all duration-300
      ${className}
    `}>
      {children}
    </div>
  );
}

export default MainLayout;