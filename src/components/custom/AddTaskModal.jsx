import Modal from "../common/Modal.jsx";
import Card from "../common/Card.jsx";
import CircularButton from "../common/CircularButton.jsx";

function AddTaskModal ({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <Card
        bgColor="bg-slate-dark"
        bordered={false}
        flex="flex flex-col justify-center items-center"
        classNameCard="w-full"
      >
        <CircularButton
          bgClass="bg-[#3a3a4a]"
          textColor="text-white"
          className="font-bold absolute top-3 right-3"
        >
          X
        </CircularButton>
        
      </Card>        
    </Modal>
  );
}

export default AddTaskModal;