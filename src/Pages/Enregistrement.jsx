import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import "../Assets/css/enregistrement.scss";
import "../Assets/css/pageLoadReveal.scss";
import axios from "../api";

const Enregistrement = () => {
  gsap.registerPlugin(ScrollTrigger);

  // // ALL REFERENCES :
  const containerConnexion = useRef();

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

  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inscription = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      await axios
        .post("webcup/api/users", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          passwordConfirmation: confirmPassword,
        })
        .then((res) => {
          console.log("Inscription avec succès");
        })
        .catch((error) => console.error(error));
    } else {
      alert("Les deux mots de passes ne sont pas identiques");
    }
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
                <strong style={{ color: "#3A677C" }}>E</strong>NREGISTREMENT.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="enregistrement">
        <div className="cursor"></div>
        <div className="follower"></div>
        <div className="containerEnregistrement" id="container" ref={container}>
          <div className="form-container sign-up-container">
            <form action="#" onSubmit={inscription}>
              <h1>Créer Compte</h1>
              <input
                type="text"
                placeholder="Votre nom"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
              <input
                type="text"
                placeholder="Votre prénom"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
              <input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                placeholder="Votre mot de passe"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <input
                type="password"
                placeholder="Confirmation de mot de passe"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
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
