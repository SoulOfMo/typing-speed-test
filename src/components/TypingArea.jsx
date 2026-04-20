import restartIcon from "../assets/images/icon-restart.svg";

function TypingArea({
  passage,
  handleTyping,
  userInput,
  inputRef,
  onStart: handleStart,
  start,
  handleReset,
}) {
  const getCharStatus = (index) => {
    if (index >= userInput.length) return "untyped";
    if (userInput[index] === passage[index]) return "correct";
    return "error";
  };

  const BLOCKED_KEYS = [
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "Home",
    "End",
    "Enter",
  ];

  return (
    <div
      onClick={() => {
        inputRef.current.focus();
      }}
      className="mx-4 mb-28 lg:mx-28 flex justify-center items-center relative mt-8 flex-col"
    >
      <div className=" w-full">
        <p
          className={`text-(--neutral-0) text-4xl leading-[136%] overflow-hidden max-h-[70vh] tracking-[0.4px] ${start ? "" : "blur-sm opacity-40"
            } `}
        >
          {passage.split("").map((char, index) => (
            <span
              className={`${getCharStatus(index)} ${index === userInput.length ? "cursor" : ""}`}
              key={index}
            >
              {char}
            </span>
          ))}
        </p>
      </div>
      <input
        ref={inputRef}
        value={userInput}
        autoFocus
        onChange={handleTyping}
        onKeyDown={(e) => {
          if (BLOCKED_KEYS.includes(e.key)) e.preventDefault();
        }}
        className="absolute opacity-0"
      />
      {!start && (
        <div className="absolute w-full gap-5 h-full flex flex-col items-center justify-center top-0 left-0 text-xl font-semibold text-(--neutral-0)">
          <button
            className="px-6 py-4 rounded-xl bg-(--blue-600) hover:bg-(--blue-400) hover:cursor-pointer focus:outline-1 focus:outline-(--blue-400)"
            onClick={handleStart}
          >
            Start Typing Test
          </button>
          <p className="">Or click the text and start typing</p>
        </div>
      )}
      {start && (
        <div className="border-t border-solid text-(--neutral-0) border-(--var(--neutral-400)) mt-16 w-full flex justify-center ">
          <button
            onClick={handleReset}
            className="text-xl w-45.25 flex items-center justify-center gap-2.5 mt-8 bg-(--neutral-800) py-2.5 px-4 rounded-xl"
          >
            <span>Restart Test</span>
            <img src={restartIcon} alt="" />
          </button>
        </div>
      )}
    </div>
  );
}

export default TypingArea;
