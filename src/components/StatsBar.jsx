import Controls from "./Controls";

function StatsBar({
  mode,
  setMode,
  setDifficulty,
  difficulty,
  seconds: secondsRemaining,
  WPM,
  accuracy,
}) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  return (
    <div className="relative flex mx-4 lg:mx-28 mt-8 sm:mt-10 flex-col max-xl:flex-col max-xl:items-center xl:flex-row pb-4 gap-y-5 md:mt-16 sm:pb-4 md:pb-5 border-b border-(--neutral-400) justify-center">
      <div className="flex justify-center sm:justify-start">
        <div className="border-r pr-10.25 sm:pr-6 border-(--neutral-400) flex items-center flex-col sm:flex-row sm:gap-3">
          <span className="text-(--neutral-400) text-md sm:text-xl tracking-[-0.6px] text-center">
            WPM:
          </span>
          <span className="text-(--neutral-0) text-2xl font-bold">{WPM}</span>
        </div>
        <div className="border-r px-6.25 sm:pr-6 border-(--neutral-400) flex items-center flex-col sm:flex-row sm:gap-3">
          <span className="text-(--neutral-400) text-md sm:text-xl tracking-[-0.6px] text-center">
            Accuracy:
          </span>
          <span className="text-(--neutral-0) text-2xl font-bold">
            {accuracy}%
          </span>
        </div>
        <div className=" pl-8.25 sm:pr-6 flex items-center flex-col sm:flex-row sm:gap-3">
          <span className="text-(--neutral-400) text-md sm:text-xl tracking-[-0.6px] text-center">
            Time:
          </span>
          <span className="text-(--neutral-0) text-2xl font-bold">{`${String(mins).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}</span>
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

/* WPM Label */

export default StatsBar;
