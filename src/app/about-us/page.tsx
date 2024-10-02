import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

import Home from "../page";

export default function About() {
  return (
    <header className="header">
      <nav>
        <a href="">
          <img src="http://logos-download.com/wp-content/uploads/2016/12/Workday_logo_logotype.png" alt=""
            className="logo"/></a>
        <div className="nav-link">
          <ul>
            <li> <Link href="/">HOME</Link></li>
            <li><a href="about-us">ABOUT</a></li>
            <li><a href="protofilo">PROTOFILO</a></li>
            <a className="bton" href="/thanks">CONTACT ME </a>
          </ul>
        </div>
      </nav>
      <div className="text-box">
        <h1>HELLO EVERYONE</h1>
        <h2>ABOUT PAGE <br /> MY WEBSITE</h2>
        <p>
          I'm Azra Talib, currently learning HTML, CSS, JavaScript, TypeScript,
          and <br /> I have a deep passion for building responsive, interactive,
          and clean <br /> web applications. As I continue to hone my skills, I
          aim to create intuitive and user-friendly designs <br /> that bring
          ideas to life.I'm committed to learning and growing in the field of
          web development, <br /> always staying curious about new technologies
          and best practices
        </p>
        <a href="">
          <img
            src="https://www.pngplay.com/wp-content/uploads/12/Pink-Hair-Anime-Girl-Transparent-PNG.png"
            alt=""
            className="image"
          />
        </a>
      </div>
    <Footer />
    </header>
  );
}

