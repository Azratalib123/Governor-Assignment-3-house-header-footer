import Link from "next/link";
import Footer from "./components/footer";
import Image from "next/image";

import Header from "./components/header";
export default function Home() {
   return (
    <header className="header">
    <nav> 
      <a href=""><img src="http://logos-download.com/wp-content/uploads/2016/12/Workday_logo_logotype.png" alt="" className="logo"/></a>
      <div className="nav-link">
        <ul><li><Link href="/">HOME</Link></li>
        <li><Link href="/about-us">ABOUT</Link></li>
          <li><Link href="/protofilo">PROTOFILO</Link></li>
           <a className="bton" href="/thanks">CONTACT ME</a>
        </ul>
        </div>
    </nav>
    <div className="text-box">
      <h1>HELLO EVERYONE </h1>
         <h2>This is me Azra Talib <br /> MY WEBSITE</h2>
      <p>I am doing web developer course in this I have learned <br /> HTML, CSS & javascript very well and I am also good at typescript .</p>
      <a href=""><img src="https://www.pngplay.com/wp-content/uploads/2/Desktop-PC-No-Background.png"
         alt="" className="imagee"/></a>
      <a className="btn" href="/thanks">GET START</a>
    </div>
    <Footer />
  </header>
 
   )
  }