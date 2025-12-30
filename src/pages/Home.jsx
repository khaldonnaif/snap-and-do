import { useState } from "react";
import Header from "../components/layouts/Header.jsx";
import MainLayout from "../components/layouts/MainLayout.jsx";
import SidePanel from "../components/layouts/SidePanel.jsx";
import Button from "../components/common/Button.jsx";
import { Link } from "react-router-dom";

function Home() {
  const [aboutIsHovered, setAboutIsHovered] = useState(false);

  return (
    <div className="relative">
      <SidePanel></SidePanel>
      <MainLayout>
        <Header bgClass="bg-slate-dark" bordered={false}>
          <h1 className="text-4xl font-bold">
            SnapAndDo
          </h1>
          <div className="flex justify-center items-center gap-12">
            <Button
              bgColor="bg-purple-muted"
              bordered={false}
              className="rounded-3xl"
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