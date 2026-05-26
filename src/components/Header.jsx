import logoLarge from "../assets/images/logo-large.svg";
import logoSmall from "../assets/images/logo-small.svg";
import trophyIcon from "../assets/images/icon-personal-best.svg";

function Header({ bestWpm }) {
  return (
    <div className="m-4 flex items-center justify-between lg:mx-28 lg:mt-8">
      <img src={logoSmall} alt="Trophy" className="block md:hidden" />

      <img src={logoLarge} alt="Trophy" className="hidden md:block" />

      <div className="flex items-center gap-2">
        <img src={trophyIcon} alt="Trophy" />

        <p className="text-md tracking-[-0.6px] text-neutral-400 capitalize sm:text-lg">
          <span className="hidden sm:inline">Personal </span>
          best:
          <span className="text-neutral-0"> {bestWpm} WPM</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
