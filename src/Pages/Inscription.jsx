import React, { useState } from 'react';

const Inscription = () => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Votre logique d'inscription ici
    console.log(lastName);
    console.log(firstName);
    console.log(email);
    console.log(avatar);
    console.log(password);
    console.log(confirmPassword);
  };

  return (
    <div>
      <h1 align="center" style={{ marginTop: 80 }}>
        Inscription{' '}
      </h1>
      <form onSubmit={handleSubmit} style={{ marginTop: 80 }}>
        <div>
          <label htmlFor="last-name">Nom :</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="first-name">Prénom :</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
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
          <label htmlFor="avatar">Avatar :</label>
          <input
            type="file"
            id="avatar"
            value={avatar}
            onChange={(event) => setAvatar(event.target.files[0])}
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
        <div>
          <label htmlFor="confirm-password">Confirmez le mot de passe :</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Inscription;
