import completeIcon from "../assets/images/icon-completed.svg";
import patternStar from "../assets/images/pattern-star-1.svg";
import patternLight from "../assets/images/pattern-star-2.svg";

import Confetti from "./Confetti";

function ResultsModal({handleReset, mode, correctChars, errorCount}) {
  const WPM = mode === "Timed(60s)" ? Math.round(correctChars / 5) : "85";

  const newHighSCore = true;
  return (
    <div className="relative">
      <div className="relative flex gap-6 flex-col justify-center items-center mt-8 md:mt-16 mx-4 lg:mx-28">
        {!newHighSCore && (
          <img
            src={patternLight}
            className=" w-5.25 h-5.25 absolute top-5 left-0"
            alt=""
          />
        )}
        <div className="shadow-double-circle rounded-full">
          <img src={completeIcon} className="h-12 w-12" alt="Completed" />
        </div>
        <div className="text-center">
          <p className="text-2xl  tracking-[0.32px] text-(--neutral-0) font-bold">
            {/* SET A CONDITION FOR THE IF RESULT DOESN'T EXIST, Baseline Established!, AFTER THE FISRT RESULT (Test Complete!)&& BEST SCORE (High Score Smashed!) */}
            Test Complete!
          </p>
          <p className=" mt-2.5 text-[16px] text-(--neutral-400) tracking-[-0.48px]">
            Solid run. Keep pushing to beat your high score.
          </p>
        </div>

        <div className=" w-full text-left flex flex-col md:flex-row md:justify-center gap-6">
          {/* FIX THE SIZE OF THE SPAN ON DESKTOP MODE  */}
          <span className=" w-full md:w-40 md:h-23 flex flex-col justify-center items-start py-4 px-6 gap-2  box-border border border-(--neutral-400) rounded-lg ">
            <p className="text-xl text-(--neutral-400)">WPM:</p>
            <p className="text-2xl font-bold text-(--neutral-0)">{WPM}</p>
          </span>
          <span className=" w-full md:w-40 md:h-23 flex flex-col justify-center items-start py-4 px-6 gap-3 box-border border border-(--neutral-400) rounded-lg">
            <p className="text-xl text-(--neutral-400)">Accuracy:</p>
            <p className="text-2xl font-bold text-(--red-500)">90%</p>
          </span>
          <span className=" w-full  md:w-40 md:h-23 flex flex-col justify-center items-start py-4 px-6 gap-3 box-border border border-(--neutral-400) rounded-lg">
            <p className="text-xl text-(--neutral-400)">Charaters:</p>
            <p className="text-2xl font-bold text-(--neutral-500)">
              <span className="text-(--green-500)">{correctChars}</span>/
              <span className="text-(--red-500)">{errorCount}</span>
            </p>
          </span>
        </div>
        <button
          onClick={handleReset}
          className="flex h-14 mt-4 lg:mt-8 bg-white text-(--neutral-900) gap-2.5 justify-center items-center py-2.5 px-4 rounded-xl"
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
            className="self-end w-9.75 h-9.75"
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
