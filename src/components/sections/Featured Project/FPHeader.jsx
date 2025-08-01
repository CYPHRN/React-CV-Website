import React from "react";
import Badge from "./Badge";

import nodejsIcon from "../../assets/svgs/nodejs-icon.svg";
import bootstrapIcon from "../../assets/svgs/bootstrap-fill.svg";
import mongodbIcon from "../../assets/svgs/MongoDB.svg";

function FPHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="bg-[#fa8d21] w-2/6 pl-3 pt-4 pb-3 mb-2 flag-title min-w-44">
        <h5 className="text-left font-mono text-white text-xs sm:text-sm md:text-base lg:text-base md:mt-1">
          Featured Project
        </h5>
      </div>
      <div className="flex justify-between md:flex-row gap-2">
        <Badge
          color="#339933"
          border="#339933"
          image={nodejsIcon}
          altname="Node.js"
          bold="bold"
        />
        <Badge
          color="#c29ff7"
          border="#7952B3"
          image={bootstrapIcon}
          altname="Bootstrap"
          invert="invert"
          bold="bold"
        />
        <Badge
          color="#47A248"
          border="#47A248"
          image={mongodbIcon}
          altname="MongoDB"
          bold="bold"
        />
        <div className="mr-4"></div>
      </div>
    </div>
  );
}

export default FPHeader;
