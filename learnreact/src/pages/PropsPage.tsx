
import PageLayout from "../components/PageLayout";
import PropsCard from "../features/vehicle/PropsCard";
import { useState } from "react";

function PropsPage() {
  const [country, setCountry] = useState("usa");
  const [type, setType] = useState("light_tank");
  return (
    <>
      <PageLayout>
        <div className="flex  gap-4 items-center justify-center">
          <label className="text-lg mt-5">
            Choose Nation
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className=" p-1 rounded bg-white mx-2"
            >
              <option value="usa">United States</option>
              <option value="germany">Germany</option>
              <option value="ussr">Russia</option>
              <option value="britain">Great Britain</option>
              <option value="france">France</option>
              <option value="japan">Japan</option>
              <option value="italy">Italy</option>
              <option value="sweden">Sweden</option>
              <option value="china">China</option>
              <option value="israel">Israel</option>
            </select>
          </label>
          <label className="text-lg mt-5">
            Choose Type
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className=" p-1 rounded bg-white mx-2"
            >
              <option value="light_tank">Light Tank</option>
              <option value="medium_tank">Medium Tank</option>
              <option value="heavy_tank">Heavy Tank</option>
              <option value="tank_destroyer">Tank Destroyer</option>
              <option value="spaa">SPAA</option>
            </select>
          </label>
        </div>

        <PropsCard country={country} type={type} />
      </PageLayout>
    </>
  );
}

export default PropsPage;
