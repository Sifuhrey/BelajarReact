import VehicleCard from "./VehicleCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import fetchVehicles from "./fetchVehicle";
// import { Fragment } from "react";

type PropsCardProps = {
  country: string;
  type: string;
};

function VehicleList({ country, type }: PropsCardProps) {
  const {
    data,
    isPending,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["vehicles", country, type],
    queryFn: ({ pageParam }) => fetchVehicles(country, type, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length : undefined,
  });
  const vehicles = data?.pages
    .flat()
    .sort((a, b) => a.realistic_br - b.realistic_br) ?? [];

  return (
    <>{
      isPending ? (
        <div className="flex items-center justify-center h-screen gap-4 bg-blue-300">
          <p className=" text-3xl">Loading page…</p>
          <div className="w-8 h-8 border-4 border-blue-500
                        border-t-transparent rounded-full 
                        animate-spin">
          </div>
        </div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <div className="flex w-full flex-col gap-4">
            {vehicles.map((item) => (
              <VehicleCard
                key={`${item.identifier}-${item.images.image}`}
                item={item}
              />
            ))}
          </div>
          {/* <div className="flex w-full flex-col gap-4">
            {data.pages.map((group, i) => (
              <Fragment key={i}>
                {group.map((item) => (
                  <VehicleCard
                    key={`${item.identifier}-${item.images.image}`}
                    item={item}
                  />
                ))}
              </Fragment>
            ))}
          </div> */}
          <div>
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  disabled:cursor-not-allowed mb-2"
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                  ? "Load More"
                  : "Nothing more to load"}
            </button>
          </div>
        </>
      )
    }
    </>
  )
}
export default VehicleList;
