import { useState } from "react";
import Header from "../components/layouts/Header.jsx";
import MainLayout from "../components/layouts/MainLayout.jsx";
import SidePanel from "../components/layouts/SidePanel.jsx";
import Button from "../components/common/Button.jsx";
import { Link } from "react-router-dom";

function Home() {
  const [aboutIsHovered, setAboutIsHovered] = useState(false);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

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
          <h1 className="text-4xl font-bold">
            SnapAndDo
          </h1>
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
      </MainLayout>      
    </div>
  );
}

export default Home;