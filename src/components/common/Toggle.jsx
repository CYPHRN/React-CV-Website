import React from "react";

import eye from "../../assets/svgs/eye.svg";
import code from "../../assets/svgs/code-slash.svg";

function Toggle({ activeView, setActiveView }) {
  return (
    <div className="flex items-end justify-end mt-1">
      <button
        onClick={() => setActiveView("description")}
        className={`${
          activeView === "description"
            ? "bg-[#fa8d21] border-[#fa8d21] text-black"
            : "bg-gray-600 border-gray-600 text-gray-300"
        }
                    flex gap-2 rounded-l-xl p-2 items-center`}
      >
        <img src={eye} className="invert" alt="Toggle icon"></img>
      </button>
      <button
        onClick={() => setActiveView("code")}
        className={`${
          activeView === "code"
            ? "bg-[#fa8d21] border-[#fa8d21] text-black"
            : "bg-gray-600 border-gray-600 text-gray-300"
        }
                    flex gap-2 rounded-r-xl p-2 items-center`}
      >
        <img src={code} className="invert" alt="Code icon"></img>
      </button>
    </div>
  );
}

export default Toggle;
