import confettiImage from "../assets/images/pattern-confetti.svg";

function Confetti() {
  return (
    <div className="mt-23 flex h-[60%] overflow-hidden">
      <img src={confettiImage} alt="" />
      <img src={confettiImage} alt="" />
    </div>
  );
}

export default Confetti;
