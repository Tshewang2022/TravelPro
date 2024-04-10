import { footerlinks } from "../contants";
import { footer } from "../assets/images";

const Footer = () => {
  return (
    <footer>
      <div
        className="h-[820px] bg-cover bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: `url(${footer})` }}
      >
        <div className="flex justify-center  items-center">
          <div className="flex justify-between items-center w-[1440px]">
            {footerlinks.map((link) => (
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-roboto font-semibold text-[36px] text-white">
                    {link.title}
                  </h2>
                  <div className="flex justify-between items-center gap-[32px]">
                    <h2 className="font-roboto font-normal text-white text-[24px] leading-normal ">
                      {link.routes1.map((route1) => (
                        <h1 className="my-[32px]">{route1.link}</h1>
                      ))}
                    </h2>
                    <h2 className="font-roboto font-normal text-white text-[24px] leading-normal">
                      {link.routes2.map((route2) => (
                        <h1 className="my-[32px]">{route2.link}</h1>
                      ))}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
