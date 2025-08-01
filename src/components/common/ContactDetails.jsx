import React from "react";

function ContactDetails() {
  const contactInfo = {
    email: "YOUR EMAIL",
    linkedin: "LINKEDIN LINK",
    github: "GITHUB LINK",
  };

  return (
    <div className="flex flex-col items-center space-x-3">
      <div className="flex flex-col items-center space-x-3">
        <div className="text-xs md:text-base">
          <span className="text-[#ff7f00]"></span>

          <p className="text-sm text-gray-400">✉️ Email</p>
          <a
            href={`mailto:${contactInfo.email}`}
            className="hover:text-[#ff7f00] transition-colors"
          >
            {contactInfo.email}
          </a>
        </div>

        <div className="pt-4 border-t border-[#ff7f00]/20 mb-8">
          <p className="text-sm text-gray-400 mb-3">Connect Online</p>
          <div className="flex justify-center space-x-4">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0077B5] hover:bg-[#005885] px-3 py-2 rounded text-xs font-bold transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#24292e] hover:bg-[#1a1e22] px-3 py-2 rounded text-xs font-bold transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
