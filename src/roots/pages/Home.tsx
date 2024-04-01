import { MdKeyboardArrowDown } from "react-icons/md";
const Home = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-blue-600">
      <div>
        <h2 className="font-roboto font-normal text-white text-[46px] leading-[120%] text-center">
          LET'S TRAVEL THE WORLD WITH US
        </h2>
        <h1 className=" font-roboto font-bold text-white text-[120px] leading-[100%] text-center">
          Travel Top Destination
          <br /> of The World
        </h1>
        <div className="max-w-[1440px] p-[32px] bg-red-200">
          <div className="p-[32px] bg-white flex justify-between items-center ">
            <div className="">Where?</div>
            <div className="flex justify-start items-center gap-[8px]">
              <p>Destination</p>
              <MdKeyboardArrowDown className="w-[24px] h-[24px]" />
            </div>
            <div className="flex justify-start items-center gap-[8px]">
              <p>Guest</p>
              <MdKeyboardArrowDown className="w-[24px] h-[24px]" />
            </div>
            <div className="bg-blue-200 ">Find Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
