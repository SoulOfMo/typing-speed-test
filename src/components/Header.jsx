import logoLarge from "../assets/images/logo-large.svg";
import logoSmall from "../assets/images/logo-small.svg";
import trophyIcon from "../assets/images/icon-personal-best.svg";

function Header({WPM}) {
  return (
    <div className="m-4 lg-mt-8 lg:mx-28 flex justify-between items-center">
      <img src={logoSmall} alt="Trophy" className="block md:hidden" />

      <img src={logoLarge} alt="Trophy" className="hidden md:block" />

      <div className="flex items-center gap-2">
        <img src={trophyIcon} alt="trophyIcon" />

        <p className="capitalize text-(--neutral-400) text-md sm:text-lg tracking-[-0.6px]">
          <span className="hidden sm:inline">Personal </span>
          best:
          <span className=" text-(--neutral-0)"> {WPM} WPM</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
