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
        bgColor="bg-slate-dark"
        bordered={false}
        flex="flex flex-col items-start"
        classNameCard="w-[300px] h-[300px] sm:w-[490px] sm:h-[350px] md:w-[700px] md:h-[400px] lg:w-[900px] lg:h-[450px] !overflow-y-auto !p-0"
        classNameChildren="h-full overflow-y-auto min-h-0 scrollbar-dark"
      >
        <div className="w-full flex flex-col p-8">
          <CircularButton
            bgClass="bg-[#3a3a4a]"
            textColor="text-white"
            className="font-bold absolute top-3 right-3 hover:bg-[#484859] transition-all duration-150"
            onClick={onClose}
          >
            X
          </CircularButton>
          <h3 className="text-lg md:text-2xl text-[#d1d5db] font-bold">Add New Task</h3>
          <div id="title-section" className="flex flex-col my-8">
            <label htmlFor="title-input" className="text-sm md:text-md text-[#98a0ab] mb-2">Task Title *</label> 
            <input 
              id="title-input" 
              maxLength={30}
              className="bg-midnight text-white border-none rounded-lg outline-none py-2 px-4  placeholder:text-[#98a0ab]" 
              placeholder="Enter task title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <div className="flex justify-between">
              <span className={`text-red-500 ${titleMissing ? "" : "invisible"} text-sm mt-2`}>
                {titleMissing ? "(Please enter a title)" : ""}
              </span>
              <span className={"text-[#98a0ab] text-xs mt-2"}>{30-title.length}/30</span>
            </div>
          </div>
          <div id="description-section" className="flex flex-col my-8">
            <label htmlFor="description-input" className="text-sm md:text-md text-[#98a0ab] mb-2">Task Description (optional)</label> 
            <textarea 
              id="description-input" 
              maxLength={300} 
              className="bg-midnight text-white border-none rounded-lg outline-none py-2 px-4 placeholder:text-[#98a0ab]" 
              placeholder="Enter task descripiton..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>     
            <span className={"text-[#98a0ab] text-xs mt-2 ml-auto"}>{300-description.length}/300</span>  
          </div>
          <div className="mb-8">
            <label className="text-sm md:text-md text-[#98a0ab] mb-2">Priority</label>
            <div className="flex justify-start items-center mt-2 gap-4">
              <Button
                bgColor={`${
                  priority === "none"
                  ? "bg-purple-muted"
                  : "bg-midnight"
                }`}
                bordered={false}
                textColor={`${ 
                  priority === "none"
                  ? "text-white"
                  : "text-[#98a0ab]"
                }`}
                className="hover:bg-[#7772db] hover:scale-105 hover:text-white transition-all duration-150"
                onClick={() => setPriority("none")}
              >
                None
              </Button>
              <Button
                bgColor={`${
                  priority === "low"
                  ? "bg-purple-muted"
                  : "bg-midnight"
                }`}
                bordered={false}
                textColor={`${ 
                  priority === "low"
                  ? "text-white"
                  : "text-[#98a0ab]"
                }`}
                className="hover:bg-[#7772db] hover:scale-105 hover:text-white transition-all duration-150"
                onClick={() => setPriority("low")}
              >
                Low
              </Button>
              <Button
                bgColor={`${
                  priority === "medium"
                  ? "bg-purple-muted"
                  : "bg-midnight"
                }`}
                bordered={false}
                textColor={`${ 
                  priority === "medium"
                  ? "text-white"
                  : "text-[#98a0ab]"
                }`}
                className="hover:bg-[#7772db] hover:scale-105 hover:text-white transition-all duration-150"
                onClick={() => setPriority("medium")}
              >
                Medium
              </Button>
              <Button
                bgColor={`${
                  priority === "high"
                  ? "bg-purple-muted"
                  : "bg-midnight"
                }`}
                bordered={false}
                textColor={`${ 
                  priority === "high"
                  ? "text-white"
                  : "text-[#98a0ab]"
                }`}
                className="hover:bg-[#7772db] hover:scale-105 hover:text-white transition-all duration-150"
                onClick={() => setPriority("high")}
              >
                High
              </Button>
            </div>
          </div>
          <div className="flex justify-end items-center gap-4 mt-auto">
            <Button
              bgColor="bg-midnight"
              bordered={false}
              textColor="text-[#98a0ab]"
              className="hover:bg-[#c4353f] hover:text-white transition-all duration-150"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              bgColor="bg-purple-muted"
              bordered={false}
              textColor="text-white"
              className="hover:bg-[#7772db] transition-all duration-150"
              onClick={() => {
                if (title.trim()){
                  setTitleMissing(false);
                  AddTaskFunction(title, description, priority);
                  onClose();
                } else {
                  setTitleMissing(true);
                }
              }}>
              Add Task
            </Button>
          </div>
        </div>
      </Card>        
    </Modal>
  );
}

export default AddTaskModal;