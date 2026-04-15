/* eslint-disable no-unused-vars */
import {useEffect, useRef, useState} from "react";

import data from "../data/data.json";

export function useTypingTest() {
  const [difficulty, setDifficulty] = useState("Easy");
  const [mode, setMode] = useState("Timed(60s)");
  const [open, setOpen] = useState(false);
  const [modeOpen, setModeOpen] = useState(null);
  const [typedChars, setTypedChars] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [passage, setPassage] = useState("");
  const [start, setStart] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [seconds, setSeconds] = useState(15);

  const WPM = mode === "Timed(60s)" ? Math.round(correctChars / 5) : "85";

  const accuracy =
    correctChars === 0 ? 0 : Math.round((correctChars / typedChars) * 100);

  const inputRef = useRef(null);

  const handleReset = function () {
    setUserInput("");
    setTypedChars(0);
    setCorrectChars(0);
    setErrorCount(0);
    inputRef.current?.focus();
    inputRef.value = "";
    mode === "Timed(60s)" && setSeconds(15);
    mode === "Passage" && setSeconds(0);
    setStart(false);
    setShowResults(false);
  };

  function onStart() {
    setStart((start) => !start);
  }

  function handleComplete() {
    setShowResults(true);
  }

  const handleTyping = (e) => {
    const value = e.target.value;

    // Start timer on first keystroke
    // if (!startTime) setStartTime(Date.now());

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
  };

  useEffect(() => {
    handleReset();
  }, [difficulty]);

  useEffect(() => {
    if (!start) return;
    if (mode === "Timed(60s)" && seconds <= 0) {
      handleComplete();
      setStart(false);
      mode === "Timed(60s)" && setSeconds(15);
      mode === "Passage" && setSeconds(0);
      return;
    }

    const timer = setInterval(() => {
      mode === "Timed(60s)" && setSeconds((prev = 10) => prev - 1);
      mode === "Passage" && setSeconds((prev = 0) => prev + 1);
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

  return {
    difficulty,
    setDifficulty,
    mode,
    setMode,
    open,
    setOpen,
    modeOpen,
    setModeOpen,
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
    WPM,
    accuracy,
  };
}
