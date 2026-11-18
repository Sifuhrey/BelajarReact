import { Link } from "react-router-dom";
import { propsData } from "./PropsData";
import { getImageUrl } from "./getImageUrl";

type PropsCardProps = {
  nation: string;
};

function PropsCard({ nation }: PropsCardProps) {
  const nationTank =
    nation === "All"
      ? propsData
      : propsData.filter((vehicle) => vehicle.nation === nation);
  const listItems = nationTank.map((item) => (
    <Link
      key={item.identifier}
      className="box-border flex  items-center  bg-blue-400 m-3 shadow-md mx-16  animate-fade-in-right animate-duration-300  justify-stretch gap-3 rounded  p-3"
      to={getImageUrl(item).url}
    >
      <img src={getImageUrl(item).img} alt="" className="w-48 rounded" />
      <div className="flex flex-col gap-1">
        <p className="whitespace-nowrap text-base font-bold">{item.name}</p>
        <p className="text-sm">{item.nation}</p>
      </div>
    </Link>
  ));
  return <div className="flex w-full flex-col gap-4">{listItems}</div>;
}
export default PropsCard;
