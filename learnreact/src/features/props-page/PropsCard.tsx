import { Link } from "react-router-dom";
import { propsData } from "./PropsData";
import { getImageUrl } from "./getImageUrl";



function PropsCard(nation: any) {
    const nationTank = propsData.filter(propsData=> propsData.nation === nation.nation);
  const listItems = nationTank.map((item) => (
    <Link
      key={item.identifier}
      className="box-border flex  items-center  bg-blue-400 m-3 shadow-md  justify-stretch gap-3 rounded  p-3"
      to={getImageUrl(item).url}
    >
      <img
        src={getImageUrl(item).img}
        alt={item.name}
        loading="lazy"
        className="w-48 rounded"
        onError={(event) => {
          const image = event.currentTarget;

          // Retry once with a fresh URL in case the first request failed temporarily.
          if (image.dataset.retried) return;

          image.dataset.retried = "true";
          const retryUrl = new URL(image.src);
          retryUrl.searchParams.set("retry", Date.now().toString());
          image.src = retryUrl.toString();
        }}
      />
      <div className="flex flex-col gap-1">
        <p className="whitespace-nowrap text-base font-bold">{item.name}</p>
        <p className="text-sm">{item.nation}</p>

      </div>
    </Link>
  ));
  return <div className="flex w-full flex-col gap-4">{listItems}</div>;
}
export default PropsCard;
