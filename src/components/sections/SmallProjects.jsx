import React from "react";
import Card from "./units/Card";

import powershellIcon from "../assets/svgs/powershell.svg";
import sqlIcon from "../assets/svgs/sql.svg";
import chartIcon from "../assets/svgs/chart.svg";
import azureIcon from "../assets/svgs/azure.svg";
import migrationIcon from "../assets/svgs/migration.svg";
import jsIcon from "../assets/svgs/js.svg";
import reactIcon from "../assets/svgs/react.svg";
import cssIcon from "../assets/svgs/css.svg";

function SmallProjects() {
  return (
    <div className="bg-[#1e1e1e] md:mt-8 px-4 md:px-8 lg:px-12">
      <h2 className="text-white font-bold font-mono text-3xl">
        Other Projects
      </h2>
      <div className="flex flex-col items-center lg:flex-row text-sm md:text-base">
        <Card
          className="w-full lg:w-1/3"
          title="Project 1"
          techBadges={[
            {
              name: "Powershell",
              color: "#5391FE",
              svg: powershellIcon,
            },
            {
              name: "SQLServer",
              color: "#CC2927",
              svg: sqlIcon,
            },
            {
              name: "DataViz",
              color: "#FF6B35",
              svg: chartIcon,
            },
          ]}
          description1="Description 1 Line 1"
          description2="Description 1 Line 2"
          link="PROJECT 1 GITHUB LINK"
        />
        <Card
          className="w-full lg:w-1/3"
          title="Project 2"
          techBadges={[
            {
              name: "PowerShell",
              color: "#5391FE",
              svg: powershellIcon,
            },
            {
              name: "Azure",
              color: "#0078D4",
              svg: azureIcon,
            },
            {
              name: "Migration",
              color: "#00BCF2",
              svg: migrationIcon,
            },
          ]}
          description1="Description 2 Line 1"
          description2="Description 1 Line 2"
          link="PROJECT 2 GITHUB LINK"
        />

        <Card
          className="w-full lg:w-1/3"
          title="Project 3"
          techBadges={[
            {
              name: "JavaScript",
              color: "#F7DF1E",
              svg: jsIcon,
            },
            {
              name: "React.js",
              color: "#61DBFB",
              svg: reactIcon,
            },
            {
              name: "CSS",
              color: "#1572B6",
              svg: cssIcon,
            },
          ]}
          description1="Description 3 Line 1"
          description2=" Description 3 Line 2"
          link="PROJECT 3 GITHUB LINK"
        />
      </div>
    </div>
  );
}

export default SmallProjects;
