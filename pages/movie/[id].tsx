import apiCall from "@/app/api/apiCall";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { SingleMovie } from "@/app/types/movie";
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import { Button, Chip, Divider } from "@nextui-org/react";
import Link from "next/link";

export default function SingleMovie({
  SingleMovieData,
}: {
  SingleMovieData: SingleMovie;
}) {
  console.log(SingleMovieData);
  return (
    <>
      <Head>
        <title>{SingleMovieData.title}</title>
      </Head>

      <Header />
      <div
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("https://image.tmdb.org/t/p/original${SingleMovieData.backdrop_path}")`,
        }}
        className={`h-[100dvh] flex items-center justify-between w-full mx-auto bg-cover`}
      >
        <div className="w-[80%] mx-auto flex justify-between items-center">
          {/* movie data */}
          <div className="w-full">
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-5xl"
              >
                {SingleMovieData.title}
              </motion.h2>
              {/** imdb logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="ml-4 p-1 rounded flex items-center justify-between"
              >
                <img
                  className="rounded"
                  src="https://mobomovies.online/img/imdb.png"
                />
                <div className="bg-[rgba(0,0,0,.8)] rounded px-2">
                  {SingleMovieData.vote_average.toFixed(1)} / 10 of{" "}
                  {SingleMovieData.vote_count} Votes
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-md mb-4 flex"
            >
              <p>
                Release date :{SingleMovieData.release_date.replace(/-/g, "/")}
              </p>
              <Divider orientation="vertical" className="mx-4 bg-blue-500" />
              <span>Duration : {SingleMovieData.runtime} Minutes</span>
            </motion.div>
            <motion.div
              className="flex items-center justify-start mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {SingleMovieData.genres.map((item,index) => (
                <Chip key={index} color="primary" className="mr-2" variant="flat">
                  {item.name}
                </Chip>
              ))}
            </motion.div>
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="mr-2">Production from :</span>
              {SingleMovieData.production_countries.map((item,index) => (
                <Chip key={index} color="warning" className="mr-2" variant="bordered">
                  {item.name}
                </Chip>
              ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg mb-4 w-[600px]"
            >
              {SingleMovieData.overview}
            </motion.p>
            <Button
              color="primary"
              as={Link}
              href={`https://imdb.com/title/${SingleMovieData.imdb_id}`}
            >
              Go to movies IMDB page
            </Button>
          </div>

          {/* movie image */}
          <div className="relative">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              src={`https://image.tmdb.org/t/p/w500${SingleMovieData.poster_path}`}
              className="w-[500px] rounded"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export const getServerSideProps = async ({ params }: any) => {
  const { id } = params;
  const { data: SingleMovie } = await apiCall.get(`/movie/${id}`);

  return {
    props: {
      SingleMovieData: SingleMovie,
    },
  };
};
