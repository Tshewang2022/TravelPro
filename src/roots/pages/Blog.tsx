import { FaSearch } from "react-icons/fa";
import { blog1, blog2, blog3, tour } from "../../assets/images";
import { FaArrowRight } from "react-icons/fa6";

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
            {/* === left section === */}
            {/* <div
              className="grow bg-cover bg-no-repeat h-[768px] w-full bg-center"
              style={{ backgroundImage: `url(${blog1})` }}
            ></div> */}

            <div className="grow max-w-[1080px]">
              <div className="mb-[64px]">
                <img src={blog1} alt="blog-post" className="w-full" />
                <div>
                  <h4 className="font-roboto font-normal text-[#3fd0d0] text-[32px] leading-normal">
                    <span>Feb 03, 2024 | By JOHN ALEX</span>
                  </h4>
                  <h1 className="font-roboto font-semibold text-black text-[46px] leading-[120%] my-[32px]">
                    EazyPNR is the only Theme you will ever need
                  </h1>
                  <p className="font-arial font-normal text-[#717171] text-[20px] text-start mb-[32px]">
                    Globally coordinate user friendly interfaces throug 24/365
                    niche markets. Seamlessly supply accurate human capital with
                    corpate e-marktes. Efficiently architect enterprise-wide
                    platforms after error-free process are compeltely
                    envisionerr marktet-driven e-markter through
                  </p>
                  <div className="flex justify-start items-center gap-[16px]">
                    <h4 className="font-arial font-semibold text-black text-[26px] ">
                      Continue Reading
                    </h4>
                    <FaArrowRight className="h-[32px] w-[46px]" />
                  </div>
                </div>
              </div>
              <div className="">
                <img src={blog2} alt="blog-post" className="w-full" />
                <div>
                  <h4 className="font-roboto font-normal text-[#3fd0d0] text-[32px] leading-normal">
                    <span>Feb 03, 2024 | By JOHN ALEX</span>
                  </h4>
                  <h1 className="font-roboto font-semibold text-black text-[46px] leading-[120%] my-[32px]">
                    EazyPNR is the only Theme you will ever need
                  </h1>
                  <p className="font-arial font-normal text-[#717171] text-[20px] text-start mb-[32px]">
                    Globally coordinate user friendly interfaces throug 24/365
                    niche markets. Seamlessly supply accurate human capital with
                    corpate e-marktes. Efficiently architect enterprise-wide
                    platforms after error-free process are compeltely
                    envisionerr marktet-driven e-markter through
                  </p>
                  <div className="flex justify-start items-center gap-[16px]">
                    <h4 className="font-arial font-semibold text-black text-[26px] ">
                      Continue Reading
                    </h4>
                    <FaArrowRight className="h-[32px] w-[46px]" />
                  </div>
                </div>
                <div className="my-[64px]">
                  <img src={blog3} alt="blog-post" className="w-full" />
                  <div>
                    <h4 className="font-roboto font-normal text-[#3fd0d0] text-[32px] leading-normal">
                      <span>Feb 03, 2024 | By JOHN ALEX</span>
                    </h4>
                    <h1 className="font-roboto font-semibold text-black text-[46px] leading-[120%] my-[32px]">
                      EazyPNR is the only Theme you will ever need
                    </h1>
                    <p className="font-arial font-normal text-[#717171] text-[20px] text-start mb-[32px]">
                      Globally coordinate user friendly interfaces throug 24/365
                      niche markets. Seamlessly supply accurate human capital
                      with corpate e-marktes. Efficiently architect
                      enterprise-wide platforms after error-free process are
                      compeltely envisionerr marktet-driven e-markter through
                    </p>
                    <div className="flex justify-start items-center gap-[16px]">
                      <h4 className="font-arial font-semibold text-black text-[26px] ">
                        Continue Reading
                      </h4>
                      <FaArrowRight className="h-[32px] w-[46px]" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-[16px]">
                  <div className=" bg-[#3fd0d0] w-[68px] h-[68px] flex justify-center items-center rounded-full">
                    <h2 className="text-white text-[32px]">1</h2>
                  </div>
                  <div className=" bg-gray-200 w-[68px] h-[68px] flex justify-center items-center rounded-full">
                    <h2 className="text-black text-[32px]">2</h2>
                  </div>
                  <div className=" bg-gray-200 w-[68px] h-[68px] flex justify-center items-center rounded-full">
                    <h2 className="text-black text-[32px]">3</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* === right section === */}
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
                  Popular Post
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
                  Tag Cloud
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
