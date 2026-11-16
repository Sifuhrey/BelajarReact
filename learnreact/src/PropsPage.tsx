import Header from "./Header";
import profilePic from "./assets/profilepic.jpg";

function PropsPage() {
  return (
    <>
      <Header />
      <main className="bg-blue-200 min-h-lvh flex flex-row items-center p-10 gap-7">
        <div className=" bg-blue-400 flex flex-col p-10 gap-4 rounded shadow-cyan-500 max-w-1/2">
          <div className="flex flex-row gap-10 p-4 items-center rounded ">
            <img
              src={profilePic}
              alt=""
              
              className="rounded shadow-2xl max-w-1/4"
            />
            <p className=" text-5xl max-md:text-lg">Fakhri Abdillah</p>
          </div>
          <p className="text-white text-lg">
            I’m an Applied Software Engineering student at Telkom University in
            Bandung, with hands-on experience in databases and a growing
            interest in building full software systems. Over six months as a
            Database Administrator at PT. Tabel Data Informatika, I worked with
            SQL and ClickHouse to keep data reliable, organized, and fast to
            query. As a Teaching Assistant for Database System, I helped
            students understand database concepts, which taught me to explain
            technical ideas clearly. Through Himadira Telkom University, where I
            led the Academic Development Department and ran the Responsi program
            for students struggling with coding courses, I learned to lead a
            team and deliver programs that people actually use. I’m now looking
            for a software engineering internship where I can apply my database
            foundation, learn from experienced engineers, and keep growing as a
            developer.
          </p>
        </div>
        <div className=" bg-blue-700 flex flex-col p-10 gap-4 rounded shadow-cyan-500 max-w-1/2">
            Visit My Social Media:
        </div>
      </main>
    </>
  );
}

export default PropsPage;
