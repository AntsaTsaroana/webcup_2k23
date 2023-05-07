import React from 'react'
import '../Assets/css/about.scss'
import teamMeeting from '../Assets/video/team.mp4'
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const About = () => {
  // gsap.registerPlugin(ScrollTrigger);

  // // ALL REFERENCES :
  const container = useRef();

  useLayoutEffect(() => {
    // ALL ANIMATION :
    const ctx = gsap.context(() => {
      const TLLOAD = gsap.timeline({
        delay: 1
      });

      TLLOAD
      .from(".header h2", { autoAlpha: 0, y: 50 })
      .from(".header P", { autoAlpha: 0, y: -50 }, "-=.4")
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section className="about" ref={container}>
        <div className="header">
          <video src={teamMeeting} autoPlay muted loop></video>
          <h2>A propos</h2>
          <p>Curieux de savoir qui se cache derrière notre entreprise ? Découvrez notre équipe et notre histoire.</p>
          
        </div>
        <div className="institute">
          <div className="image"></div>
          <div className="text">
            <h3>Institut Internationnal des Reves</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet ipsam eaque saepe deserunt aperiam a, dicta vero, veritatis corrupti voluptatem. Esse, hic dolores? Quisquam vero aliquam aut labore ipsam numquam dolore sed hic illum corrupti, commodi voluptas sint ducimus.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam temporibus nihil sapiente impedit iusto fuga recusandae maxime maiores reiciendis?</p>
            <a href="#" className="button">En savoir plus</a>
          </div>
        </div>
        <div className="onirix">
          <div className="text">
            <h3>Onirix AI</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint impedit, et officia rerum voluptatem? Dolorum ducimus ratione officia asperiores!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, ipsam.</p>
            <a href="#" className="button">En savoir plus</a>
          </div>
          <div className="image"></div>
        </div>
      </section>
    </>
  )
}
