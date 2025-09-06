import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

type LanguageChangerProps = {
  lang: string;
  onChange?: (lang: string) => void;
  changeLangHandler: (lang: string) => void;
};

const options = ["JavaScript", "TypeScript", "Python", "HTML"];

export default function LanguageChanger({
  lang,
  onChange,
  changeLangHandler,
}: LanguageChangerProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (option: string) => {
    setOpen(false);
    if (onChange) onChange(option);
    changeLangHandler(option);
  };

  return (
    <div className="relative w-36">
      <button
        type="button"
        className="bg-[#f4f7fa] px-4 py-2 rounded-xl shadow-md w-full flex items-center justify-between text-base font-medium text-gray-700 transition-all duration-200 hover:shadow-lg focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{lang}</span>
        <FaChevronDown
          size={14}
          className={`ml-2 text-gray-500 transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-full bg-white rounded-lg border border-gray-200 shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className={`w-full text-left px-3 py-2 text-sm rounded transition-colors cursor-pointer
                ${
                  option === lang
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
