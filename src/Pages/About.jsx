import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../Assets/css/about.scss";
import "../Assets/css/pageLoadReveal.scss";
import teamMeeting from "../Assets/video/team.mp4";

export const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  // // ALL REFERENCES :
  const container = useRef();

  useLayoutEffect(() => {
    // ALL ANIMATION :
    const ctx = gsap.context(() => {
      gsap.set(".cursorP", { xPercent: -50, yPercent: -50 });
      gsap.set(".followerP", { xPercent: -50, yPercent: -50 });

      var follow = document.querySelector(".followerP");
      var cur = document.querySelector(".cursorP");

      window.addEventListener("mousemove", (e) => {
        gsap.to(cur, 0, { x: e.clientX, y: e.clientY });
        gsap.to(follow, 0.7, { x: e.clientX, y: e.clientY });
      });
      const TLLOAD = gsap.timeline({
        default: {
          ease: "power2",
        },
      });

      TLLOAD.to(".images-container", {
        height: 400,
        duration: 1.3,
        delay: 0.4,
      })
        .to(".bloc-txt", { height: "auto", duration: 0.6 }, "-=0.8")
        .to(".bloc-txt h2", { y: 0 }, "-=0.6")
        .to(".f2", { y: 0, duration: 0.6 })
        .to(".flip-img1", { display: "none", duration: 0 })
        .to(".f2", { y: "-100%" })
        .to(".load-container", { y: "-100%", duration: 0.5, delay: 0.2 })
        .add(() => {
          document.querySelector(".load-container").style.display = "none";
        })
        .to(`h1`, {
          top: 0,
          duration: 0.5,
        });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* LOADING OVERLAY */}
      <div ref={container}>
        <div className="load-container">
          <div className="anim-bloc">
            <div className="images-container">
              <div className="img-flip flip-img2"></div>
              <div className="img-flip flip-img1"></div>
              <div className="flip f2"></div>
            </div>

            <div className="bloc-txt">
              <h2>
                <strong style={{ color: "#3A677C" }}>A </strong>PROPOS.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="cursorP"></div>
      <section className="about">
        <div className="header">
          <video src={teamMeeting} autoPlay muted loop></video>
          <h2>A propos</h2>
          <p>
            Curieux de savoir qui se cache derrière notre entreprise ? Découvrez
            notre équipe et notre histoire.
          </p>
        </div>
        <div className="institute">
          <div className="image"></div>
          <div className="text">
            <h3>Institut Internationnal des Reves</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet
              ipsam eaque saepe deserunt aperiam a, dicta vero, veritatis
              corrupti voluptatem. Esse, hic dolores? Quisquam vero aliquam aut
              labore ipsam numquam dolore sed hic illum corrupti, commodi
              voluptas sint ducimus.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              laboriosam temporibus nihil sapiente impedit iusto fuga recusandae
              maxime maiores reiciendis?
            </p>
            <a href="#" className="button">
              En savoir plus
            </a>
          </div>
        </div>
        <div className="onirix">
          <div className="text">
            <h3>Onirix AI</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              sint impedit, et officia rerum voluptatem? Dolorum ducimus ratione
              officia asperiores!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, ipsam.
            </p>
            <a href="#" className="button">
              En savoir plus
            </a>
          </div>
          <div className="image"></div>
        </div>
      </section>
    </>
  );
};
