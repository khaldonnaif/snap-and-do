import {useState } from "react";
import {v4 as uuidv4} from "uuid";
import Header from "../components/layouts/Header.jsx";
import MainLayout from "../components/layouts/MainLayout.jsx";
import SidePanel from "../components/layouts/SidePanel.jsx";
import Button from "../components/common/Button.jsx";
import Circle from "../components/common/Circle.jsx";
import TaskCard from "../components/custom/TaskCard.jsx";
import AddTaskModal from "../components/custom/AddTaskModal.jsx";
import ExpandedTaskModal from "../components/custom/ExpandedTaskModal.jsx";
import { Link } from "react-router-dom";

function Home() {
  const [aboutIsHovered, setAboutIsHovered] = useState(false);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  //Task states

  const [todo, setTodo] = useState([]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);

  //Task functions

  function addTask(title, description, priority) {
    //Validate priority
    const validPriorities = ["none", "low", "medium", "high"];

    if (!validPriorities.includes(priority)) {
      console.error(`Invalid priority: ${priority}. Must be one of the following: ${validPriorities.join(", ")}`);
      return;
    }

    //Add new task
    const taskObject = {
      id: uuidv4(),
      title,
      description,
      status: "todo",
      createdAt: new Date(),
      priority: priority
    }

    setTodo((prev) => [
      ...prev,
      taskObject
    ]);
  }

  function moveTask(id, newStatus) {
    //validate newStatus
    const validStatuses = ["todo", "doing", "done"];

    if (!validStatuses.includes(newStatus)) {
      console.error(`Invalid chosen status: ${newStatus}. Must be one of the following: ${validStatuses.join(", ")}`);
      return;
    }

    //Get task by id
    const allTasks =[...todo, ...doing, ...done];
    const targetTask = allTasks.find(obj => obj.id === id);

    if (!targetTask) {
      console.error(`Cannot find task with the following id: ${id}`);
      return;
    }

    const updatedTask = {
      ...targetTask,
      status: newStatus
    };

    //Update all possible states
    setTodo(prev => newStatus === "todo"
      ? [updatedTask, ...prev.filter(task => task.id !== id)]
      : prev.filter(task => task.id !== id)
    );

    setDoing(prev => newStatus === "doing"
      ? [updatedTask, ...prev.filter(task => task.id !== id)]
      : prev.filter(task => task.id !== id)
    );

    setDone(prev => newStatus === "done"
      ? [updatedTask, ...prev.filter(task => task.id !== id)]
      : prev.filter(task => task.id !== id)
    );
  }

  function deleteTask(id) {
    //Get task by id
    const allTasks =[...todo, ...doing, ...done];
    const targetTask = allTasks.find(obj => obj.id === id);

    if (!targetTask) {
      console.error(`Cannot find task with the following id: ${id}`);
      return;
    }

    //Delete from all possible states
    setTodo(prev => prev.filter(task => task.id !== id));
    setDoing(prev => prev.filter(task => task.id !== id));
    setDone(prev => prev.filter(task => task.id !== id));
  }

  function editTask(id, newTitle, newDesc) {
    const allTasks = [...todo, ...doing, ...done];
    const targetTask = allTasks.find(task => task.id === id);

    if (!targetTask) {
      console.error(`Cannot find task with the following id: ${id}`);
      return;
    }

    const updatedTask = {
      ...targetTask,
      title: newTitle,
      description: newDesc
    };

    if (targetTask.status === "todo") {
      setTodo(prev => [
        updatedTask,
        ...prev.filter(task => task.id !== id),
      ])
    } else if (targetTask.status === "doing") {
      setDoing(prev => [
        updatedTask,
        ...prev.filter(task => task.id !== id),
      ])
    } else if (targetTask.status === "done") {
      setDone(prev => [
        updatedTask,
        ...prev.filter(task => task.id !== id),
      ])
    }
  }

  function expandTask(id) {
    const allTasks = [...todo, ...doing, ...done];
    const targetTask = allTasks.find(task => task.id === id);
    if (targetTask) setSelectedTask(targetTask);
  }

  //Return Homepage
  const sidePanelWidth = "w-64"

  return (
    <div className="relative flex flex-row">
      <SidePanel
        isOpen={sidePanelOpen}
        width={sidePanelWidth}
        onClose={() => setSidePanelOpen(false)}
        className="bg-[#2e2e3b] border-r border-[#424252]"
      >

      </SidePanel>
      <MainLayout
        sidePanelOpen={sidePanelOpen}
        sidePanelWidth={sidePanelWidth}
      >
        <img 
          onClick={() => setSidePanelOpen(!sidePanelOpen)}
          src={sidePanelOpen ? "/assets/menu/arrows/light-gray-left-arrow-no-tail.svg" : "/assets/menu/arrows/light-gray-right-arrow-no-tail.svg"}
          className="size-8 sm:size-12 absolute left-2 sm:left-0 -translate-y-1/2 top-[50vh] cursor-pointer z-30 md:z-auto"
        />
        <Header className="bg-slate-dark">
          <Link to={"/"}>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              SnapAndDo
            </h1>          
          </Link>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-12 w-full sm:w-auto">
            <Button
              className="bg-purple-muted text-white rounded-3xl hover:scale-105 transition duration-75 py-2 px-3 sm:px-4 font-bold text-sm sm:text-base w-full sm:w-auto"
              onClick={() => setIsAddTaskModalOpen(true)}
            >
              + Add New Task
            </Button>
            <div
              onMouseEnter={() => setAboutIsHovered(true)}
              onMouseLeave={() => setAboutIsHovered(false)}
            >
              <Link to="/About">
                <img 
                  src={aboutIsHovered ? "/assets/about/exclamation-point/light-gray-exclamation-point.svg" : "/assets/about/exclamation-point/gray-exclamation-point.svg"} 
                  className="size-6 sm:size-8"
                />
              </Link>
            </div>
          </div>
        </Header>
        <div id="body-container" className="px-4 sm:px-8 lg:px-12">
          <div id="column-section" className="flex flex-col md:flex-row gap-4 md:gap-6 px-0 md:px-16 pt-8 md:pt-12">
            <div className="flex-1 flex flex-col items-center">
              <div id="column-header-1" className="flex justify-center">
                <Circle  
                  size="sm"
                  className="bg-[#33b09b]"
                />
                <h3 className="text-[#606266] font-atkinson -mt-[2px] ml-6 text-sm sm:text-base">
                  TODO ({todo.length})
                </h3>                
              </div>
              {todo.map(task => (
                <TaskCard 
                  task={task}
                  key={task.id}
                  onMoveTask={moveTask}
                  onDeleteTask={deleteTask}
                  onExpand={() => setSelectedTask(task)}
                />
              ))}
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div id="column-header-2" className="flex justify-center">
                <Circle  
                  size="sm"
                  className="bg-[#654c91]"
                />
                <h3 className="text-[#606266] font-atkinson -mt-[2px] ml-6 text-sm sm:text-base">
                  DOING ({doing.length})
                </h3>                
              </div>
              {doing.map(task => (
                <TaskCard 
                  task={task}
                  key={task.id}
                  onMoveTask={moveTask}
                  onDeleteTask={deleteTask}
                  onExpand={() => setSelectedTask(task)}
                />
              ))}
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div id="column-header-3" className="flex justify-center">
                <Circle  
                  size="sm"
                  className="bg-[#5bb377]"
                />
                <h3 className="text-[#606266] font-atkinson -mt-[2px] ml-6 text-sm sm:text-base">
                  DONE ({done.length})
                </h3>                
              </div>
              {done.map(task => (
                <TaskCard 
                  task={task}
                  key={task.id}
                  onMoveTask={moveTask}
                  onDeleteTask={deleteTask}
                  onExpand={() => setSelectedTask(task)}
                />
              ))}
            </div>
          </div>
        </div>
      </MainLayout>
      <AddTaskModal 
        isOpen={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
        AddTaskFunction={addTask}
      />
      <ExpandedTaskModal 
        isOpen={selectedTask}
        onClose={() => setSelectedTask(null)}
        task={selectedTask}
        onEditSubmit={editTask}
      />
    </div>
  );
}

export default Home;