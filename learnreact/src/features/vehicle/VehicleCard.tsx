import { useState } from "react";
import { Link } from "react-router-dom";
import { getNameUrl } from "./getImageUrl";

type VehicleCardProps = {
  item: {
    identifier: string;
    country: string;
    images: {
      image: string;
      techtree: string;
    };
    realistic_br: number;
  };
};

function VehicleCard({ item }: VehicleCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <img
        src={item.images.image}
        alt=""
        className="hidden"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(false)}
      />
      {imageLoaded && (
        <Link
          className="box-border flex items-center bg-blue-400 m-3 shadow-md mx-16 animate-fade-in-right animate-duration-300 justify-stretch gap-3 rounded p-3"
          to={getNameUrl(item.identifier).url}
        >
          <img src={item.images.image} alt="" className="w-48 rounded" />
          <div className="flex flex-col gap-1">
            <p className="whitespace-nowrap text-base font-bold">
              {item.identifier}
            </p>
            <p className="text-md">{item.realistic_br}</p>
            <p className="text-sm">{item.country.toUpperCase()}</p>
          </div>
        </Link>
      )}
    </>
  );
}

export default VehicleCard;
