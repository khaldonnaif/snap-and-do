import Card from "../common/Card.jsx";

function TaskCard({children}) {
  return (
    <Card
      bgColor="bg-slate-dark"
      textColor="text-[#e3e3e3]"
      bordered={false}
      classNameCard="h-[100px]"
    >
      {children}
    </Card>
  );
}

export default TaskCard;