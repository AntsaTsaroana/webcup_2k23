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
              <h1>TROUVER L'EQUILIBRE</h1>
              <h1>INTERIEUR</h1>
            </span>
            <p>
              Dans cette consultation, nous allons discuter de vos sources de
              stress, de vos réactions face au stress et de différentes
              stratégies pour mieux gérer vos émotions et votre anxiété. Nous
              allons également explorer des techniques de relaxation et de
              respiration pour vous aider à vous sentir plus calme et plus
              serein. Je suis là pour vous écouter et vous soutenir dans cette
              démarche. N'hésitez pas à me poser des questions ou à partager vos
              préoccupations.
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
                Au travail comme à la maison, personne n’est à l’abri du stress,
                le mal moderne le mieux partagé ! Si le stress est une réaction
                normale qui nous protège et nous fait avancer, à la longue, il
                pille notre énergie, sape notre moral et fragilise notre système
                immunitaire. La bonne nouvelle ? On peut apprendre à mieux le
                gérer tout au long de la journée pour retrouver santé et
                sérénité, et voir la vie du côté good !
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
