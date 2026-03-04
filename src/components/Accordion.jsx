import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { IoRemove } from "react-icons/io5";

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  function onOpenClose() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <div
      onClick={onOpenClose}
      className={`group w-full bg-white rounded-2xl border transition-all duration-300 
      ${isOpen ? "shadow-md border-indigo-200" : "shadow-sm border-slate-200 hover:border-slate-300"}`}
    >
      {/* קומה 1: ה-Header (שאלה + אייקון) */}
      <div className="flex justify-between items-center p-6 cursor-pointer select-none">
        <h3
          className={`text-lg font-bold tracking-tight transition-colors 
          ${isOpen ? "text-indigo-700" : "text-slate-800"}`}
        >
          {question}
        </h3>
        <div
          className={`text-2xl transition-transform duration-300 
          ${isOpen ? "rotate-180 text-indigo-600" : "text-slate-400 group-hover:text-slate-600"}`}
        >
          {isOpen ? <IoRemove /> : <MdAdd />}
        </div>
      </div>

      {/* קומה 2: ה-Content (התשובה - מופיעה רק כשפתוח) */}
      {isOpen && (
        <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="pt-4 border-t border-slate-50 text-slate-600 leading-relaxed font-normal">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
