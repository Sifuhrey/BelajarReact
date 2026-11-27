import VehicleCard from "./VehicleCard";
import { useQuery } from "@tanstack/react-query";
import fetchVehicles from "./fetchVehicle";

type PropsCardProps = {
  country: string;
  type: string;
};

function VehicleList({ country, type }: PropsCardProps) {
  const {
    data: vehicles = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["vehicles", country, type],
    queryFn: () => fetchVehicles(country, type),
  })
  if (isPending) {
    return <div className="flex items-center justify-center h-screen gap-4 bg-blue-300">
      <p className=" text-3xl">Loading page…</p>
      <div className="w-8 h-8 border-4 border-blue-500
                        border-t-transparent rounded-full 
                        animate-spin">
      </div>
    </div>
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  if (vehicles.length === 0) {
    return <div className="flex items-center justify-center h-screen gap-4 bg-blue-300">
      <p className=" text-3xl">No vehicles found for {country} - {type}</p>
    </div>
  }
  return (
    <div className="flex w-full flex-col gap-4">
      {vehicles.map((item) => (
        <VehicleCard
          key={`${item.identifier}-${item.images.image}`}
          item={item}
        />
      ))}
    </div>
  );
}
export default VehicleList;
