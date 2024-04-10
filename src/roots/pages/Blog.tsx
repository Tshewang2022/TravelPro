import { FaSearch } from "react-icons/fa";
import { blog1, tour, tour5 } from "../../assets/images";

const Blog = () => {
  return (
    <section>
      <section
        className="flex justify-center items-center min-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${tour})` }}
      >
        <div>
          <h1 className="font-roboto font-bold text-white text-center text-[96px] leading-[120%]">
            Latest Blog
          </h1>
          <h6 className="font-arial font-medium text-[#bdb7b7] text-center text-[32px]">
            Modern & Beautiful Travel Themes
          </h6>
        </div>
      </section>
      {/* === blog catagories === */}
      <section className="py-[240px] bg-white">
        <div className="flex justify-center">
          <div className="max-w-[1920px] flex flex-1 justify-center items-start gap-[64px]">
            <div></div>
            <div
              className="grow bg-cover bg-no-repeat h-[768px] w-full bg-center"
              style={{ backgroundImage: `url(${blog1})` }}
            />
            <div className="w-[678px]">
              <div className="bg-[#f5f5f5]">
                <div className="flex justify-between items-center p-[40px] rounded-[20px]">
                  <input
                    type="text"
                    placeholder="Search"
                    className="p-[30px]"
                  />
                  <div className="p-[30px] bg-[#3fd0d0]">
                    <FaSearch color="white" className="w-[24px] h-[24px]" />
                  </div>
                </div>
              </div>
              <div className="my-[30px] bg-[#f5f5f5] p-[40px]">
                <h4 className="font-roboto font-semibold text-black text-[32px] leading-[120%]">
                  Category
                </h4>
                <hr className="h-[3px] mt-[32px] bg-gray-500" />
                <div className="">
                  <div className="flex justify-between items-center mt-[34px]">
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      Travels
                    </h6>
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      (20)
                    </h6>
                  </div>
                  <div className="flex justify-between items-center mt-[34px]">
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      Camping
                    </h6>
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      (40)
                    </h6>
                  </div>
                  <div className="flex justify-between items-center mt-[34px]">
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      life Style
                    </h6>
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      (10)
                    </h6>
                  </div>
                  <div className="flex justify-between items-center mt-[34px]">
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      Slight Seeing
                    </h6>
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      (20)
                    </h6>
                  </div>{" "}
                  <div className="flex justify-between items-center mt-[34px]">
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      Treking
                    </h6>
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      (90)
                    </h6>
                  </div>
                </div>
              </div>

              {/* === popular post === */}
              <div className="my-[30px] bg-[#f5f5f5] p-[40px]">
                <h4 className="font-roboto font-semibold text-black text-[32px] leading-[120%]">
                  Category
                </h4>
                <hr className="h-[3px] mt-[32px] bg-gray-500" />
                <div className="">
                  <div className="flex justify-between items-center mt-[34px]">
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      Travels
                    </h6>
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      (20)
                    </h6>
                  </div>
                  <div className="flex justify-between items-center mt-[34px]">
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      Camping
                    </h6>
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      (40)
                    </h6>
                  </div>
                  <div className="flex justify-between items-center mt-[34px]">
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      life Style
                    </h6>
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      (10)
                    </h6>
                  </div>
                  <div className="flex justify-between items-center mt-[34px]">
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      Slight Seeing
                    </h6>
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      (20)
                    </h6>
                  </div>{" "}
                  <div className="flex justify-between items-center mt-[34px]">
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      Treking
                    </h6>
                    <h6 className="font-arial font-medium text-black text-[24px] leading-[150%]">
                      (90)
                    </h6>
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

export default Blog;
