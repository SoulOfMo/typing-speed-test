import { useState, useRef } from "react";

import dropDownIcon from "../assets/images/icon-down-arrow.svg";

const OPTIONS = ["Easy", "Medium", "Hard"];

export default function DifficultyDropdown({ style }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Hard");
  const buttonRef = useRef(null);

  return (
    <div className="flex items-center gap-2.5 sm:hidden">
      {/* Trigger */}
      <button
        ref={buttonRef}
        onClick={() => setOpen((v) => !v)}
        className="flex w-[166.5px] items-center justify-center gap-2.5 rounded-lg border border-neutral-500 px-2.5 py-1.5 max-[321px]:w-35"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-neutral-0 text-[16px]">{difficulty}</span>
        <img src={dropDownIcon} alt="difficulty mode" />
      </button>

      {/* Dropdown */}
      {open && (
        <ul
          role="listbox"
          aria-label="Difficulty"
          tabIndex={-1}
          className="absolute mt-2 w-full overflow-hidden rounded-2xl bg-neutral-800 shadow-xl"
        >
          {OPTIONS.map((option, i) => {
            const selected = option === value;

            return (
              <li key={option}>
                <button
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    setValue(option);
                    setOpen(false);
                    buttonRef.current?.focus();
                  }}
                  className="flex w-full items-center gap-5 px-6 py-6 text-left text-4xl text-white outline-none hover:bg-neutral-700 focus:bg-neutral-700"
                >
                  {/* Custom radio */}
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-full border-2 ${selected ? "border-blue-400" : "border-white"} `}
                  >
                    {selected && (
                      <span className="h-3 w-3 rounded-full bg-black" />
                    )}
                  </span>

                  {option}
                </button>

                {i !== OPTIONS.length - 1 && (
                  <div className="mx-6 h-px bg-white/10" />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
