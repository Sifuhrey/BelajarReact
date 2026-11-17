import Header from "../components/Header";
import StateDemo from "../features/state/StateDemo";

function StatePage() {
  return (
    <>
      <Header />
      <div className="bg-blue-200 h-lvh flex flex-col items-center justify-center gap-7">
      <StateDemo />
      </div>
      
    </>
  );
}

export default StatePage;
