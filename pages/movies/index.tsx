import apiCall from "@/app/api/apiCall";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { Button } from "@nextui-org/react";
import { useMemo } from "react";
import { useInfiniteQuery } from "react-query";

export default function Movies() {
  const fetchData = async (page: number) => {
    const { data } = await apiCall(`/discover/movie?page=${page}`);
    return data;
  };

  const { data, fetchNextPage, hasNextPage } =
    useInfiniteQuery("Movies", ({ pageParam = 1 }) => fetchData(pageParam), {
      getNextPageParam: (lastPage) => {
        return lastPage.page === lastPage.total_pages
          ? undefined
          : lastPage.page + 1;
      },
    });
  const movieData = useMemo(() => {
    return data?.pages.flat();
  }, [data]);
  console.log(movieData)

  return (
    <>
      <Header />
      <section className="h-full w-full">
        <h1>All movies</h1>
        <Button
          onClick={() => {
            if (hasNextPage) fetchNextPage();
          }}
        >
          Load More Data
        </Button>
      </section>
      <Footer />
    </>
  );
}
