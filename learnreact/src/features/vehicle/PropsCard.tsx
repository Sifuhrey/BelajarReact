import VehicleCard from "./VehicleCard";
import { useEffect, useState } from "react";

type PropsCardProps = {
  country: string;
  type: string;
};

type Vehicle = {
  identifier: string;
  country: string;
  images: {
    image: string;
    techtree: string;
  };
  realistic_br: number;
};



function PropsCard({ country, type }: PropsCardProps) {
  const [countryState, setCountryState] = useState<Vehicle[]>([]);
  useEffect(() => {
    fetch(`https://wtvehiclesapi.duckdns.org/api/vehicles?limit=200&page=0&country=${country}&type=${type}&isPremium=false&isPack=false&isSquadronVehicle=false&isOnMarketplace=false&excludeKillstreak=true&excludeEventVehicles=true`)
      .then((response) => { return response.json() })
      .then((data) => {
        console.log(data);
        setCountryState(data);
      })


  }, [country, type]);

  const listItems = countryState.map((item) => (
    <VehicleCard key={`${item.identifier}-${item.images.image}`} item={item} />
  ));
  return <div className="flex w-full flex-col gap-4">{listItems}</div>;
}
export default PropsCard;
