import React, { useState } from 'react';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Votre logique d'inscription ici
    console.log(email);
    console.log(password);
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
