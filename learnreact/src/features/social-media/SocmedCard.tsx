import { Link } from "react-router-dom";
import { socmedData } from "./SocmedData";


function SocmedCard() {
  const listItems = socmedData.map((item) => (
      <Link
        key={item.id}
        className="box-border flex w-full items-center justify-stretch gap-3 rounded  p-3"
        to={item.url}
      >
        <img src={item.img} alt="" className="w-14  rounded" />
        <p className="whitespace-nowrap text-base font-bold">{item.name}</p>
        
      </Link>
  ));
  return <div className="flex w-full flex-col gap-4">{listItems}</div>;
}

export default SocmedCard;
