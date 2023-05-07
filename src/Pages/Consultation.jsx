import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import imgPsycho from "../Assets/img/Consultation/psychologue.webp";
import docImg from "../Assets/img/Consultation/doctor.webp";
import "../Assets/css/pageLoadReveal.scss";
import "../Assets/css/consultation.scss";

const Consultation = () => {
  gsap.registerPlugin(ScrollTrigger);

  // // ALL REFERENCES :
  const container = useRef();

  useLayoutEffect(() => {
    // ALL ANIMATION :
    const ctx = gsap.context(() => {
      gsap.set(".follower", { xPercent: -50, yPercent: -50 });
      gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

      var follow = document.querySelector(".follower");
      var cur = document.querySelector(".cursor");

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
        .to(`.title`, {
          right: 0,
          duration: 0.8,
          onComplete: () => {
            gsap.to(".title", {
              right: "-75%",
              duration: 1,
              scrollTrigger: {
                trigger: ".conseil",
                scrub: true,
              },
            });
          },
        })
        .to(
          ".titleConsultation p",
          {
            top: 0,
            opacity: 1,
            duration: 1,
            onComplete: () => {
              gsap.to(".titleConsultation p", {
                left: "-75%",
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                  trigger: ".conseil",
                  scrub: true,
                },
              });
            },
          },
          "-=0.35"
        )
        .to(
          ".btnConsultation",
          {
            top: 0,
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
              gsap.to(".btnConsultation", {
                y: 200,
                opacity: 0,
                duration: 1,
                ease: "linear",
                scrollTrigger: {
                  trigger: ".conseil",
                  scrub: true,
                },
              });
            },
          },
          "-=0.35"
        )
        .to(`.mouse_scroll`, {
          bottom: 0,
          opacity: 1,
          duration: 0.8,
          onComplete: () => {
            gsap.to(".mouse_scroll", {
              y: 50,
              transform: "scale(0)",
              duration: 1,
              scrollTrigger: {
                trigger: ".conseil",
                scrub: true,
              },
            });
          },
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
                <strong style={{ color: "#3A677C" }}>C</strong>ONSULTATION.
              </h2>
            </div>
          </div>
        </div>
        <div className="consultation">
          <div className="cursor"></div>
          <div className="follower"></div>
          <img src={imgPsycho} alt="Psyhcologue" />
          <div className="titleConsultation">
            <span className="title">
              <h1>TIIIITRE 1</h1>
              <h1>TIIIITRE 2</h1>
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              blanditiis, et officia laudantium provident velit recusandae
              corporis quidem in excepturi laboriosam itaque architecto quas
              labore deserunt inventore quos, expedita alias?
            </p>
            <Link to="#">
              <button className="btnConsultation">Contacter le Psy</button>
            </Link>
            <div className="mouse_scroll">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <div>
                <span className="m_scroll_arrows unu"></span>
                <span className="m_scroll_arrows doi"></span>
                <span className="m_scroll_arrows trei"></span>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION CONSEIL */}
        <section className="conseil">
          <div className="imgForConseil">
            <div className="imgForConseil__inner">
              <img src={docImg} alt="" />
            </div>
          </div>
          <div className="textForConseil">
            <div>
              <h1>Conseil</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                magnam iste maxime cupiditate saepe praesentium illo, sit iusto
                reiciendis blanditiis nostrum, earum ratione a ut deserunt sed
                quod rem vitae!
              </p>
              <br />
              <h3 style={{ color: "#3a677c" }}>Dr ANDREW </h3>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Consultation;
