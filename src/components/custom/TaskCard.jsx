import Card from "../common/Card.jsx";
import Button from "../common/Button.jsx";

function TaskCard({ task }) {
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

  return (
    <Card
      className="card-dark flex flex-col w-full relative p-0 m-2"
      classNameChildren="flex flex-col"
    >
      <div className={`absolute left-0 h-[100%] top-0 w-2 rounded-2xl ${priorityBgColors[task.priority]}`}></div>
      <div className="flex justify-between items-center px-4 py-2 bg-[#2a2a35]">
        <p className="text-[#e3e3e3] text-sm font-medium">{task.title}</p>
        <div className="flex gap-2 items-center">
          <Button className="bg-[#333340] hover:bg-[#3a3a42] rounded px-2 py-1 text-xs text-white transition-colors">Move</Button>
          <Button className="bg-transparent rounded-full w-5 h-5 p-0 hover:bg-[#ee5858]/30 flex-shrink-0 transition-colors flex items-center justify-center">
            <img src="/assets/pale-red-trash.svg" className="w-3 h-3" alt="delete" />
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 py-2 text-xs">
        <div className="flex gap-3 items-center">
          <span className={priorityTextColors[task.priority]}>{task.priority}</span>
          <span className="text-gray-600">{new Date(task.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </Card>
  );
}

export default TaskCard;