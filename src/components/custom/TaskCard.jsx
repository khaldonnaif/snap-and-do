import Card from "../common/Card.jsx";

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
      bgColor="bg-slate-dark"
      textColor="text-[#e3e3e3]"
      flex="flex flex-col justify-center items-start"
      bordered={false}
      classNameCard="!p-4 !py-2 !pl-6 m-2"
      classNameChildren="h-[60px] !m-2"
    >
      <div className={`absolute left-4 h-[80%] top-1/2 -translate-y-1/2 w-2 rounded-2xl ${priorityBgColors[task.priority]}`}></div>
      <p className="inline-block">{task.title}</p>
      <div className="w-full flex justify-between">
        <p className="text-gray-600">Priority: <span className={priorityTextColors[task.priority]}>{task.priority}</span></p>
        <p className="text-gray-600">{new Date(task.createdAt).toLocaleDateString()}</p>
      </div>
    </Card>
  );
}

export default TaskCard;