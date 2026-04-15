import confettiImage from "../assets/images/pattern-confetti.svg";

function Confetti() {
  return (
    <div className="mt-23 h-[60%] flex overflow-hidden">
      <img src={confettiImage} alt="Confetti" />
      <img src={confettiImage} alt="Confetti" />
    </div>
  );
}

export default Confetti;
