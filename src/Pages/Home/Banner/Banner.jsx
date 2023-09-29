import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Banner = () => {
  return (
    <>
      <div className="">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper bg-cyan-300"
        >
          <SwiperSlide
            className="bg-cover cursor-grab"
            style={{
              backgroundImage: `url('https://educationnorthwest.org/sites/default/files/graphics/teacher-instruction-ell.png')`,
            }}
          >
            <div className="min-h-[calc(100vh-72px)] bg-gradient-to-r from-emerald-200 to-transparent md:from-transparent md:to-cyan-800 grid grid-cols-12 items-center px-10 xl:px-20">
              <div className="col-span-1 md:col-span-6 lg:col-span-8"></div>
              <div className="space-y-3 col-span-11 md:col-span-6 lg:col-span-4 text-slate-300 font-semibold">
                <p>Your learning store!</p>
                <h2 className="my-title text-cyan-300 !text-6xl">
                  The Ultimate <br /> Best Course
                </h2>
                <p>
                  Delivering smile with Courses. Get your unbeatable fun and
                  learning experience with our creative ideas.
                </p>
                <button className="btn border-none bg-cyan-400 hover:bg-cyan-700">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
