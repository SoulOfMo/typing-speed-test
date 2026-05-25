function calculateWPM(correctChars, startTime, mode, timeRemining, duration) {
  const elapsedMinutes =
    mode === "Timed(60s)"
      ? (duration - timeRemining) / 60
      : (Date.now() - startTime) / 60000;

  const WPM =
    elapsedMinutes > 0 ? Math.round(correctChars / 5 / elapsedMinutes) : 0;

  return WPM;
}

export default calculateWPM;
