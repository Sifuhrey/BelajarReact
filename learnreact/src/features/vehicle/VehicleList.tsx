import VehicleCard from "./VehicleCard";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import fetchVehicles from "./fetchVehicle";
import {  useState } from "react";

type PropsCardProps = {
  country: string;
  type: string;
};

function VehicleList({ country, type }: PropsCardProps) {
  const [page, setPage] = useState(0);
 
  const {
    data,
    isPending,
    isError,
    error,
    isFetching,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["vehicles", country, type, page],
    queryFn: () => fetchVehicles(country, type, page),
    placeholderData: keepPreviousData,
  })
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
      ) : data.length === 0 ? (
        <div className="flex items-center justify-center h-screen gap-4 bg-blue-300">
          <p className=" text-3xl">No vehicles found for {country} - {type}</p>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-4">
          {data.map((item) => (
            <VehicleCard
              key={`${item.identifier}-${item.images.image}`}
              item={item}
            />
          ))}
        </div>
      )
    }
      <div className="flex items-center justify-center gap-4 p-4">
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}
        className="bg-gray-300 hover:bg-gray-400 disabled:opacity-50 p-1 rounded-lg border"
        >
        Previous Page
      </button>
        {isFetching ? <span> Loading...</span> : <span>Current Page: {page + 1}</span>}
      <button
        onClick={() => {
          if (!isPlaceholderData  ) {
            setPage((old) => old + 1);
          }
        }}
        disabled={isPlaceholderData }
        className="bg-gray-300 hover:bg-gray-400 disabled:opacity-50 p-1 rounded-lg border"
      >
        Next Page
      </button>
        
      </div>

    </>
  )

}
export default VehicleList;
