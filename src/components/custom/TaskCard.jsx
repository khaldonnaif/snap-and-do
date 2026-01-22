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
      className="card-dark flex flex-row items-start !p-4 !py-2 !pl-6 m-2 relative"
      classNameChildren="h-[60px] w-full"
    >
      <div className={`absolute left-0 h-[100%] top-1/2 -translate-y-1/2 w-2 rounded-2xl ${priorityBgColors[task.priority]}`}></div>
      <Button className="bg-transparent border border-[#606266] rounded-lg px-2 py-1 text-white">asd</Button>
      <div className="flex flex-col justify-between gap-2 w-full">
        <div className="flex justify-between">
          <p className="inline-block text-[#e3e3e3]">{task.title}</p>
          <Button className="bg-transparent hover:bg-[#1e1e26] border border-[#606266] rounded-lg px-2 py-1 text-xs text-white">Move</Button> 
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <p className="text-gray-600 text-sm inline"><span className={priorityTextColors[task.priority]}>{task.priority}</span></p>
            <p className="text-gray-600 text-sm inline">{new Date(task.createdAt).toLocaleDateString()}</p>          
          </div>
          <Button className="bg-transparent rounded-full w-8 h-8 p-1 hover:bg-[#ee5858]/30 flex-shrink-0"><img src="/assets/pale-red-trash.svg" className="" /></Button>
        </div>
      </div>
    </Card>
  );
}

export default TaskCard;