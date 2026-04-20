/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";

import data from "../data/data.json";

export function useTypingTest() {
  const [difficulty, setDifficulty] = useState("Easy");
  const [mode, setMode] = useState("Timed(60s)");
  const [typedChars, setTypedChars] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [passage, setPassage] = useState("");
  const [start, setStart] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [seconds, setSeconds] = useState(15);
  const [currentWpm, setCurrentWpm] = useState(0);
  const [bestWpm, setBestWpm] = useState(() => {
    const storedWpm = JSON.parse(localStorage.getItem("bestWpm"));
    return storedWpm || 0;
  });

  const inputRef = useRef(null);

  const accuracy =
    correctChars === 0 ? 0 : Math.round((correctChars / typedChars) * 100);

  function handleReset() {
    setStart(false);
    setShowResults(false);
    setUserInput("");
    setTypedChars(0);
    setCorrectChars(0);
    setErrorCount(0);
    inputRef.current?.focus();
    inputRef.value = "";
    setMode("Timed(60s)");
    setSeconds(15);
    setCurrentWpm(0);
  }

  function onStart() {
    setStart(true);
  }

  function handleComplete() {
    setShowResults(true);
  }

  // if (bestWpm == 0 && showResults) setBestWpm(currentWpm);
  // if (currentWpm > bestWpm && showResults) setBestWpm(currentWpm);

  function handleTyping(e) {
    const value = e.target.value;

    // Start timer on first keystroke
    if (!startTime) setStartTime(Date.now());

    const currentIndex = value.length - 1;
    const typedChar = value[currentIndex];

    const expectedChar = passage[currentIndex];

    // Check if correct
    if (typedChar === expectedChar) {
      setCorrectChars((c) => c + 1);
    } else {
      setErrorCount((e) => e + 1);
    }

    setTypedChars(value.length);
    setUserInput(value);
    // Check if test is complete
    if (value.length === passage.length) handleComplete();
  }

  // Timer effect
  useEffect(() => {
    if (!start) return;
    if (mode === "Timed(60s)" && seconds <= 0) {
      handleComplete();
      return;
    }

    const timer = setInterval(() => {
      mode === "Timed(60s)"
        ? setSeconds((prev) => prev - 1)
        : setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds, mode, start]);

  useEffect(() => {
    setStart(false);
    const randomNum = Math.floor(Math.random() * 10);
    const passageGenerated =
      data[difficulty.toLocaleLowerCase()][randomNum].text;
    setPassage(passageGenerated);
    mode === "Timed(60s)" && setSeconds(15);
    mode === "Passage" && setSeconds(0);
  }, [difficulty, mode]);

  useEffect(() => {
    localStorage.setItem("bestWpm", JSON.stringify(bestWpm));
  }, [bestWpm]);

  useEffect(() => {
    if (correctChars <= 0) return;
    const WPM =
      mode === "Timed(60s)"
        ? Math.round(correctChars / 5)
        : Math.round(correctChars / 5 / ((Date.now() - startTime) / 60000));
    setCurrentWpm(WPM);
  }, [correctChars, mode, startTime, bestWpm]);

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
    seconds,
    handleReset,
    showResults,
    correctChars,
    errorCount,
    WPM: currentWpm,
    bestWpm,
    accuracy,
    startTime,
  };
}
