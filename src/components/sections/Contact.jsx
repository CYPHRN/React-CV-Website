import React from "react";
import ContactHeader from "./units/ContactHeader";
import ContactDetails from "./units/ContactDetails";
import Status from "./units/Status";

function Contact() {
  return (
    <div
      id="contact-section"
      className="bg-gradient-to-b from-[#1e1e1e] to-[#2d2d2d] mt-6 md:py-4 mx-auto"
    >
      <ContactHeader />
      <div className="flex justify-center">
        <div className="min-w-2/5 lg:w-2/5 space-y-8 container bg-[#111111] p-6 rounded-lg border-[#ff7f00]/30">
          <h3 className="text-l font-bold font-mono text-[#ff7f00] mb-6">
            $ contact_information --display
          </h3>
          <div className="space-y-4 font-mono text-white flex flex-col items-center">
            <ContactDetails />
            <Status />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
