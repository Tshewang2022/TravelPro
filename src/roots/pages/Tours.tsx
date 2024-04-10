import { tour } from "../../assets/images";
import Button from "../../components/Button";

import { tours } from "../../contants";
import { FaGlobe } from "react-icons/fa";

const Tours = () => {
  return (
    <section>
      {/* === hero sections === */}
      <section
        className="flex justify-center items-center min-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${tour})` }}
      >
        <div>
          <h1 className="font-roboto font-bold text-white text-center text-[96px] leading-[120%]">
            Popular Tours Packages
          </h1>
          <h6 className="font-arial font-medium text-[#bdb7b7] text-center text-[32px]">
            Modern & Beautiful Travel Themes
          </h6>
        </div>
      </section>

      {/* === travel packages === */}
      <section className="py-[120px]">
        <div className="flex justify-center items-center">
          <div className="max-w-[1620px] grid grid-cols-3 gap-[30px] ">
            {tours.map((tour) => (
              <div className="bg-white w-[540px]">
                <div
                  className="w-[500px] h-[600px] bg-cover bg-no-repeat p-[16px] "
                  style={{ backgroundImage: `url(${tour.imgURL})` }}
                >
                  <div className="p-[32px] ]">
                    <button className="bg-[#3fd0d0] px-[36px] py-[24px]">
                      <h4 className="font-roboto font-semibold text-white text-[24px]">
                        3 Days 2 Nights
                      </h4>
                    </button>
                  </div>
                </div>
                <div className="p-[30px]">
                  <h4 className="font-roboto font-semibold text-black text-[32px]">
                    {tour.title}
                  </h4>
                  <div className="flex justify-start items-center gap-[16px]">
                    <FaGlobe color="#3fd0d0" className="w-[24px] h-[24px]" />
                    <h4 className="font-roboto font-normal text-[#717171] text-[24px]">
                      {tour.locations}
                    </h4>
                  </div>
                  <hr className="h-[3px] my-[32px]" />
                  <div className="flex justify-between items-center">
                    <h4 className="font-roboto font-semibold text-black text-[32px]">
                      {tour.price}
                    </h4>
                    <Button />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Tours;
