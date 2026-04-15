import {useState, useRef} from "react";

const OPTIONS = ["Easy", "Medium", "Hard"];

export default function DifficultyDropdown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Hard");
  const buttonRef = useRef(null);

  return (
    <div className="relative w-[320px]">
      {/* Trigger */}
      <button
        ref={buttonRef}
        onClick={() => setOpen((v) => !v)}
        className="w-full rounded-xl bg-neutral-800 px-5 py-4 text-left text-white text-xl"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        Difficulty: <span className="font-semibold">{value}</span>
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
                  className="flex w-full items-center gap-5 px-6 py-6 text-left text-4xl text-white hover:bg-neutral-700 focus:bg-neutral-700 outline-none"
                >
                  {/* Custom radio */}
                  <span
                    className={`
                      w-8 h-8 rounded-full border-2
                      grid place-items-center
                      ${selected ? "border-blue-400" : "border-white"}
                    `}
                  >
                    {selected && (
                      <span className="w-3 h-3 rounded-full bg-black" />
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
