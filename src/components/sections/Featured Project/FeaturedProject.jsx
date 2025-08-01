import React, { useState } from "react";
import Badge from "./units/Badge.jsx";
import FPDescription from "./units/FPDescription";
import FPHeader from "./units/FPHeader";
import FileTab from "./units/FileTab";
import Toggle from "./units/Toggle";
import getFileContent from "./units/Code.jsx";
import ImageCarousel from "./units/ImageCarousel.jsx";

import githubIcon from "../assets/svgs/github.svg";

function FeaturedProject() {
  const [activeView, setActiveView] = useState("description");
  const [activeFile, setActiveFile] = useState("index");

  return (
    <main className="py-4 md:py-8 px-2 md:px-4 lg:px-0 bg-[#1e1e1e]">
      <div className="min-h-[70vh] lg:h-[70vh] w-full flex flex-col mb-8 md:mb-14">
        <div className="flex flex-col lg:flex-row">
          <div className="flex justify-center w-full lg:w-2/5 bg-[#1e1e1e] rounded-t-md lg:rounded-l-md lg:rounded-t-none text-white">
            <ImageCarousel />
          </div>

          <div className="w-full lg:w-3/5 bg-[#1e1e1e] rounded-b-md lg:rounded-r-md lg:rounded-b-none mt-4 md:mt-0">
            <FPHeader />
            <div>
              <div className="m-2 md:m-3 p-4 md:p-6 bg-[#2a2a2a] border border-[#fa8d21] font-mono md:h-[42vh] lg:h-[60vh]">
                <div className="text-left md:flex md:justify-between">
                  {activeView === "description" ? (
                    <h3 className="text-xs md:text-sm text-gray-500 font-mono">
                      Description
                    </h3>
                  ) : (
                    <>
                      <h3 className="text-xs mb-2 md:mb-0 md:text-sm text-gray-500 font-mono">
                        Code
                      </h3>

                      <div className="flex flex-col md:flex-row mb-2 md:mb-0">
                        <FileTab
                          file="index"
                          fileformat="js"
                          activeFile={activeFile}
                          setActiveFile={setActiveFile}
                          rounded="md:rounded-l-xl"
                        />

                        <FileTab
                          file="dashboard"
                          fileformat="html"
                          activeFile={activeFile}
                          setActiveFile={setActiveFile}
                        />

                        <FileTab
                          file="login"
                          fileformat="html"
                          activeFile={activeFile}
                          setActiveFile={setActiveFile}
                        />

                        <FileTab
                          file="register"
                          fileformat="html"
                          activeFile={activeFile}
                          setActiveFile={setActiveFile}
                        />

                        <FileTab
                          file="profile"
                          fileformat="ejs"
                          activeFile={activeFile}
                          setActiveFile={setActiveFile}
                        />

                        <FileTab
                          file="forum"
                          fileformat="html"
                          activeFile={activeFile}
                          setActiveFile={setActiveFile}
                          rounded="md:rounded-r-xl"
                        />
                      </div>
                    </>
                  )}

                  <Toggle
                    activeView={activeView}
                    setActiveView={setActiveView}
                  />
                </div>
                <div className="text-left overflow-y-auto">
                  {activeView === "description" ? (
                    <div className="pr-2 h-[30vh] lg:h-[47vh]">
                      <FPDescription />
                    </div>
                  ) : (
                    <div className="mt-2">
                      <pre className="text-white h-[35vh] lg:h-[47vh] overflow-y-auto text-xs md:text-sm">
                        {getFileContent(activeFile)}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-4">
          <Badge
            color="#ff7f00"
            border="#ff7f00"
            image={githubIcon}
            altname="Source Code"
            invert="invert"
            link="YOUR LINK"
            context="github"
            bold="bold"
          />
        </div>
      </div>
    </main>
  );
}

export default FeaturedProject;
