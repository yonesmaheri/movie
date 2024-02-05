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
import SearchIcon from "@/app/icons/SearchIcon";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import GithubIcon from "@/app/icons/GithubIcon";

export default function Home({
  PopularData,
  TopRatedData,
  NowPlayingData,
}: {
  PopularData: MoviesType[];
  TopRatedData: MoviesType[];
  NowPlayingData: MoviesType[];
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
        <header className="absolute top-4 left-10 right-10 h-12 z-10 flex items-center justify-between">
          <div>
            <img
              className="w-36"
              src="https://files.readme.io/29c6fee-blue_short.svg"
            />
          </div>
          <nav>
            <ul className="flex list-none">
              <li className="mx-5">
                <Link href={"/"}> Home </Link>
              </li>
              <li className="mx-5">
                <Link href={"/"}> TV Series </Link>
              </li>
              <li className="mx-5">
                <Link href={"/"}> Movies </Link>
              </li>
              <li className="mx-5">
                <Link href={"/"}> About Me </Link>
              </li>
            </ul>
          </nav>
          <div>
            <Button isIconOnly color="primary" onClick={onOpen}>
              <SearchIcon />
            </Button>
          </div>
        </header>
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
          {PopularData.map((data) => (
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
                          as={motion.button}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
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
          <Button as={Link} href="/" color="primary">
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
          <Button as={Link} href="/" color="primary">
            Explore All
          </Button>
        </div>
      </section>

      <footer className="bg-gray-950 h-fit py-4 flex-col items-center justify-center">
        <div className="w-[90%] mx-auto rounded bg-gray-800 py-2 px-4">
          <div className="text-center">
            Developed by NextJs <br />
            Developer :{" "}
            <Link
              className="text-blue-500"
              href={"mailto:yonesmaheri80@gmail.com"}
            >
              Yones Maheri
            </Link>
          </div>
          <nav className="text-center flex items-center justify-center">
            <Link href={"https://github.com/yonesmaheri"}>
              <GithubIcon />
            </Link>
          </nav>
        </div>
      </footer>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
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
