import completeIcon from "../assets/images/icon-completed.svg";
import patternStar from "../assets/images/pattern-star-1.svg";
import patternLight from "../assets/images/pattern-star-2.svg";

import Confetti from "./Confetti";

function ResultsModal({
  handleReset,
  correctChars,
  errorCount,
  WPM,
  accuracy,
}) {
  const newHighSCore = true;
  return (
    <div className="relative">
      <div className="relative mx-4 mt-8 flex flex-col items-center justify-center gap-6 md:mt-16 lg:mx-28">
        {!newHighSCore && (
          <img
            src={patternLight}
            className="absolute top-5 left-0 h-5.25 w-5.25"
            alt=""
          />
        )}
        <div className="shadow-double-circle rounded-full">
          <img src={completeIcon} className="h-12 w-12" alt="Completed" />
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold tracking-[0.32px] text-(--neutral-0)">
            {/* SET A CONDITION FOR THE IF RESULT DOESN'T EXIST, Baseline Established!, AFTER THE FISRT RESULT (Test Complete!)&& BEST SCORE (High Score Smashed!) */}
            Test Complete!
          </p>
          <p className="mt-2.5 text-[16px] tracking-[-0.48px] text-(--neutral-400)">
            Solid run. Keep pushing to beat your high score.
          </p>
        </div>

        <div className="flex w-full flex-col gap-6 text-left md:flex-row md:justify-center">
          {/* FIX THE SIZE OF THE SPAN ON DESKTOP MODE  */}
          <span className="box-border flex w-full flex-col items-start justify-center gap-2 rounded-lg border border-(--neutral-400) px-6 py-4 md:h-23 md:w-40">
            <p className="text-xl text-(--neutral-400)">WPM:</p>
            <p className="text-2xl font-bold text-(--neutral-0)">{WPM}</p>
          </span>
          <span className="box-border flex w-full flex-col items-start justify-center gap-3 rounded-lg border border-(--neutral-400) px-6 py-4 md:h-23 md:w-40">
            <p className="text-xl text-(--neutral-400)">Accuracy:</p>
            <p className="text-2xl font-bold text-(--red-500)">{accuracy}%</p>
          </span>
          <span className="box-border flex w-full flex-col items-start justify-center gap-3 rounded-lg border border-(--neutral-400) px-6 py-4 md:h-23 md:w-40">
            <p className="text-xl text-(--neutral-400)">Charaters:</p>
            <p className="text-2xl font-bold text-(--neutral-500)">
              <span className="text-(--green-500)">{correctChars}</span>/
              <span className="text-(--red-500)">{errorCount}</span>
            </p>
          </span>
        </div>
        <button
          onClick={handleReset}
          className="mt-4 flex h-14 items-center justify-center gap-2.5 rounded-xl bg-white px-4 py-2.5 text-(--neutral-900) lg:mt-8"
        >
          <span className="text-xl font-semibold">Go again</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              fill="#000"
              d="M1.563 1.281h.949c.246 0 .422.211.422.457l-.07 3.446a8.6 8.6 0 0 1 7.277-3.868c4.816 0 8.718 3.938 8.718 8.72-.035 4.816-3.937 8.683-8.718 8.683a8.86 8.86 0 0 1-5.871-2.215.446.446 0 0 1 0-.633l.703-.703c.14-.14.386-.14.562 0 1.23 1.09 2.813 1.723 4.606 1.723A6.88 6.88 0 0 0 17.03 10c0-3.797-3.093-6.89-6.89-6.89-2.813 0-5.203 1.687-6.293 4.078l4.43-.106c.245 0 .456.176.456.422v.95c0 .245-.21.421-.421.421h-6.75a.406.406 0 0 1-.422-.422v-6.75c0-.21.175-.422.422-.422"
            />
          </svg>
        </button>
        {!newHighSCore && (
          <img
            src={patternStar}
            className="h-9.75 w-9.75 self-end"
            alt="star pattern"
          />
        )}
      </div>
      {/* work on this Confetti later */}
      {newHighSCore && <Confetti />}
    </div>
  );
}

export default ResultsModal;
