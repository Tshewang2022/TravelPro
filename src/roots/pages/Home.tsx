import { MdKeyboardArrowDown } from "react-icons/md";
import { about_img } from "../../assets/images";
import { LuMoveRight } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import { packages, supports } from "../../contants";
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
      <section className="flex justify-center items-top min-h-[1020px] py-[128px] px-[64px] gap-[64px] ">
        <div className="flex justify-center items-top h-[1020px] w-[640px]">
          <img src={about_img} alt="about_us" />
        </div>
        <div className="flex justify-center items-top">
          <div>
            <h2 className="font-roboto font-normal text-[#4ED0D0] text-[40px] leading-[120%] mb-[32px]">
              About Us
            </h2>
            <h1 className="font-roboto font-medium text-black text-[76px] leading-[120%] max-w-[640px]">
              We are Professional Planners For your
            </h1>
            <p className="font-arial font-normal pl-[64px] text-[24px] leading-[150%] max-w-[768px] mt-[40px] text-[#717171] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              maiores, ex laboriosam porro id quibusdam iure nulla aut
              perspiciatis earum.
            </p>
            <h6 className="font-arial font-semibold text-[24px] pl-[64px] text-[#4ED0D0] mt-[32px] max-w-[768px] mb-[64px]">
              Speak to our Destination Experts as Direct Call +15417729038
            </h6>
            <div className="flex justify-start items-start gap-[16px] my-[32px]">
              <div className="p-[8px] bg-[#4ED0D0] rounded-full">
                <TiTick className="w-[24px] h-[24px]" color="white" />
              </div>
              <h6 className="font-arial font-normal text-[#535151] text-[24px]">
                All places and activites are carefully picked by us
              </h6>
            </div>
            <div className="flex justify-start items-start gap-[16px] my-[32px]">
              <div className="p-[8px] bg-[#4ED0D0] rounded-full">
                <TiTick className="w-[24px] h-[24px]" color="white" />
              </div>
              <h6 className="font-arial font-normal text-[#535151] text-[24px] ">
                All places and activites are carefully picked by us
              </h6>
            </div>
            <div className="flex justify-start items-start gap-[16px] my-[32px]">
              <div className="p-[8px] bg-[#4ED0D0] rounded-full">
                <TiTick className="w-[24px] h-[24px]" color="white" />
              </div>
              <h6 className="font-arial font-normal text-[#535151] text-[24px] ">
                All places and activites are carefully picked by us
              </h6>
            </div>
            <div className="flex justify-start items-start gap-[16px] mt-[32px] mb-[120px] ">
              <div className="p-[8px] bg-[#4ED0D0] rounded-full">
                <TiTick className="w-[24px] h-[24px]" color="white" />
              </div>
              <h6 className="font-arial font-normal text-[#535151] text-[24px] ">
                All places and activites are carefully picked by us
              </h6>
            </div>
            <button className="flex justify-start items-center gap-[16px] px-[32px] py-[24px] bg-[#4ED0D0]  rounded-md ">
              <p className="font-arial font-medium text-white text-[24px] items-center">
                Read More
              </p>
              <LuMoveRight color="white" />
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#DBF4F9] w-full min-h-[922px] flex items-center justify-center">
        <div className="flex justify-center items-center gap-[32px]">
          {supports.map((support) => (
            <>
              <div className="max-w-[440px]">
                <div className="p-[32px] flex justify-center items-center mb-[32px]">
                  <div className="bg-white p-[46px] rounded-xl">
                    <img
                      src={support.imgURL}
                      alt="image"
                      width={80}
                      height={76}
                    />
                  </div>
                </div>
                <h2 className="font-roboto font-medium text-[32px] text-center leading-[100%] mb-[18px]">
                  {support.title}
                </h2>
                <p className="font-arial font-normal text-[24px] text-[#717171] text-center leading-[160%]">
                  {" "}
                  {support.descriptions}
                </p>
              </div>
            </>
          ))}
        </div>
      </section>
      {/* === packages section === */}
      <section className="py-[220px]">
        <h2 className="font-roboto font-normal text-[46px] text-center text-[#2ec4e1] leading-normal">
          CHOOSE YOUR PACKAGES
        </h2>
        <h1 className="font-roboto font-medium text-[76px] text-center leading-normal">
          Popular Tours Packages
        </h1>
        <div className="flex justify-center md:flex-wrap gap-[32px] mt-[64px]">
          {packages.map((pack) => (
            <div
              style={{ backgroundImage: `url(${pack.imgURL})` }}
              className="flex items-end justify-center min-h-[640px] min-w-[420px] bg-no-repeat bg-cover rounded-md"
            >
              <div className="px-[32px] pb-[56px]">
                <div className="flex gap-[16px] justify-start items-center">
                  <p className="font-arial font-medium text-white text-[20px]">
                    {pack.location}
                  </p>
                  <p className="font-arial font-medium text-white text-[20px]">
                    {pack.days}
                  </p>
                </div>
                <p className="font-arial font-medium text-white text-[20px] mb-[16px]">
                  {pack.rating}
                </p>
                <h4 className="font-arial font-medium text-white text-[32px] mb-[16px]">
                  {pack.title}
                </h4>
                <div className="flex justify-start items-center gap-[16px]">
                  <button className="py-[16px] px-[32px] bg-[#4ED0D0] text-white font-semibold text-[24px] rounded-md">
                    Book Now
                  </button>

                  <h4 className="font-roboto font-bold text-white text-[32px]">
                    {pack.price}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === travel point === */}
      <section>
        <div className="flex justify-center items-center gap-[32px]">
          <div>img</div>
          <div className="max-w-[768px]">
            <h4 className="font-roboto font-medium text-[32px] text-[#4ED0D0]">
              TRAVEL POINT
            </h4>
            <h1 className="font-roboto font-semibold text-[76px] leading-[120%]">
              Discover The World
              <br /> With Our Guide
            </h1>
            <p className="font-arial font-normal text-[#717171] text-[20px] leading-[160%]">
              Contray to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature form 45BC
            </p>
            <div>mapping</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
