import React from "react";

function Badge({
  color,
  border,
  image,
  altname,
  invert,
  link,
  width,
  size,
  bold,
  context = "tech",
}) {
  const getResponsiveClass = () => {
    switch (context) {
      case "github":
        return {
          container: "p-2 md:p-3 lg:p-3 hover:scale-105 transition-transform ",
          icon: "h-6 w-6 md:h-8 md:w-8",
          text: "text-xs md:text-sm lg:text-base",
          width: "w-auto min-w-[120px] md:min-w-[140px]",
        };
      case "tech":
        return {
          container: "p-1 md:p-2",
          icon: "h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8",
          text: "text-xs md:text-xs lg:text-sm",
          width: "w-auto",
        };
      default:
        return {
          container: "p-2",
          icon: "h-6 w-6 md:h-8 md:w-8",
          text: "text-xs md:text-sm",
          width: "w-auto",
        };
    }
  };

  const responsive = getResponsiveClass();

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={`bg-[#2d2d2d] border-2 flex gap-2 rounded-xl m-1 items-center ${responsive.container} ${responsive.width}`}
        style={{
          borderColor: border,
          color: color,
        }}
      >
        <img
          src={image}
          className={`${responsive.icon} ${invert}`}
          alt={altname}
        />

        <span className={`font-mono ${responsive.text} font-${bold}`}>
          {altname}
        </span>
      </div>
    </a>
  );
}

export default Badge;
