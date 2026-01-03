function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex justify-center items-center p-4 pointer-events-none">
        <div className="w-full max-w-[600px] md:max-w-[700px] lg:max-w-[900px] relative pointer-events-auto">
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;