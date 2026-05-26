import restartIcon from "../assets/images/icon-restart.svg";

function TypingArea({
  passage,
  handleTyping,
  userInput,
  inputRef,
  onStart: handleStart,
  isStarted,
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
      className="relative mx-4 mt-8 mb-28 flex flex-col items-center justify-center lg:mx-28"
    >
      <div className="max-[400px]:hidden sm:block">
        <div className="w-full">
          <p
            className={`text-neutral-0 max-h-[70vh] overflow-hidden text-4xl leading-[136%] tracking-[0.4px] ${
              isStarted ? "" : "opacity-40 blur-sm"
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
          id="hidden-input"
          name="hidden-input"
          aria-label="typing input field"
          onKeyDown={(e) => {
            if (BLOCKED_KEYS.includes(e.key)) e.preventDefault();
          }}
          className="absolute cursor-none opacity-0"
        />
        {!isStarted && (
          <div className="text-neutral-0 absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center gap-5 text-xl font-semibold">
            <button
              className="focus:shadow-double-ring rounded-xl bg-blue-600 px-6 py-4 hover:cursor-pointer hover:bg-blue-400 focus:outline-none"
              onClick={handleStart}
            >
              Start Typing Test
            </button>
            <p className="">Or click the text and start typing</p>
          </div>
        )}
        {isStarted && (
          <div className="text-neutral-0 mt-16 flex w-full justify-center border-t border-solid border-neutral-700">
            <button
              onClick={handleReset}
              className="mt-8 flex h-14 w-45.25 items-center justify-center gap-2.5 rounded-xl bg-neutral-800 px-4 py-2.5 text-xl"
            >
              <span className="h-6 text-lg">Restart Test</span>
              <img src={restartIcon} alt="" />
            </button>
          </div>
        )}
      </div>
      <p className="text-neutral-0 hidden max-h-[70vh] overflow-hidden text-center text-2xl leading-[136%] tracking-[0.4px] max-[400px]:block">
        Try the desktop version for a better experience
      </p>
    </div>
  );
}

export default TypingArea;
