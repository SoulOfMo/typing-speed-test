import Controls from "./Controls";

function StatsBar({
  mode,
  setMode,
  setDifficulty,
  difficulty,
  timeRemaining: secondsRemaining,
  WPM,
  accuracy,
  start,
}) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  return (
    <div className="relative mx-4 mt-8 flex flex-col justify-center gap-y-5 border-b border-(--neutral-700) pb-4 max-xl:flex-col max-xl:items-center sm:mt-10 sm:pb-4 md:mt-16 md:pb-5 lg:mx-28 lg:justify-between xl:flex-row">
      <div className="flex justify-center sm:justify-start md:w-121">
        <div className="flex flex-col items-center border-r border-(--neutral-700) pr-10.25 sm:flex-row sm:gap-3 sm:pr-6">
          <span className="text-md text-center tracking-[-0.6px] text-(--neutral-400) sm:text-xl">
            WPM:
          </span>
          <span className="text-2xl font-bold text-(--neutral-0)">{WPM}</span>
        </div>
        <div className="flex flex-col items-center border-r border-(--neutral-700) px-6.25 sm:flex-row sm:gap-3 sm:pr-6">
          <span className="text-md text-center tracking-[-0.6px] text-(--neutral-400) sm:text-xl">
            Accuracy:
          </span>
          <span
            className={`text-2xl font-bold ${start ? "text-(--red-500)" : "text-(--neutral-0)"} `}
          >
            {accuracy}%
          </span>
        </div>
        <div className="flex flex-col items-center pl-8.25 sm:flex-row sm:gap-3 sm:pr-6">
          <span className="text-md text-center tracking-[-0.6px] text-(--neutral-400) sm:text-xl">
            Time:
          </span>
          <span
            className={`text-2xl font-bold ${start ? "text-(--yellow-400)" : "text-(--neutral-0)"} `}
          >{`${String(mins).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}</span>
        </div>
      </div>

      <Controls
        setMode={setMode}
        setDifficulty={setDifficulty}
        difficulty={difficulty}
        mode={mode}
      />
    </div>
  );
}

export default StatsBar;
