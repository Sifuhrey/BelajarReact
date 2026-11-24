import VehicleCard from "./VehicleCard";
import { useEffect, useState } from "react";
import type { Vehicle } from "./Vehicle";

type PropsCardProps = {
  country: string;
  type: string;
};

function VehicleList({ country, type }: PropsCardProps) {
  const [countryState, setCountryState] = useState<Vehicle[]>([]);
  useEffect(() => {
    // Fetch data from the API
    const urls = [
      `https://wtvehiclesapi.duckdns.org/api/vehicles?limit=200&page=0&country=${country}&type=${type}&isPremium=false&isPack=false&isSquadronVehicle=false&isOnMarketplace=false&excludeKillstreak=true&excludeEventVehicles=true`,
      `https://wtvehiclesapi.duckdns.org/api/vehicles?limit=200&page=0&country=${country}&type=${type}&isPremium=true&isPack=false&isSquadronVehicle=false&isOnMarketplace=false&excludeKillstreak=true&excludeEventVehicles=true`,
      `https://wtvehiclesapi.duckdns.org/api/vehicles?limit=200&page=0&country=${country}&type=${type}&isPremium=false&isPack=false&isSquadronVehicle=false&isOnMarketplace=true&excludeKillstreak=true&excludeEventVehicles=true`,
      `https://wtvehiclesapi.duckdns.org/api/vehicles?limit=200&page=0&country=${country}&type=${type}&isPremium=true&isPack=true&isSquadronVehicle=false&isOnMarketplace=false&excludeKillstreak=true&excludeEventVehicles=true`,
    ]
    Promise.all(urls.map((url) => fetch(url).then((response) => response.json())))
      .then((results) => {
        const vehicles = results.flat();
        const sortedData = vehicles.sort((a, b) => a.realistic_br - b.realistic_br);
        setCountryState(sortedData);
      });
  }, [country, type]);

  return <div className="flex w-full flex-col gap-4">{
    countryState.map((item) => (
      <VehicleCard key={`${item.identifier}-${item.images.image}`} item={item} />
    ))
  }</div>;
}
export default VehicleList;
