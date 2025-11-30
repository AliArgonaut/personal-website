
import React from "react";
import clsx from "clsx";

export default function CorneredButton({
  children,
  className = "",
  color = "black",
  hoverColor = "black",
}) {
  return (
    <button
      className={clsx(
        "relative group px-8 py-4 font-semibold rounded-lg transition-all duration-500",
        "bg-transparent",
        className
      )}
      style={{
        "--btn-color": color,
        "--btn-hover": hoverColor,
      }}
    >
      <span className="relative block text-[var(--btn-color)] transition-colors duration-500 group-hover:text-[var(--btn-hover)]">
        {children}
      </span>

      {/* TL corner */}
      <span
        className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 opacity-0 
          border-[var(--btn-color)] transition-all duration-500
          group-hover:opacity-100 group-hover:border-[var(--btn-hover)]
          -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0"
      />

      {/* BL corner */}
      <span
        className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 opacity-0
          border-[var(--btn-color)] transition-all duration-500
          group-hover:opacity-100 group-hover:border-[var(--btn-hover)]
          -translate-x-1/2 translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0"
      />

      {/* TR corner */}
      <span
        className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 opacity-0
          border-[var(--btn-color)] transition-all duration-500
          group-hover:opacity-100 group-hover:border-[var(--btn-hover)]
          translate-x-1/2 -translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0"
      />

      {/* BR corner */}
      <span
        className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 opacity-0
          border-[var(--btn-color)] transition-all duration-500
          group-hover:opacity-100 group-hover:border-[var(--btn-hover)]
          translate-x-1/2 translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0"
      />
    </button>
  );
}
