import { useState } from "react";
import Header from "../components/layouts/Header.jsx";
import MainLayout from "../components/layouts/MainLayout.jsx";
import SidePanel from "../components/layouts/SidePanel.jsx";
import Button from "../components/common/Button.jsx";
import Circle from "../components/common/Circle.jsx";
import TaskCard from "../components/custom/TaskCard.jsx";
import { Link } from "react-router-dom";

function Home() {
  const [aboutIsHovered, setAboutIsHovered] = useState(false);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  const [todo, setTodo] = useState([]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);

  const sidePanelWidth = "w-64"

  return (
    <div className="relative flex flex-row">
      <SidePanel
        isOpen={sidePanelOpen}
        width={sidePanelWidth}
        bgClass="bg-[#2e2e3b] border-r border-[#424252]"
        bordered={false}
      >

      </SidePanel>
      <MainLayout
        sidePanelOpen={sidePanelOpen}
        sidePanelWidth={sidePanelWidth}
      >
        <img 
          onClick={() => setSidePanelOpen(!sidePanelOpen)}
          src=
          {sidePanelOpen ? "/assets/menu/arrows/light-gray-left-arrow-no-tail.svg" : "/assets/menu/arrows/light-gray-right-arrow-no-tail.svg"}
          className="size-12 absolute left-0 -translate-y-1/2 top-[50vh] cursor-pointer"
        />
        <Header bgClass="bg-slate-dark" bordered={false}>
          <Link to={"/"}>
            <h1 className="text-4xl font-bold">
              SnapAndDo
            </h1>          
          </Link>
          <div className="flex justify-center items-center gap-12">
            <Button
              bgColor="bg-purple-muted"
              bordered={false}
              className="rounded-3xl hover:scale-105 transition duration-75"
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
                  className="size-8"
                />
              </Link>
            </div>
          </div>
        </Header>
        <div id="body-container" className="px-12">
          <div id="column-section" className="flex gap-6 px-16 pt-12">
            <div className="flex-1 flex flex-col items-center">
              <div id="column-header-1" className="flex justify-center">
                <Circle  
                  bgColor="bg-[#33b09b]"
                  size="sm"
                  bordered={false}
                />
                <h3 className="text-[#606266] font-atkinson -mt-[2px] ml-6">
                  TODO ({todo.length})
                </h3>                
              </div>
              <TaskCard>
                test
              </TaskCard>
            </div>
            <div className="flex-1">
              <div id="column-header-2" className="flex justify-center">
                <Circle  
                  bgColor="bg-[#654c91]"
                  size="sm"
                  bordered={false}
                />
                <h3 className="text-[#606266] font-atkinson -mt-[2px] ml-6">
                  DOING ({doing.length})
                </h3>                
              </div>
            </div>
            <div className="flex-1">
              <div id="column-header-3" className="flex justify-center">
                <Circle  
                  bgColor="bg-[#5bb377]"
                  size="sm"
                  bordered={false}
                />
                <h3 className="text-[#606266] font-atkinson -mt-[2px] ml-6">
                  DONE ({done.length})
                </h3>                
              </div>
            </div>
          </div>
        </div>
      </MainLayout>      
    </div>
  );
}

export default Home;