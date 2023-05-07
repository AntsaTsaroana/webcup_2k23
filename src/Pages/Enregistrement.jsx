import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import "../Assets/css/enregistrement.scss";
import "../Assets/css/pageLoadReveal.scss";

const Enregistrement = () => {
  gsap.registerPlugin(ScrollTrigger);

  // // ALL REFERENCES :
  const containerConnexion = useRef();

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
    }, containerConnexion);

    return () => ctx.revert();
  }, []);

  const container = useRef(null);

  const signUp = () => {
    container.current.classList.add("right-panel-active");
  };

  const signIn = () => {
    container.current.classList.remove("right-panel-active");
  };

  return (
    <>
      {/* LOADING OVERLAY */}
      <div ref={containerConnexion}>
        <div className="load-container">
          <div className="anim-bloc">
            <div className="images-container">
              <div className="img-flip flip-img2"></div>
              <div className="img-flip flip-img1"></div>
              <div className="flip f2"></div>
            </div>

            <div className="bloc-txt">
              <h2>
                <strong style={{ color: "#3A677C" }}>E</strong>REGISTREMENT.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="enregistrement">
        <div className="containerEnregistrement" id="container" ref={container}>
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Créer Compte</h1>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>S'inscrire</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Se connecter</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <Link to="#">Mots de passe oublier?</Link>
              <button>Connexion</button>
            </form>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" id="signIn" onClick={signIn}>
                  Se connecter
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp" onClick={signUp}>
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enregistrement;
