import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";

import Home from "../page";

export default function Protofilo() {
  return (
    <header className="header">
      <nav>
        <a href=""><img src="http://logos-download.com/wp-content/uploads/2016/12/Workday_logo_logotype.png"  alt="" className="logo"/></a>
        <div className="nav-link">
          <ul>
          <li><Link href="/">HOME</Link></li>
            <li><a href="about-us">ABOUT</a></li>
            <li><a href="protofilo">PROTOFILO</a></li>

            <a className="bton" href="/thanks">CONTACT ME</a>
          </ul>
        </div>
      </nav>
      <div className="text-box">
        <h1>HELLO EVERYONE </h1>
        <h2>PROTOFILO PAGE <br /> MY WEBSITE</h2>
        <p>
          Welcome to my portfolio! This is where I showcase the projects <br /> I’ve
          worked on using HTML, CSS, JavaScript, TypeScript, and Next.js. <br />  Each
          project reflects my growing skills in web development, from creating
          responsive <br />  designs to adding interactive features. I’m passionate
          about <br /> building websites that are easy to use and look great.</p>
        <a href=""><img src="https://www.pngplay.com/wp-content/uploads/12/Pink-Hair-Anime-Girl-Transparent-PNG.png"
            alt="" className="image" /></a>
      </div>
      <Footer />
    </header>
  );
}

