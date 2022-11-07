import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Videos from "../components/VIdeos";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="" style={{display: "flex"}}>
        <Navbar />
        <Videos />
      </div>
    </div>
  );
}
