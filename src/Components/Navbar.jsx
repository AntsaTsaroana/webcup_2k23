import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from 'jquery';
import API from '../api';

import '../Assets/css/navbar.scss';

const Navbar = () => {
  // ALL REFERENCES :
  const navbar = useRef();

  useLayoutEffect(() => {
    // ALL ANIMATION :
    const ctx = gsap.context(() => {
      // BUTTON NAVBAR
      let OK = false;
      document.querySelector('.toggle-nav').addEventListener('click', () => {
        if (!OK) {
          gsap.to('.l1', { y: 0, rotate: 135, duration: 0.1, ease: 'linear' });
          gsap.to('.l2', { x: -10, scale: 0, duration: 0.1, ease: 'linear' });
          gsap.to('.l3', { y: 0, rotate: -135, duration: 0.1, ease: 'linear' });
          gsap.to(`.menuResp`, { left: '10px', ease: 'elastic.out(1, 0.9)' });
          OK = true;
        } else {
          gsap.to('.l1', { y: -10, rotate: 0, duration: 0.1, ease: 'linear' });
          gsap.to('.l2', { x: 0, scale: 1, duration: 0.1, ease: 'linear' });
          gsap.to('.l3', { y: 10, rotate: 0, duration: 0.1, ease: 'linear' });
          gsap.to(`.menuResp`, { left: '-350px' });
          OK = false;
        }
      });
    }, navbar);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const connexion = async () => {
      await API.get(`webcup/test`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    connexion();
    $('#menu').css({
      background: 'transparent',
      transition: 'background .5s',
    });
    $('#menu a').css('color', '#fff');

    window.addEventListener('scroll', () => {
      if (window.scrollY < 120) {
        $('#menu').css({
          background: 'transparent',
          transition: 'background .5s',
        });
        $('#menu a').css('color', '#fff');
      } else {
        $('#menu').css({
          opacity: '0.8',
          background: 'black',
          transition: 'background .5s',
        });
        $('#menu a').css('color', '#fff');
      }
    });
  }, []);

  return (
    <>
      <nav id="menu" ref={navbar}>
        <div className="logo">
          <span
            style={{
              color: '#3A677C',
              paddingLeft: '5px',
              fontWeight: 'bolder',
            }}
          >
            N
          </span>{' '}
          OFY
        </div>
        <div id="navigation">
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/service">Consultation</Link>
            </li>
            <li>
              <Link to="/about">A propos</Link>
            </li>
            <li>
              <Link to="/contactUs">Contactez-nous</Link>
            </li>
          </ul>
        </div>
        <button type="button" aria-label="burger Menu" className="toggle-nav">
          <span class="line l1"></span>
          <span class="line l2"></span>
          <span class="line l3"></span>
        </button>
        <Link to="#">
          <button className="se_connecter" s>
            Enregistrement
          </button>
        </Link>
      </nav>

      <div className="menuResp">
        <Link to="/">Accueil</Link>
        <Link to="/service">Consultation</Link>
        <Link to="/about">A propos</Link>
        <Link to="/contactUs">Contactez-nous</Link>
      </div>
    </>
  );
};

export default Navbar;
