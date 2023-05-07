import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

import headerVideo from '../Assets/video/headerVideo.mp4';
import descriptionImg from '../Assets/img/Description/descriptionImg.jpg';
import quotes from '../Assets/img/Comment/quotes.png';
import '../Assets/css/pageLoadReveal.scss';
import '../Assets/css/accueil.scss';

const Accueil = () => {
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
    <div ref={container}>
      {/* LOADING OVERLAY */}
      <div className="load-container">
        <div className="anim-bloc">
          <div className="images-container">
            <div className="img-flip flip-img2"></div>
            <div className="img-flip flip-img1"></div>
            <div className="flip f2"></div>
          </div>

          <div className="bloc-txt">
            <h2><strong style={{color:"#3A677C"}}>A</strong>CCUEIL.</h2>
          </div>
        </div>
      </div>

      {/* ACCUEIL */}
      <div className="container">
        <header>
          <video src={headerVideo} autoPlay muted loop></video>
          <div className="soratra">
            <span className="title">
              <h1>Le rêve est la réalisation</h1>
              <h1>anticipée d'un désir</h1>
            </span>
            <span className="tiret"></span>
            <p>
              Comprendre la signification de nos rêves peut nous donner des
              informations précieuses sur nos pensées, nos sentiments et nos
              comportements inconscients, ce qui peut nous aider à mieux nous
              connaître et à mieux naviguer dans notre vie éveillée.
            </p>
            <div className="social">
              <Link to="/">Facebook</Link>
              <Link to="/">Instagram</Link>
              <Link to="/">Twitter</Link>
            </div>
          </div>
        </header>

        {/* Section 1 */}
        <section className="shortDescription">
          <div className="imgForDescription">
            <div className="imgForDescription__inner">
              <img src={descriptionImg} alt="" />
            </div>
          </div>
          <div className="textForDescription">
            <div>
              <h1>Description</h1>
              <br />
              <p>
              Si vous êtes intéressé par l'interprétation des rêves, il peut être utile de tenir un journal de vos rêves et de noter les émotions, les personnes et les événements que vous y rencontrez. Cela peut vous aider à repérer des thèmes récurrents et à mieux comprendre les significations potentielles de vos rêves.
              </p>
              <br />
              <Link to="#">
                <button className="btnDetailsDescription" s>
                  Détails
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="comment">
          <div className="comment__inner">
            <div className="crochet">
              <img src={quotes} alt="" />
            </div>
            <p>
            "Tous les hommes rêvent, mais pas de la même façon. Ceux qui rêvent la nuit dans les recoins poussiéreux de leur esprit s'éveillent le jour pour découvrir que ce n'était que vanité. Mais les rêveurs diurnes sont dangereux, car ils peuvent réaliser leur rêve les yeux ouverts, pour le rendre possible." 
            </p>
            <br />
            <p className="author">- T.E. Lawrence</p>
          </div>
          <div className="comment__inner">
            <div className="crochet">
              <img src={quotes} alt="" />
            </div>
            <p>
            "Les rêves sont des étoiles invisibles... chaque nuit, nous les observons avec émerveillement et pourtant, au réveil, nous oublions rapidement leur beauté."
            </p>
            <br />
            <p className="author">- Mundia Ngumi</p>
          </div>
          <div className="comment__inner">
            <div className="crochet">
              <img src={quotes} alt="" />
            </div>
            <p>
            « Sur le moment, le confort des habitudes peut donner le sentiment d’être heureux. Mais, avec le recul, ce sentiment apparaît en fait comme une illusion. D’où l’importance de sortir des sentiers battus et de se demander, chaque jour, ce qu’on a vraiment envie de faire. »
            </p>
            <br />
            <p className="author">- Bronnie Ware</p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="pricingSection">
          <span className="titlePrice">
            {' '}
            <h1>NOS TARIFS</h1>
          </span>
          <div className="plan">
            <div className="inner">
              <span className="pricing">
                <span>
                  $10 <small>/ m</small>
                </span>
              </span>
              <p className="title">Bronze</p>
              <p className="info">
                This plan is for those who have a team already and running a
                large business.
              </p>
              <ul className="features">
                <li>
                  <span className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <strong>20</strong> team members
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </span>
                  <span style={{ textDecoration: 'line-through' }}>
                    Plan <strong>team meetings</strong>
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </span>
                  <span style={{ textDecoration: 'line-through' }}>
                    File sharing
                  </span>
                </li>
              </ul>
              <div className="action">
                <Link className="button" to="#">
                  Choisir plan
                </Link>
              </div>
            </div>
          </div>
          <div className="plan">
            <div className="inner">
              <span className="pricing">
                <span>
                  $50 <small>/ m</small>
                </span>
              </span>
              <p className="title">Silver</p>
              <p className="info">
                This plan is for those who have a team already and running a
                large business.
              </p>
              <ul className="features">
                <li>
                  <span className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <strong>20</strong> team members
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    Plan <strong>team meetings</strong>
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </span>
                  <span style={{ textDecoration: 'line-through' }}>
                    File sharing
                  </span>
                </li>
              </ul>
              <div className="action">
                <Link className="button" to="#">
                  Choisir plan
                </Link>
              </div>
            </div>
          </div>
          <div className="plan">
            <div className="inner">
              <span className="pricing">
                <span>
                  $100 <small>/ m</small>
                </span>
              </span>
              <p className="title">Gold</p>
              <p className="info">
                This plan is for those who have a team already and running a
                large business.
              </p>
              <ul className="features">
                <li>
                  <span className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <strong>20</strong> team members
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    Plan <strong>team meetings</strong>
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </span>
                  <span>File sharing</span>
                </li>
              </ul>
              <div className="action">
                <Link className="button" to="#">
                  Choisir plan
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Accueil;
