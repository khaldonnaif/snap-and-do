import { use, useState } from "react";
import Modal from "../common/Modal.jsx";
import Card from "../common/Card.jsx";
import Button from "../common/Button.jsx";
import CircularButton from "../common/CircularButton.jsx";

function AddTaskModal ({ isOpen, onClose, AddTaskFunction }) {
  if (!isOpen) return null;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("none");

  const [titleMissing, setTitleMissing] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <Card
        className="card-dark flex flex-col items-start w-[90vw] h-[80vh] sm:w-[600px] sm:h-[500px] md:w-[700px] md:h-[450px] lg:w-[900px] lg:h-[500px] !overflow-y-auto !p-0 max-w-[90vw]"
        classNameChildren="h-full overflow-y-auto min-h-0 scrollbar-dark"
      >
        <div className="w-full flex flex-col p-4 sm:p-8">
          <CircularButton
            size="circ-md"
            className="bg-[#3a3a4a] text-white font-bold absolute top-3 right-3 hover:bg-[#484859] transition-all duration-150"
            onClick={onClose}
          >
            X
          </CircularButton>
          <h3 className="text-lg sm:text-xl md:text-2xl text-[#d1d5db] font-bold">Add New Task</h3>
          <div id="title-section" className="flex flex-col my-4 sm:my-8">
            <label htmlFor="title-input" className="text-xs sm:text-sm md:text-md text-[#98a0ab] mb-2">Task Title *</label> 
            <input 
              id="title-input" 
              maxLength={30}
              className="bg-midnight text-white border-none rounded-lg outline-none py-2 px-4  placeholder:text-[#98a0ab] text-sm" 
              placeholder="Enter task title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <div className="flex justify-between">
              <span className={`text-red-500 ${titleMissing ? "" : "invisible"} text-xs sm:text-sm mt-2`}>
                {titleMissing ? "(Please enter a title)" : ""}
              </span>
              <span className={"text-[#98a0ab] text-xs mt-2"}>{30-title.length}/30</span>
            </div>
          </div>
          <div id="description-section" className="flex flex-col my-4 sm:my-8">
            <label htmlFor="description-input" className="text-xs sm:text-sm md:text-md text-[#98a0ab] mb-2">Task Description (optional)</label> 
            <textarea 
              id="description-input" 
              maxLength={300} 
              className="bg-midnight text-white border-none rounded-lg outline-none py-2 px-4 placeholder:text-[#98a0ab] text-sm" 
              placeholder="Enter task descripiton..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>     
            <span className={"text-[#98a0ab] text-xs mt-2 ml-auto"}>{300-description.length}/300</span>  
          </div>
          <div className="mb-4 sm:mb-8">
            <label className="text-xs sm:text-sm md:text-md text-[#98a0ab] mb-2">Priority</label>
            <div className="flex flex-wrap justify-start items-center mt-2 gap-2 sm:gap-4">
              <Button
                className={`px-3 sm:px-4 py-2 rounded-lg transition-all duration-150 hover:scale-105 text-xs sm:text-sm ${
                  priority === "none"
                  ? "bg-purple-muted text-white hover:bg-[#7772db]"
                  : "bg-midnight text-[#98a0ab] hover:bg-[#7772db] hover:text-white"
                }`}
                onClick={() => setPriority("none")}
              >
                None
              </Button>
              <Button
                className={`px-3 sm:px-4 py-2 rounded-lg transition-all duration-150 hover:scale-105 text-xs sm:text-sm ${
                  priority === "low"
                  ? "bg-purple-muted text-white hover:bg-[#7772db]"
                  : "bg-midnight text-[#98a0ab] hover:bg-[#7772db] hover:text-white"
                }`}
                onClick={() => setPriority("low")}
              >
                Low
              </Button>
              <Button
                className={`px-3 sm:px-4 py-2 rounded-lg transition-all duration-150 hover:scale-105 text-xs sm:text-sm ${
                  priority === "medium"
                  ? "bg-purple-muted text-white hover:bg-[#7772db]"
                  : "bg-midnight text-[#98a0ab] hover:bg-[#7772db] hover:text-white"
                }`}
                onClick={() => setPriority("medium")}
              >
                Medium
              </Button>
              <Button
                className={`px-3 sm:px-4 py-2 rounded-lg transition-all duration-150 hover:scale-105 text-xs sm:text-sm ${
                  priority === "high"
                  ? "bg-purple-muted text-white hover:bg-[#7772db]"
                  : "bg-midnight text-[#98a0ab] hover:bg-[#7772db] hover:text-white"
                }`}
                onClick={() => setPriority("high")}
              >
                High
              </Button>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row justify-end items-center gap-2 sm:gap-4 mt-auto w-full">
            <Button
              className="px-3 sm:px-4 py-2 rounded-lg bg-midnight text-[#98a0ab] hover:bg-[#c4353f] hover:text-white transition-all duration-150 text-sm w-full sm:w-auto"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className="px-3 sm:px-4 py-2 rounded-lg bg-purple-muted text-white hover:bg-[#7772db] transition-all duration-150 text-sm w-full sm:w-auto"
              onClick={() => {
                if (title.trim()){
                  setTitleMissing(false);
                  AddTaskFunction(title, description, priority);
                  onClose();
                } else {
                  setTitleMissing(true);
                }
              }}
            >
              Add Task
            </Button>
          </div>
        </div>
      </Card>        
    </Modal>
  );
}

export default AddTaskModal;