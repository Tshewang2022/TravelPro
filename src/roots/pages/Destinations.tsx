import {
  bannerImg,
  destination1,
  destination2,
  destination3,
  destination4,
  destination5,
} from "../../assets/images";

const Destinations = () => {
  return (
    <section>
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: ` url(${bannerImg})` }}
      >
        <div>
          <h1 className="font-roboto font-bold text-white text-[96px] leading-normal text-center">
            Popular Destination
          </h1>
          <h6 className="font-arial font-medium text-gray-100 text-[32px] leading-normal text-center">
            Modern & Beautiful Travel Theme
          </h6>
        </div>
      </div>

      {/* === destinations === */}
      <section className="py-[120px]">
        <div className="flex justify-center items-center">
          <div className="w-[1690px]">
            <div className="flex flex-1 gap-[32px]">
              <div
                className="bg-green-300 w-[540px] h-[600px] rounded-[20px] flex justify-start items-end"
                style={{ backgroundImage: `url(${destination1})` }}
              >
                <div className="p-[64px]">
                  <h4 className="font-roboto font-semibold text-white text-[46px] text-bottom">
                    Effel Tower
                  </h4>
                  <div className="flex justify-start items-center gap-[16px]">
                    <p className="font-arial font-medium text-white text-[24px]">
                      Paris
                    </p>
                    <p className="font-arial font-medium text-white text-[24px]">
                      24 Trips
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-red-400 grow rounded-[20px] flex justify-start items-end"
                style={{ backgroundImage: `url(${destination2})` }}
              >
                <div className="p-[64px]">
                  <h4 className="font-roboto font-semibold text-white text-[46px] text-bottom">
                    Pryde Mountains
                  </h4>
                  <div className="flex justify-start items-center gap-[16px]">
                    <p className="font-arial font-medium text-white text-[24px]">
                      Prydelands
                    </p>
                    <p className="font-arial font-medium text-white text-[24px]">
                      100 Trips
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[32px] mt-[32px]">
              <div
                className=" w-[540px] h-[600px] rounded-[20px] flex justify-start items-end"
                style={{ backgroundImage: `url(${destination3})` }}
              >
                <div className="p-[64px]">
                  <h4 className="font-roboto font-semibold text-white text-[46px] text-bottom">
                    Lao Landing Island
                  </h4>
                  <div className="flex justify-start items-center gap-[16px]">
                    <p className="font-arial font-medium text-white text-[24px]">
                      Krabal
                    </p>
                    <p className="font-arial font-medium text-white text-[24px]">
                      12 Trips
                    </p>
                  </div>
                </div>
              </div>
              <div
                className=" w-[540px] h-[600px] rounded-[20px] flex justify-start items-end"
                style={{ backgroundImage: `url(${destination4})` }}
              >
                <div className="p-[64px]">
                  <h4 className="font-roboto font-semibold text-white text-[46px] text-bottom">
                    Ton Kwen Temple
                  </h4>
                  <div className="flex justify-start items-center gap-[16px]">
                    <p className="font-arial font-medium text-white text-[24px]">
                      Thailand
                    </p>
                    <p className="font-arial font-medium text-white text-[24px]">
                      20 Trips
                    </p>
                  </div>
                </div>
              </div>
              <div
                className=" w-[540px] h-[600px] rounded-[20px] bg-cover bg-no-repeat flex justify-start items-end"
                style={{ backgroundImage: `url(${destination5})` }}
              >
                <div className="p-[64px]">
                  <h4 className="font-roboto font-semibold text-white text-[46px] text-bottom">
                    Tai Mahal
                  </h4>
                  <div className="flex justify-start items-center gap-[16px]">
                    <p className="font-arial font-medium text-white text-[24px]">
                      India
                    </p>
                    <p className="font-arial font-medium text-white text-[24px]">
                      24 Trips
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 gap-[32px] mt-[32px]">
              <div
                className="grow rounded-[20px] flex justify-start items-end"
                style={{ backgroundImage: `url(${destination4})` }}
              >
                <div className="p-[64px]">
                  <h4 className="font-roboto font-semibold text-white text-[46px] text-bottom">
                    Pryde Mountains
                  </h4>
                  <div className="flex justify-start items-center gap-[16px]">
                    <p className="font-arial font-medium text-white text-[24px]">
                      Paris
                    </p>
                    <p className="font-arial font-medium text-white text-[24px]">
                      24 Trips
                    </p>
                  </div>
                </div>
              </div>
              <div
                className=" w-[540px] h-[600px] rounded-[20px] flex justify-start items-end"
                style={{ backgroundImage: `url(${destination1})` }}
              >
                <div className="p-[64px]">
                  <h4 className="font-roboto font-semibold text-white text-[46px] text-bottom">
                    Effel Tower
                  </h4>
                  <div className="flex justify-start items-center gap-[16px]">
                    <p className="font-arial font-medium text-white text-[24px]">
                      Paris
                    </p>
                    <p className="font-arial font-medium text-white text-[24px]">
                      24 Trips
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Destinations;
