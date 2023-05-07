import React from "react";
import { Link } from "react-router-dom";

import imgPsycho from "../Assets/img/Consultation/psychologue.webp";
import docImg from "../Assets/img/Consultation/doctor.webp";
import "../Assets/css/consultation.scss";

const Consultation = () => {
  return (
    <>
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
            <h3 style={{color: "#3a677c"}}>Dr ANDREW </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consultation;
