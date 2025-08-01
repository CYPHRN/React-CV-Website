import React from "react";

function Status() {
  return (
    <div className="bg-[#1e1e1e] p-6 rounded-lg border border-[#ff7f00]/30">
      <h4 className="text-lg font-bold font-mono text-[#ff7f00] mb-4">
        $ professional_status --current
      </h4>
      <div className="space-y-2 font-mono text-xs md:text-sm">
        <p>
          <p className="text-[#ff7f00]">Status:</p> Open to opportunities
        </p>
        <p>
          <p className="text-[#ff7f00]">Response Time:</p> Within 24 hours
        </p>
        <p>
          <p className="text-[#ff7f00]">Specialization:</p> React • JavaScript •
          Python • Cloud
        </p>
      </div>
    </div>
  );
}

export default Status;
