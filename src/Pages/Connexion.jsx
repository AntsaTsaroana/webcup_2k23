import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const Connexion = () => {
  const { fetchUser } = useContext(AuthContext);
  const redirect = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };

      const ClientConnexion = await API.post(
        `${process.env.REACT_APP_API_URL}api/user/entreprise/login`,
        loginData
      );

      await fetchUser();
      redirect('/dashEntreprise');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 align="center" style={{ marginTop: 80 }}>
        Connexion{' '}
      </h1>
      <form onSubmit={handleSubmit} style={{ marginTop: 80 }}>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Connexion;
