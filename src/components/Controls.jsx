import {useState} from "react";
import dropDownIcon from "../assets/images/icon-down-arrow.svg";

const difficulties = ["Easy", "Medium", "Hard"];

function Controls({difficulty, mode, setMode, setDifficulty}) {
  const [open, setOpen] = useState(false);
  const [modeOpen, setModeOpen] = useState(null);

  return (
    <div className=" relative flex gap-4 justify-center sm:justify-start">
      <div className="hidden sm:flex items-center gap-1.5">
        <p className="text-(--neutral-400)">Difficulty:</p>
        {difficulties.map((item) => {
          const active = difficulty === item;

          return (
            <button
              key={item}
              onClick={() => setDifficulty(item)}
              className={`
        px-2.5 py-1.5 text-[16px] rounded-lg border
        ${
          active
            ? "border-(--blue-400) text-(--blue-400)"
            : "border-(--neutral-400) text-(--neutral-0)"
        }  hover:border-(--blue-400) hover:text-(--blue-400) hover:cursor-pointer focus:shadow-double-ring focus:outline-none
      `}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className=" hidden sm:flex items-center gap-3.5 sm:border-l sm:bl-(--neutral-400) pl-4">
        <p className="text-(--neutral-400)">Mode:</p>
        <button
          value="Timed(60s)"
          onClick={() => setMode("Timed(60s)")}
          className={`px-2.5 text-[16px] py-1.5 border rounded-lg  ${
            mode === "Timed(60s)"
              ? "border-(--blue-400) text-(--blue-400) "
              : "border-(--neutral-400) text-(--neutral-0) "
          }  hover:border-(--blue-400) hover:text-(--blue-400) hover:cursor-pointer`}
        >
          Timed(60s)
        </button>

        <button
          value="Passage"
          onClick={() => setMode("Passage")}
          className={`px-2.5 text-[16px] py-1.5 border rounded-lg  ${
            mode === "Passage"
              ? "border-(--blue-400) text-(--blue-400) "
              : "border-(--neutral-400) text-(--neutral-0) "
          }  hover:border-(--blue-400) hover:text-(--blue-400) hover:cursor-pointer`}
        >
          Passage
        </button>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden flex items-center gap-2.5">
        {/* //fix the width for 320px breaking points for the buttons */}
        <button
          onClick={() => setOpen(!open)}
          className="flex gap-2.5 px-2.5 w-[166.5px] justify-center items-center py-1.5 rounded-lg border border-(--neutral-400)"
        >
          <span className="text-[16px] text-(--neutral-0)">{difficulty}</span>
          <img src={dropDownIcon} alt="difficulty mode" />
        </button>

        <button
          onClick={() => setModeOpen(!modeOpen)}
          className="flex gap-2.5 px-2.5 w-[166.5px] justify-center items-center py-1.5 rounded-lg border border-(--neutral-400)"
        >
          <span className="text-[16px] text-(--neutral-0)">{mode}</span>
          <img src={dropDownIcon} alt="difficulty mode" />
        </button>
      </div>
      {open === true && (
        <div className=" z-40 pt-0.5 block sm:hidden absolute top-11 left-0 w-[166.5px] rounded-lg bg-neutral-800 shadow-xl">
          {difficulties.map((item, i) => {
            const selected = difficulty === item;

            return (
              <button
                key={i}
                onClick={() => {
                  setDifficulty(item);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-3 px-2.5 py-2 text-white text-[16px] border-b border-(--neutral-700) last:border-0"
              >
                <span
                  className={`
              w-4 h-4 rounded-full border grid place-items-center
              ${selected ? "bg-(--blue-400) border-(--blue-400)" : "border-white"}
            `}
                >
                  {selected && (
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  )}
                </span>

                {item}
              </button>
            );
          })}
        </div>
      )}
      {modeOpen && (
        <div className=" z-40 pt-0.5 block sm:hidden absolute top-11 right-0 w-[166.5px] rounded-lg bg-neutral-800 shadow-xl">
          {["Timed(60s)", "Passage"].map((item, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  setMode(item);
                  setModeOpen(false);
                }}
                className="flex w-full items-center gap-3 px-2.5 py-2 text-white text-[16px] border-b border-(--neutral-700) last:border-0"
              >
                <span
                  className={`
              w-4 h-4 rounded-full border grid place-items-center
              ${mode === item ? "bg-(--blue-400) border-(--blue-400)" : "border-white"}
            `}
                >
                  {mode === item && (
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
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
