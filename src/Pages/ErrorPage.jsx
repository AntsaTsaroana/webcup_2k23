import React from "react";
import { Link } from "react-router-dom";

import "../Assets/css/404.scss";

const ErrorPage = () => {
  return (
    <>
      <div className="errorPage">
        <h1 className="errorTitle">404</h1>
        <h3>page non trouvée</h3>
        <Link to="/">
          <button className="btnError">Revenir vers la page d'accueil</button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
