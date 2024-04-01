import { logo } from "../assets/icons";
import { navlinks } from "../contants";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between gap-[32px] items-center  border-2 border-gray-400 px-[32px] bg-[#003360] py-[32px]">
        <div className="flex  jusitfy-start items-center gap-[32px]">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex gap-[32px] justify-center items-center">
          {navlinks.map((nav) => (
            <a
              href="#"
              className="font-roboto font-semibold leading-normal text-[30px] text-white "
            >
              {nav.title}
            </a>
          ))}
        </div>
        <div>
          <h1 className="font-roboto font-semibold text-white text-[30px]">
            +975-11760818
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
