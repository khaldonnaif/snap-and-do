import { use, useState } from "react";
import Modal from "../common/Modal.jsx";
import Card from "../common/Card.jsx";
import Button from "../common/Button.jsx";
import CircularButton from "../common/CircularButton.jsx";

function ExpandedTaskModal({ isOpen, onClose, task, onEditSubmit }) {
  if (!isOpen || !task) return null;

  const [editMode, setEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description || "");

  const priorityColors = {
    none: "text-gray-600",
    low: "text-blue-500",
    medium: "text-yellow-500",
    high: "text-red-500"
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <Card
        className="card-dark flex flex-col items-start w-[90vw] sm:w-[600px] md:w-[700px] lg:w-[900px] !overflow-y-auto !p-0 max-w-[90vw]"
        classNameChildren="w-full min-h-0 scrollbar-dark"
      >
        <div className="w-full flex flex-col p-4 sm:p-8">
          <CircularButton
            size="circ-md"
            className="bg-[#3a3a4a] text-white font-bold absolute top-3 right-3 hover:bg-[#484859] transition-all duration-150"
            onClick={onClose}
          >
            X
          </CircularButton>
          
          {editMode ? (
            <div className="flex flex-col w-full">
              <label className="text-xs sm:text-sm md:text-md text-[#98a0ab] mb-3 font-semibold">Title</label>
              <input 
                className="text-[#e3e3e3] text-sm sm:text-base leading-relaxed bg-midnight rounded-lg p-4 w-full" 
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>
          ) : (
            <h2 className="text-xl sm:text-2xl md:text-3xl text-[#d1d5db] font-bold mb-6 break-words">{task.title}</h2>            
          )}
          
          <div id="description-section" className="flex flex-col my-4 sm:my-6 w-full">
            <label className="text-xs sm:text-sm md:text-md text-[#98a0ab] mb-3 font-semibold">Description</label>
            {editMode ? (
              <textarea 
                className="text-[#e3e3e3] text-sm sm:text-base leading-relaxed bg-midnight rounded-lg p-4 w-full min-h-[100px] resize-none" 
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
            ) : (
              <p className="text-[#e3e3e3] text-sm sm:text-base leading-relaxed bg-midnight rounded-lg p-4 break-words">
                {task.description || "(No description provided)"}
              </p>              
            )}
          </div>

          <div id="metadata-section" className="flex flex-col my-4 sm:my-6 w-full">
            <label className="text-xs sm:text-sm md:text-md text-[#98a0ab] mb-3 font-semibold">Details</label>
            <div className="flex flex-col gap-2 text-xs sm:text-sm md:text-base">
              <div className="flex justify-between">
                <span className="text-[#98a0ab]">Priority:</span>
                <span className={priorityColors[task.priority]}>{task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#98a0ab]">Status:</span>
                <span className="text-[#e3e3e3]">{task.status.charAt(0).toUpperCase() + task.status.slice(1)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#98a0ab]">Created:</span>
                <span className="text-[#e3e3e3]">{new Date(task.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end items-center gap-2 sm:gap-4 mt-auto w-full">
            <Button
              className="px-3 sm:px-4 py-2 rounded-lg bg-midnight text-[#98a0ab] hover:bg-[#c4353f] hover:text-white transition-all duration-150 text-sm w-full sm:w-auto"
              onClick={onClose}
            >
              Close
            </Button>
            {editMode ? (
              <Button
                className="px-3 sm:px-4 py-2 rounded-lg bg-purple-muted text-white hover:bg-[#7772db] transition-all duration-150 text-sm w-full sm:w-auto"
                onClick={() => {onEditSubmit(task.id, editTitle, editDescription); onClose()}}
              >
                Submit
              </Button>    
            ) : (
              <Button
                className="px-3 sm:px-4 py-2 rounded-lg bg-purple-muted text-white hover:bg-[#7772db] transition-all duration-150 text-sm w-full sm:w-auto"
                onClick={() => setEditMode(true)}
              >
                Edit
              </Button>              
            )}
          </div>
        </div>
      </Card>        
    </Modal>
  );
}

export default ExpandedTaskModal;
