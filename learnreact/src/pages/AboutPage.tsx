import Header from "../components/Header";
import profilePic from "../assets/profilepic.jpg";
import SocmedCard from "../features/social-media/SocmedCard";
import { socmedData } from "../features/social-media/SocmedData";

function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-lvh flex-col items-start gap-7 bg-blue-200 p-10 lg:flex-row">
        <div className="flex min-w-0 flex-1 flex-col gap-4 rounded bg-blue-400 p-10 shadow-cyan-500">
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
        <div className="flex w-full shrink-0 flex-col gap-4 rounded bg-blue-400 p-6 shadow-cyan-500 lg:w-64">
          <p className="text-3xl max-md:text-lg">Visit My Social Media:</p>
          <SocmedCard/>
        </div>
      </main>
    </>
  );
}

export default AboutPage;
