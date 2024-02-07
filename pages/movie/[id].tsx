import apiCall from "@/app/api/apiCall";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { SingleMovie } from "@/app/types/movie";
import Head from "next/head";
import React from "react";

export default function SingleMovie({
  SingleMovieData,
}: {
  SingleMovieData: SingleMovie;
}) {
  return (
    <>
      <Head>
        <title>{SingleMovieData.title}</title>
      </Head>

      <Header/>
      
      <Footer/>
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
