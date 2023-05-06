import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import headerVideo from "../Assets/video/headerVideo.mp4";
import "../Assets/css/pageLoadReveal.scss";
import "../Assets/css/accueil.scss";

const Accueil = () => {
  // gsap.registerPlugin(ScrollTrigger);

  // // ALL REFERENCES :
  const container = useRef();

  // useLayoutEffect(() => {
  //   // ALL ANIMATION :
  //   const ctx = gsap.context(() => {
  //     const TLLOAD = gsap.timeline({
  //       default: {
  //         ease: "power2",
  //       },
  //     });

  //     TLLOAD.to(".images-container", {
  //       height: 400,
  //       duration: 1.3,
  //       delay: 0.4,
  //     })
  //       .to(".bloc-txt", { height: "auto", duration: 0.6 }, "-=0.8")
  //       .to(".bloc-txt h2", { y: 0 }, "-=0.6")
  //       .to(".f2", { y: 0, duration: 0.6 })
  //       .to(".flip-img1", { display: "none", duration: 0 })
  //       .to(".f2", { y: "-100%" })
  //       .to(".load-container", { y: "-100%", duration: 0.5, delay: 0.7 })
  //       .add(() => {
  //         document.querySelector(".load-container").style.display = "none";
  //       })
  //       .to(`h1`, {
  //         top: 0,
  //         duration: 0.5,
  //       });
  //   }, container);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div ref={container}>
      {/* LOADING OVERLAY */}
      {/* <div className="load-container">
        <div className="anim-bloc">
          <div className="images-container">
            <div className="img-flip flip-img2"></div>
            <div className="img-flip flip-img1"></div>
            <div className="flip f2"></div>
          </div>

          <div className="bloc-txt">
            <h2>Adamo.</h2>
          </div>
        </div>
      </div> */}

      {/* ACCUEIL */}
      <div className="container">
        <header>
          <video src={headerVideo} autoPlay muted loop></video>
          <div>
            <span className="title">
              <h1>Tiiiiiitre 1</h1>
              <h1>Tiiiiiiiitre 2</h1>
            </span>
            <span className="tiret"></span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              accusamus architecto ipsa, autem quidem illum sed vero nam tenetur
              officia possimus neque minus odio doloribus veritatis! Officia et
              tempora quod.
            </p>
          </div>
          <div class="eight">
            <h1>Style Eight</h1>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Accueil;
