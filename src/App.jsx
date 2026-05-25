/* eslint-disable no-unused-vars */
import Header from "./components/Header";
import ResultsModal from "./components/ResultsModal";
import StatsBar from "./components/StatsBar";
import TypingArea from "./components/TypingArea";
import { useTypingTest } from "./utils/typingtest";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const typingTest = useTypingTest();
  const { showResults } = typingTest;
  return (
    <main className="h-svh">
      <Header {...typingTest} />

      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="typing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <StatsBar {...typingTest} />
            <TypingArea {...typingTest} />
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ResultsModal {...typingTest} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
