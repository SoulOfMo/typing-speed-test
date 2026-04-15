import Header from "./components/Header";
import ResultsModal from "./components/ResultsModal";
import StatsBar from "./components/StatsBar";
import TypingArea from "./components/TypingArea";
import {useTypingTest} from "./utils/typingtest";

function App() {
  const typingTest = useTypingTest();
  const {showResults} = typingTest;
  return (
    // m-4 lg:mt-8 lg:mx-28
    <main className="transition-all duration-300 ease-in-out">
      <Header {...typingTest} />

      {!showResults && (
        <>
          <StatsBar {...typingTest} />
          <TypingArea {...typingTest} />
        </>
      )}

      {showResults && <ResultsModal {...typingTest} />}
    </main>
  );
}

export default App;
