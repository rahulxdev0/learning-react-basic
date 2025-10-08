import { MoreVertical } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Dropdown = ({ links, triggerIcon, align = "right" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        updatePosition();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isOpen]);

  const updatePosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const dropdownWidth = 192; // w-48 = 12rem = 192px

      let left = align === "left" ? rect.left : rect.right - dropdownWidth;
      let top = rect.bottom + 8; // 8px gap

      // Adjust if dropdown goes off-screen horizontally
      if (left + dropdownWidth > window.innerWidth) {
        left = window.innerWidth - dropdownWidth - 16;
      }
      if (left < 16) {
        left = 16;
      }

      // Adjust if dropdown goes off-screen vertically
      const dropdownHeight = links.length * 40 + 8; // Approximate height
      if (top + dropdownHeight > window.innerHeight) {
        top = rect.top - dropdownHeight - 8; // Show above trigger
      }

      setPosition({ top, left });
    }
  };

  const handleToggle = () => {
    if (!isOpen) {
      updatePosition();
    }
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (onClick) => {
    if (onClick) onClick();
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative inline-block">
        <button
          ref={triggerRef}
          onClick={handleToggle}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Options"
        >
          {triggerIcon || <MoreVertical className="w-5 h-5 text-gray-600" />}
        </button>
      </div>

      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            className="fixed w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
          >
            {links.map((link, index) => (
              <button
                key={index}
                onClick={() => handleLinkClick(link.onClick)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${
                  link.danger ? "text-red-600 hover:bg-red-50" : "text-gray-700"
                } ${link.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={link.disabled}
              >
                {link.icon && <span className="w-4 h-4">{link.icon}</span>}
                <span>{link.label}</span>
              </button>
            ))}
          </div>,
          document.body
        )}
    </>
  );
};

export default Dropdown;
