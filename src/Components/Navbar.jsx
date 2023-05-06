import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import API from '../api';

import '../Assets/css/navbar.scss';

const Navbar = () => {
  const connexion = async () => {
    await API.get(`webcup/test`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
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
      <nav id="menu">
        <div className="logo">
          <span
            style={{
              color: '#ed156d',
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
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/about">A-propos</Link>
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
        <Link to="/login">
          <button className="se_connecter" s>
            Se connecter
          </button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
