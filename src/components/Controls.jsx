import { useState } from "react";
import dropDownIcon from "../assets/images/icon-down-arrow.svg";

const difficulties = ["Easy", "Medium", "Hard"];

function Controls({ difficulty, mode, setMode, setDifficulty }) {
  const [open, setOpen] = useState(false);
  const [modeOpen, setModeOpen] = useState(null);

  return (
    <div className="relative flex justify-center gap-4 sm:justify-start">
      <div className="hidden items-center gap-1.5 sm:flex">
        <p className="text-(--neutral-400)">Difficulty:</p>
        {difficulties.map((item) => {
          const active = difficulty === item;

          return (
            <button
              key={item}
              onClick={() => setDifficulty(item)}
              className={`rounded-lg border px-2.5 py-1.5 text-[16px] ${
                active
                  ? "border-(--blue-400) text-(--blue-400)"
                  : "border-(--neutral-500) text-(--neutral-0)"
              } focus:shadow-double-ring hover:cursor-pointer hover:border-(--blue-400) hover:text-(--blue-400) focus:outline-none`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="hidden items-center gap-3.5 pl-4 sm:flex sm:border-l sm:border-(--neutral-700)">
        <p className="text-(--neutral-400)">Mode:</p>
        <button
          value="Timed(60s)"
          onClick={() => setMode("Timed(60s)")}
          className={`rounded-lg border px-2.5 py-1.5 text-[16px] ${
            mode === "Timed(60s)"
              ? "border-(--blue-400) text-(--blue-400) "
              : "border-(--neutral-500) text-(--neutral-0) "
          } hover:cursor-pointer hover:border-(--blue-400) hover:text-(--blue-400)`}
        >
          Timed(60s)
        </button>

        <button
          value="Passage"
          onClick={() => setMode("Passage")}
          className={`rounded-lg border px-2.5 py-1.5 text-[16px] ${
            mode === "Passage"
              ? "border-(--blue-400) text-(--blue-400) "
              : "border-(--neutral-500) text-(--neutral-0) "
          } hover:cursor-pointer hover:border-(--blue-400) hover:text-(--blue-400)`}
        >
          Passage
        </button>
      </div>

      {/* Mobile View */}
      <div className="flex items-center gap-2.5 sm:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-[166.5px] items-center justify-center gap-2.5 rounded-lg border border-(--neutral-500) px-2.5 py-1.5 max-[321px]:w-35"
        >
          <span className="text-[16px] text-(--neutral-0)">{difficulty}</span>
          <img src={dropDownIcon} alt="difficulty mode" />
        </button>

        <button
          onClick={() => setModeOpen(!modeOpen)}
          className="flex w-[166.5px] items-center justify-center gap-2.5 rounded-lg border border-(--neutral-500) px-2.5 py-1.5 max-[321px]:w-35"
        >
          <span className="text-[16px] text-(--neutral-0)">{mode}</span>
          <img src={dropDownIcon} alt="difficulty mode" />
        </button>
      </div>
      {open === true && (
        <div className="absolute top-11 left-0 z-40 block w-[166.5px] rounded-lg bg-neutral-800 pt-0.5 shadow-xl sm:hidden">
          {difficulties.map((item, i) => {
            const selected = difficulty === item;

            return (
              <button
                key={i}
                onClick={() => {
                  setDifficulty(item);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-3 border-b border-(--neutral-700) px-2.5 py-2 text-[16px] text-white last:border-0"
              >
                <span
                  className={`grid h-4 w-4 place-items-center rounded-full border ${selected ? "border-(--blue-400) bg-(--blue-400)" : "border-white"} `}
                >
                  {selected && (
                    <span className="h-1.5 w-1.5 rounded-full bg-black" />
                  )}
                </span>

                {item}
              </button>
            );
          })}
        </div>
      )}
      {modeOpen && (
        <div className="absolute top-11 right-0 z-40 block w-[166.5px] rounded-lg bg-neutral-800 pt-0.5 shadow-xl sm:hidden">
          {["Timed(60s)", "Passage"].map((item, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  setMode(item);
                  setModeOpen(false);
                }}
                className="flex w-full items-center gap-3 border-b border-(--neutral-700) px-2.5 py-2 text-[16px] text-white last:border-0"
              >
                <span
                  className={`grid h-4 w-4 place-items-center rounded-full border ${mode === item ? "border-(--blue-400) bg-(--blue-400)" : "border-white"} `}
                >
                  {mode === item && (
                    <span className="h-1.5 w-1.5 rounded-full bg-black" />
                  )}
                </span>

                {item}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Controls;
