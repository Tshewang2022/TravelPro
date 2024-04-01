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
          <div className="max-w-[1440px] p-[32px] bg-red-200 rounded-md">
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
      <section className="flex justify-center items-center">
        <div>
          <img src={about_img} alt="" />
        </div>
        <div>
          <h2>About Us</h2>
          <h1>We are Professional Planners For your</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            maiores, ex laboriosam porro id quibusdam iure nulla aut
            perspiciatis earum.
          </p>
          <h6>Speak to our Destination Experts as Direct Call +15417729038</h6>
          <h6>All places and activites are carefully picked by us</h6>
          <h6>98% Course Completitation Rates</h6>
          <h6>We are an award winning agency</h6>
          <h6>Trusted by mre than 80,000 customers</h6>

          <button>Read More</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
