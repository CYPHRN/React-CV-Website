import React from "react";

function FileTab({ file, fileformat, activeFile, setActiveFile, rounded }) {
  return (
    <button
      onClick={() => setActiveFile(file)}
      className={`${
        activeFile === `${file}`
          ? "bg-[#fa8d21] border-[#fa8d21] text-black"
          : "bg-gray-600 border-gray-600 text-gray-300"
      }
                    ${rounded} p-2`}
    >
      <p className="text-xs md:text-sm text-white font-mono">
        {file}.{fileformat}
      </p>
    </button>
  );
}

export default FileTab;
