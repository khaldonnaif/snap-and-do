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
      <div className="fixed inset z-50 flex justify-center items-center p-4">
        <div className="w-full max-w-2xl relative">
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;