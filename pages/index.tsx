import apiCall from "@/app/api/apiCall";
import { MoviesType } from "@/app/types/popular";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Head from "next/head";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import SplashScreen from "@/app/components/splashScreen";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

export default function Home({
  PopularData,
  TopRatedData,
  NowPlayingData,
}: {
  PopularData: MoviesType[];
  TopRatedData: MoviesType[];
  NowPlayingData: MoviesType[];
}) {
  if (!PopularData.length && !TopRatedData.length && !NowPlayingData.length) {
    return <SplashScreen />;
  }

  return (
    <>
      <Head>
        <title>Movie Website</title>
        <link
          id="favicon"
          rel="shortcut icon"
          href="https://files.readme.io/6dc6435-small-favicon.png"
          type="image/png"
        ></link>
      </Head>

      <section className="w-full h-[100dvh] bg-white flex items-center justify-center relative">
        <Header />
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          className="h-full"
          slidesPerView={1}
          navigation={{ enabled: true }}
          pagination={{
            clickable: true,
            enabled: true,
            bulletActiveClass: "swiper-pagination-bullet-active bg-white",
          }}
          loop={true}
          speed={500}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {PopularData.slice(0, 8).map((data) => (
            <SwiperSlide
              key={data.id}
              style={{
                backgroundImage: ` linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("https://image.tmdb.org/t/p/original${data.backdrop_path}")`,
              }}
              className="text-white bg-cover bg-blend-darken"
            >
              {({ isActive }) => (
                <div className="h-full flex items-center justify-between w-[80%] mx-auto">
                  {isActive && (
                    <>
                      <div>
                        <motion.h2
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="text-5xl mb-4"
                        >
                          {data.title}
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="text-sm mb-4 w-[600px]"
                        >
                          {data.overview.substring(0, 150)}...
                        </motion.p>
                        <Button
                          as={Link}
                          href={`/movie/${data.id}`}
                          color="primary"
                        >
                          Watch Movie
                        </Button>
                      </div>

                      <div className="relative">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, delay: 0.4 }}
                          className="p-1 w-28 absolute left-[-30px] top-[-20px] z-20 rounded flex items-center justify-between"
                        >
                          <img
                            className="rounded"
                            src="https://mobomovies.online/img/imdb.png"
                          />
                          <div className="bg-[rgba(0,0,0,.8)] rounded px-2">
                            {data.vote_average.toFixed(1)} / 10
                          </div>
                        </motion.div>
                        <motion.img
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                          className="w-[300px] rounded"
                        />
                      </div>
                    </>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="bg-gray-950 h-fit py-4 flex-col items-center justify-center">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center justify-center mb-7">
            <img
              className="rounded mr-2"
              src="https://mobomovies.online/img/imdb.png"
            />
            <h2 className="text-center text-3xl">Top Rated: </h2>
          </div>
          <Swiper
            modules={[Autoplay]}
            className="h-fit"
            slidesPerView={6}
            loop={true}
            speed={500}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
          >
            {TopRatedData.map((data) => (
              <SwiperSlide className="mb-4" key={data.id}>
                {() => (
                  <div className="flex group flex-col items-center w-48">
                    <img
                      src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                      className="w-full h-full rounded group-hover:transform-gpu group-hover:scale-125 transition-all "
                    />
                    <div className="text-center text-sm">{data.title}</div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <Button as={Link} href="/movies" color="primary">
            Explore All
          </Button>
        </div>
      </section>

      <section className="bg-gray-950 h-fit py-4 flex-col items-center justify-center">
        <div className="w-[90%] mx-auto">
          <div className="flex items-center justify-center mb-7">
            <h2 className="text-center text-3xl">Weekly Trends: </h2>
          </div>
          <Swiper
            modules={[Autoplay]}
            className="h-fit justify-center items-center flex"
            slidesPerView={3}
            loop={true}
            speed={500}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
          >
            {NowPlayingData.slice(0, 5).map((data) => (
              <SwiperSlide className="mb-4" key={data.id}>
                {() => (
                  <div className="flex group flex-col items-center w-96">
                    <img
                      src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                      className="w-full h-full rounded group-hover:transform-gpu group-hover:scale-125 transition-all "
                    />
                    <div className="text-center text-sm">{data.name}</div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <Button as={Link} href="/movies" color="primary">
            Explore All
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const { data: PopularData } = await apiCall.get("/movie/popular");
  const { data: TopRatedData } = await apiCall.get("/movie/top_rated");
  const { data: NowPlayingData } = await apiCall.get("/trending/tv/week");

  return {
    props: {
      PopularData: PopularData.results,
      TopRatedData: TopRatedData.results,
      NowPlayingData: NowPlayingData.results,
    },
  };
};
