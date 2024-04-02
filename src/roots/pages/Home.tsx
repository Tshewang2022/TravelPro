import { MdKeyboardArrowDown } from "react-icons/md";
import { about_img } from "../../assets/images";
const Home = () => {
  return (
    <div>
      {/* === hero section === */}
      <section className="w-full min-h-screen flex justify-center items-center bg-blue-600">
        <div>
          <h2 className="font-roboto font-normal text-white text-[46px] leading-[120%] text-center">
            LET'S TRAVEL THE WORLD WITH US
          </h2>
          <h1 className=" font-roboto font-bold text-white text-[120px] leading-[100%] text-center">
            Travel Top Destination
            <br /> of The World
          </h1>
          <div className="max-w-[1440px] p-[32px] bg-red-200 bg-opacity-30 rounded-md">
            <div className=" bg-white flex justify-between items-center gap-[32px] rounded-md">
              <div className="w-full border-2 border-gray-200 p-[32px]">
                <h3 className="font-normal text-[#717171] text-[20px]">
                  {" "}
                  Where?
                </h3>
              </div>
              <div className="flex justify-start items-center gap-[8px] w-full ">
                <p className="font-normal text-[#717171] text-[20px]">
                  Destination
                </p>
                <MdKeyboardArrowDown className="w-[24px] h-[24px]" />
              </div>
              <div className="flex justify-start items-center gap-[8px] w-full border-2 border-gray-200 p-[32px]">
                <p className="font-normal text-[#717171] text-[20px]">Guest</p>
                <MdKeyboardArrowDown className="w-[24px] h-[24px]" />
              </div>
              <div className="w-full">
                <h3 className="font-roboto font-semibold text-black text-[20px] leading-normal">
                  Find Now
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === about-us section === */}
      <section className="flex justify-center items-top min-h-[980px] py-[128px] px-[64px] gap-[64px]">
        <div className="flex justify-center items-top h-[1080px] w-[640px]">
          <img src={about_img} alt="" />
        </div>
        <div className="flex justify-center items-top">
          <div>
            <h2 className="font-roboto font-normal text-[#4ED0D0] text-[40px] leading-[120%]">
              About Us
            </h2>
            <h1 className="font-roboto font-medium text-black text-[76px] leading-[120%] max-w-[640px]">
              We are Professional Planners For your
            </h1>
            <p className="font-arial font-normal pl-[64px] text-[24px] leading-[150%] max-w-[768px] mt-[40px] text-[#717171]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              maiores, ex laboriosam porro id quibusdam iure nulla aut
              perspiciatis earum.
            </p>
            <h6 className="font-arial font-semibold text-[24px] pl-[64px] text-[#4ED0D0] mt-[32px] max-w-[768px]">
              Speak to our Destination Experts as Direct Call +15417729038
            </h6>
            <h6 className="font-arial font-normal text-[#535151] text-[24px] mt-[32px]">
              All places and activites are carefully picked by us
            </h6>
            <h6 className="font-arial font-normal text-[#535151] text-[24px] mt-[16px]">
              98% Course Completitation Rates
            </h6>
            <h6 className="font-arial font-normal text-[#535151] text-[24px] mt-[16px]">
              We are an award winning agency
            </h6>
            <h6 className="font-arial font-normal text-[#535151] text-[24px] mt-[16px] mb-[32px] ">
              Trusted by mre than 80,000 customers
            </h6>
            <button className="px-[32px] py-[16px] bg-[#4ED0D0]  rounded-md">
              <p className="font-arial font-medium text-white text-[24px] items-center">
                Read More
              </p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
