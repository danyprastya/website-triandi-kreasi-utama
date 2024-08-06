import Image from "next/image";
import Navbar from "../components/Navbar";
import Motto from "../components/Motto";
import Stats from "../components/Stats";
import AboutUs from "../components/AboutUs";
import Project from "../components/Project";
import Closing from "../components/Closing";
import Footer from "../components/Footer";

export default function landingpage() {
  return (
      <div className="w-screen h-screen">
        <Navbar/>
        <Motto/>
        <Stats/>
        <Project/>
        <Closing/>
        <Footer/>
      </div>
    
  );
}
