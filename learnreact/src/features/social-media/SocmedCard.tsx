import { Link } from "react-router-dom";
import { socmedData } from "./SocmedData";

function SocmedCard() {
  const listItems = socmedData.map((socmed) => (
      <Link
        key={socmed.name}
        className="box-border flex w-full items-center justify-stretch gap-3 rounded  p-3"
        to={socmed.url}
      >
        <img src={socmed.img} alt="" className="w-14  rounded" />
        <p className="whitespace-nowrap text-base font-bold">{socmed.name}</p>
      </Link>
  ));
  return <div className="flex w-full flex-col gap-4">{listItems}</div>;
}

export default SocmedCard;
