import Header from "./Header";
import StateComponent from "./State";

function StatePage() {
  return (
    <>
      <Header />
      <div className="bg-blue-200 h-lvh flex flex-col items-center justify-center gap-7">
      <StateComponent />
      </div>
      
    </>
  );
}

export default StatePage;
