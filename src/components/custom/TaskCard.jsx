import { useState } from "react";
import Card from "../common/Card.jsx";
import Button from "../common/Button.jsx";

function TaskCard({ task, onMoveTask, onDeleteTask, onExpand }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const priorityBgColors = {
    none: "bg-gray-600",
    low: "bg-blue-500",
    medium: "bg-yellow-500",
    high: "bg-red-500"
  };
  const priorityTextColors = {
    none: "text-gray-600",
    low: "text-blue-500",
    medium: "text-yellow-500",
    high: "text-red-500"
  };

  const moveOptions = ["todo", "doing", "done"].filter(status => status !== task.status);

  return (
    <div className="relative w-full m-2">
      <Card
        className="card-dark flex flex-col w-full relative p-0"
        classNameChildren="flex flex-col"
      >
        <div className={`absolute left-0 h-[100%] top-0 w-2 rounded-2xl ${priorityBgColors[task.priority]}`}></div>
        <div 
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-3 sm:px-4 py-2 bg-[#2a2a35] cursor-pointer gap-2"
          onClick={onExpand}  
        >
          <p className="text-[#e3e3e3] text-xs sm:text-sm font-medium line-clamp-2">{task.title}</p>
          <div className="flex gap-2 items-center w-full sm:w-auto">
            <Button 
              className="bg-[#333340] hover:bg-[#3a3a42] rounded px-2 py-1 text-xs text-white transition-colors flex-1 sm:flex-none"
              onClick={(e) => {e.stopPropagation(); setDropdownOpen(!dropdownOpen)}}
            >
              Move
            </Button>
            <Button 
              className="bg-transparent rounded-full w-5 h-5 p-0 hover:bg-[#ee5858]/30 flex-shrink-0 transition-colors flex items-center justify-center"
              onClick={(e) => {e.stopPropagation(); onDeleteTask(task.id)}}
            >
              <img src="/assets/pale-red-trash.svg" className="w-3 h-3" alt="delete" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-3 sm:px-4 py-2 text-xs gap-2">
          <div className="flex gap-3 items-center">
            <span className={priorityTextColors[task.priority]}>{task.priority}</span>
            <span className="text-gray-600">{new Date(task.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </Card>
      {dropdownOpen && (
        <div className="absolute top-14 right-2 bg-[#2a2a35] border border-[#606266] rounded shadow-lg z-20 min-w-32">
          {moveOptions.map(status => (
            <button
              key={status}
              onClick={() => {
                onMoveTask(task.id, status);
                setDropdownOpen(false);
              }}
              className="block w-full text-left px-3 py-2 hover:bg-[#333340] text-xs text-white transition-colors first:rounded-t last:rounded-b"
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskCard;