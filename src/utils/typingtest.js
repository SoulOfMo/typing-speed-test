/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import completeIcon from "../assets/images/icon-completed.svg";
import newPBIcon from "../assets/images/icon-new-pb.svg";

import calculateWPM from "./calculateWPM";
import getRandomPassage from "./getRandomPassage";

const RESULT_MESSAGES = [
  {
    resultID: "Baseline Established!",
    message:
      "You’ve set the bar. Now the real challenge begins—time to beat it.",
    image: completeIcon,
    style: true,
    newHighScore: false,
  },
  {
    resultID: "Test Complete!",
    message: "Solid run. Keep pushing to beat your high score.",
    image: completeIcon,
    style: true,
    newHighScore: false,
  },

  {
    resultID: "High Score Smashed!",
    message: "You’re getting faster. That was incredible typing.",
    image: newPBIcon,
    newHighScore: true,
  },
];

export function useTypingTest() {
  const [difficulty, setDifficulty] = useState("Easy");
  const [mode, setMode] = useState("Timed(60s)");
  const [correctChars, setCorrectChars] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [passage, setPassage] = useState("");
  const [start, setStart] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [resultMessage, setResultMessage] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [currentWpm, setCurrentWpm] = useState(0);
  const [bestWpm, setBestWpm] = useState(() => {
    const storedWpm = JSON.parse(localStorage.getItem("bestWpm"));
    return storedWpm || 0;
  });

  const inputRef = useRef(null);

  function resetTestState() {
    setStart(false);
    setUserInput("");
    setCorrectChars(0);
    setErrorCount(0);
    setStartTime(null);
  }

  //Initial Rendering
  useEffect(() => {
    resetTestState();
    const passage = getRandomPassage(difficulty);
    setPassage(passage);
    mode === "Timed(60s)" && setTimeRemaining(30);
    mode === "Passage" && setTimeRemaining(0);
  }, [difficulty, mode]);

  //typing
  function handleTyping(e) {
    const value = e.target.value;

    // Start timer on first
    //slove this impure function
    if (!startTime) setStartTime(Date.now());

    const currentIndex = value.length - 1;

    let correct = 0;
    let errors = 0;

    for (let i = 0; i < value.length; i++) {
      if (value[i] === passage[i]) {
        correct++;
      } else {
        errors++;
      }
    }

    setCorrectChars(correct);
    setErrorCount(errors);
    setUserInput(value);
    // Check if test is complete
    if (value.length == passage.length) handleComplete();
  }

  const accuracy =
    correctChars === 0
      ? 0
      : Math.floor((correctChars / userInput.length) * 100);

  function handleComplete() {
    if (bestWpm === 0) {
      setResultMessage(RESULT_MESSAGES[0]);
    } else if (currentWpm > bestWpm) {
      setResultMessage(RESULT_MESSAGES[2]);
    } else {
      setResultMessage(RESULT_MESSAGES[1]);
    }
    setStart(false);
    setShowResults(true);
  }

  useEffect(() => {
    if (mode === "Timed(60s)" && timeRemaining === 0 && start) {
      handleComplete();
    }
  }, [timeRemaining, mode, start]);

  // Reset
  function handleReset() {
    resetTestState();
    setMode("Timed(60s)");
    setShowResults(false);
    setTimeRemaining(15);
    setCurrentWpm(0);
    const passage = getRandomPassage(difficulty);
    setPassage(passage);
  }

  function onStart() {
    setStart(true);
  }

  // Timer effect for
  useEffect(() => {
    if (!start) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (mode === "Timed(60s)") {
          return prev > 0 ? prev - 1 : 0;
        }

        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mode, start]);

  //LocalStorage for the bestWpm
  useEffect(() => {
    localStorage.setItem("bestWpm", JSON.stringify(bestWpm));
  }, [bestWpm]);

  useEffect(() => {
    if (correctChars <= 0) return;
    const WPM = calculateWPM(correctChars, startTime, mode, timeRemaining, 30);

    setCurrentWpm(WPM);
  }, [correctChars, mode, startTime, timeRemaining]);

  useEffect(() => {
    if (!showResults) return;

    if (bestWpm === 0 || currentWpm > bestWpm) {
      setBestWpm(currentWpm);
    }
  }, [showResults, currentWpm, bestWpm]);

  return {
    difficulty,
    setDifficulty,
    mode,
    setMode,
    passage,
    handleTyping,
    userInput,
    inputRef,
    start,
    onStart,
    timeRemaining,
    handleReset,
    showResults,
    resultMessage,
    correctChars,
    errorCount,
    WPM: currentWpm,
    bestWpm,
    accuracy,
    startTime,
  };
}
