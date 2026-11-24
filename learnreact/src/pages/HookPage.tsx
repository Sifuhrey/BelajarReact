import { useState } from "react";
import PageLayout from "../components/PageLayout";
import Map, { type Location } from "../features/map/Map";
import SearchBox from "../features/map/SearchBox";

function HookPage() {
  const [location, setLocation] = useState<Location>({
    lat: -6.9175,
    lon: 107.6191,
    name: "Bandung",
  });

  return (
    <PageLayout>
        <SearchBox onLocationSelect={setLocation} />
        <Map location={location} />
    </PageLayout>
  )
}

export default HookPage
