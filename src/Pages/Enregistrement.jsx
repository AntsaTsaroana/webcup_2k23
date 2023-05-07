import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/enregistrement.scss';
import axios from '../api';

const Enregistrement = () => {
  const container = useRef(null);

  const signUp = () => {
    container.current.classList.add('right-panel-active');
  };

  const signIn = () => {
    container.current.classList.remove('right-panel-active');
  };

  //   useEffect(() => {
  //     const signUpButton = document.getElementById("signUp");
  //     const signInButton = document.getElementById("signIn");
  //     const container = document.getElementById("container");

  //     signUpButton.addEventListener("click", () => {
  //       container.classList.add("right-panel-active");
  //     });

  //     signInButton.addEventListener("click", () => {
  //       container.classList.remove("right-panel-active");
  //     });
  //   }, []);

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const inscription = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      await axios
        .post('webcup/api/users', {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        })
        .then((res) => {
          console.log('Inscription avec succès');
        })
        .catch((error) => console.error(error));
    } else {
      alert('Les deux mots de passes ne sont pas identiques');
    }
  };

  return (
    <>
      <div className="enregistrement">
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
