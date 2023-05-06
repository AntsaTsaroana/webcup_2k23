import API from '../api';
import React, { createContext, useState, useEffect } from 'react';

// on créé notre contexte
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [uid, setUid] = useState('');
  const [client, setClient] = useState(false);

  const fetchUser = async () => {
    let adminUrl = `${process.env.REACT_APP_API_URL}api/user/admin/loggedInAdmin`;
    await API.get(adminUrl)
      .then((res) => {
        setUid(res.data.id);
        setClient(true);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ uid, client, fetchUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
