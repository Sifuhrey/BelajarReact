
import PageLayout from "../components/PageLayout";
import PropsCard from "../features/vehicle/PropsCard";
import { useState } from "react";

function PropsPage() {
  const [nation, setNation] = useState("USA");
  return (
    <>
      <PageLayout>
        <label className="text-lg mt-5">
          Choose Nation
          <select
            value={nation}
            onChange={(e) => setNation(e.target.value)}
            className=" p-1 rounded bg-white mx-2"
          >
            <option value="USA">United States</option>
            <option value="Germany">Germany</option>
            <option value="Russia">Russia</option>
            <option value="Great Britain">Great Britain</option>
            <option value="France">France</option>
            <option value="Japan">Japan</option>
            <option value="Italy">Italy</option>
            <option value="Sweden">Sweden</option>
            <option value="China">China</option>
          </select>
        </label>
        <PropsCard nation={nation} />
      </PageLayout>
    </>
  );
}

export default PropsPage;
