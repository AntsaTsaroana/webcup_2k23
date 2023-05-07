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
                <strong style={{ color: "#3A677C" }}>C</strong>ONSULTATION.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="consultation">
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
    </>
  );
};

export default Consultation;
