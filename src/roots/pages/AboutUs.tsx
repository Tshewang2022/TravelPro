import { TiTick } from "react-icons/ti";
import {
  about_4,
  about_img,
  aboutus_bg,
  offertext,
  travel,
} from "../../assets/images";
import { LuMoveUpRight } from "react-icons/lu";
import {
  FaToolbox,
  FaHotel,
  FaCompass,
  FaMicrophone,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { logos, teamMembers } from "../../contants";
import { travel_video } from "../../assets/videos";
const AboutUs = () => {
  return (
    // this is the hero section
    <section>
      <div
        className="min-h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${aboutus_bg})` }}
      >
        <div>
          <h2 className="font-roboto font-bold text-white text-center text-[96px] leading-normal">
            About Us
          </h2>
          <h6 className="font-arial font-medium text-[#d7d2d2] text-center text-[32px] ">
            Modern & Beautiful Travel Theme
          </h6>
        </div>
      </div>

      {/* === about us page === */}
      <section className="flex justify-center items-top min-h-[1020px] py-[128px] px-[64px] gap-[64px] ">
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
              <LuMoveUpRight color="white" />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-top h-[1020px] w-[640px]">
          <img src={about_img} alt="about_us" />
        </div>
      </section>

      {/* === offer section === */}
      <section>
        <div
          className="flex justify-evenly items-center gap-[32px] bg-cover bg-no-repeat bg-center py-[140px]"
          style={{ backgroundImage: `url(${travel})` }}
        >
          <div className="flex justify-center items-center">
            <img src={offertext} alt="text" className="w-[600px] h-full" />
          </div>
          <div className="max-w-[768px]">
            <h4 className="font-roboto font-bold text-white text-[66px] leading-normal">
              Last TravelPro Offer
            </h4>
            <h6 className="font-roboto font-semibold text-black text-[32px] mb-[32px]">
              Aerial view of Cape Town with Cape Town Stadium
            </h6>
            <p className="font-arial font-medium text-black text-[24px] leading-[150%] mb-[32px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis cupiditate nostrum sed assumenda, molestiae ipsum porro
              officia accusamus dignissimos explicabo.
            </p>
            <button className="flex justify-start items-center gap-[16px] px-[32px] py-[24px] bg-[#4ED0D0]  rounded-md ">
              <p className="font-arial font-medium text-white text-[24px] items-center">
                Read More
              </p>
              <LuMoveUpRight color="white" />
            </button>
          </div>
        </div>
      </section>

      {/* === why choose us === */}

      <section className="py-[140px]">
        <h4 className="font-roboto font-medium text-[#3fd0d0] text-center text-[46px] leading-normal ">
          WHY CHOOSE US
        </h4>
        <h3 className="font-roboto font-semibold text-black text-center text-[76px]  leading-[130px]">
          Get The Best Travel Experience
        </h3>
        <div className="flex justify-center items-center ">
          <div className="w-[1920px] grid-cols-3 grid gap-[32px]">
            <div className="">
              <div className="max-w-[540px]">
                {/* === 0icons one === */}
                <div className="mb-[64px]">
                  <div className="flex justify-start">
                    <div className="flex justify-center items-center rounded-full p-[30px] border-2 border-gray-500">
                      <FaToolbox
                        color="#3fd0d0"
                        className="w-[40px] h-[40px]"
                      />
                    </div>
                  </div>
                  <h4 className="font-roboto font-medium text-black text-[36px] leading-normal my-[16px]">
                    Set Travel Plan
                  </h4>
                  <p className="font-arial font-normal text-[#717171] text-[20px] leading-[140%]">
                    Distinctively impact client-centered idea via future-proof
                    paradigms
                  </p>
                </div>
                <div className="mb-[64px]">
                  <div className="flex justify-start">
                    <div className="flex justify-center items-center rounded-full p-[30px] border-2 border-gray-500">
                      <FaHotel color="#3fd0d0" className="w-[40px] h-[40px]" />
                    </div>
                  </div>
                  <h4 className="font-roboto font-medium text-black text-[36px] leading-normal my-[16px]">
                    Luxury Hotel
                  </h4>
                  <p className="font-arial font-normal text-[#717171] text-[20px] leading-[140%] ">
                    Distinctively impact client-centered idea via future-proof
                    paradigms
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <img src={about_4} alt="" className="w-full h-full" />
            </div>
            <div className="">
              <div className="max-w-[540px]">
                {/* === 0icons one === */}
                <div className="mb-[64px]">
                  <div className="flex justify-start">
                    <div className="flex justify-center items-center rounded-full p-[30px] border-2 border-gray-500">
                      <FaCompass
                        color="#3fd0d0"
                        className="w-[40px] h-[40px]"
                      />
                    </div>
                  </div>
                  <h4 className="font-roboto font-medium text-black text-[36px] leading-normal my-[16px]">
                    Set Travel Plan
                  </h4>
                  <p className="font-arial font-normal text-[#717171] text-[20px] leading-[140%]">
                    Distinctively impact client-centered idea via future-proof
                    paradigms
                  </p>
                </div>
                <div className="mb-[64px]">
                  <div className="flex justify-start">
                    <div className="flex justify-center items-center rounded-full p-[30px] border-2 border-gray-500">
                      <FaMicrophone
                        color="#3fd0d0"
                        className="w-[40px] h-[40px]"
                      />
                    </div>
                  </div>
                  <h4 className="font-roboto font-medium text-black text-[36px] leading-normal my-[16px]">
                    Luxury Hotel
                  </h4>
                  <p className="font-arial font-normal text-[#717171] text-[20px] leading-[140%] ">
                    Distinctively impact client-centered idea via future-proof
                    paradigms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === travel agent === */}
      <section className="bg-[#ECFEFF] py-[140px]">
        <h6 className="font-roboto font-medium text-[#3ed0f0] text-center text-[46px]">
          TRAVEL AGENTS
        </h6>
        <h4 className="font-roboto font-semibold text-black text-[76px] text-center leading-[130%] mb-[64px]">
          Our Experts Team Member
        </h4>
        <div className="flex md:flex-wrap justify-center items-center gap-[32px]">
          {teamMembers.map((team) => (
            <div
              className="flex justify-center items-center w-[500px] h-[500px] rounded-full  bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${team.imgURL})` }}
            >
              <div className="">
                <h2 className="font-roboto font-semibold text-white text-[32px] text-center">
                  {team.name}
                </h2>
                <h2 className="font-arial font-normal text-white text-center text-[24px]">
                  {team.designations}
                </h2>

                <div className="flex justify-center items-center gap-[8px] mt-[32px]">
                  <div className="rounded-full p-[12px] border-2 border-white">
                    <FaFacebookF className="w-[24px] h-[24px]" color="white" />
                  </div>
                  <div className="rounded-full p-[12px] border-2 border-white">
                    <FaTwitter className="w-[24px] h-[24px]" color="white" />
                  </div>
                  <div className="rounded-full p-[12px] border-2 border-white">
                    <FaInstagram className="w-[24px] h-[24px]" color="white" />
                  </div>
                  <div className="rounded-full p-[12px] border-2 border-white">
                    <FaLinkedin className="w-[24px] h-[24px]" color="white" />
                  </div>
                </div>
                {/* <div className="flex justify-center items-center gap-[16px] mt-[32px]">
                  {team.iconimg.map((icon) => (
                    <div className="rounded-full p-[16px] border-2 border-white  ">
                      <FaLinkedin />
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[120px]">
        <div className="flex justify-center rounded-[40px] px-[32px]">
          <video
            controls
            src={travel_video}
            autoPlay
            loop
            typeof="video/mp4"
            muted
            className="rounded-[40px]"
          ></video>
        </div>
        <div className="flex justify-center items-center pt-[120px]">
          <div className="w-[1920px] flex justify-between items-center gap-[32px]">
            {logos.map((logo) => (
              <img src={logo.imglogo} alt="logos" className="h-[120px]" />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
