import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import "../Assets/css/contact.scss";
import "../Assets/css/pageLoadReveal.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

export const Contact = () => {
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
                <strong style={{ color: "#3A677C" }}>C</strong>ONTACTEZ-NOUS.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <section className="contact">
        <div className="cursor"></div>
        <div className="follower"></div>
        <div className="header">
          <h2>Contact</h2>
          <p>Nous sommes disponibles pour vous aider à tout moment.</p>
          <IoIosArrowDown className="arrowDown" />
        </div>
        <div className="formSection">
          <div className="left">
            <h3>Contactez-nous</h3>
            <p>
              Si vous avez des questions, des commentaires ou des
              préoccupations, n'hésitez pas à nous contacter. Notre équipe est
              toujours là pour vous aider.
            </p>
            <div className="cards">
              <IconContext.Provider
                value={{
                  color: "#60929B",
                  size: "1.5rem",
                }}
              >
                <div className="card">
                  <FaMapMarkerAlt />
                  <h4>ADRESSE</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card">
                  <AiFillClockCircle />
                  <h4>ADRESSE</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card">
                  <IoMdMail />
                  <h4>ADRESSE</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card">
                  <BsTelephoneFill />
                  <h4>ADRESSE</h4>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </IconContext.Provider>
            </div>
          </div>
          <div className="right">
            <h3>Ecrivez-nous</h3>
            <p>
              Pour toute question ou commentaire, n'hésitez pas à nous écrire.
            </p>
            <form action="">
              <input type="text" name="name" placeholder="Votre Nom ..." />
              <input type="email" name="mail" placeholder="email ..." />
              <textarea
                name="message"
                rows="3"
                placeholder="Votre message"
              ></textarea>
              <input type="submit" value="Envoyer message" />
            </form>
          </div>
        </div>
        <div className="map"></div>
      </section>
    </>
  );
};
