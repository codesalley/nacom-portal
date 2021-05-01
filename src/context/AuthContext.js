import React, { useContext, useState, useEffect } from 'react';
import { login } from '../utils/login';
import auth from '../utils/auth';

const AuthContext = React.createContext('hellow');

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [student, setStudent] = useState();

  async function signIn(index, password) {
    const res = await login(index, password);
    if (!res) {
      return false;
    }
    const profiledata = await auth('https://nacomtest.herokuapp.com/me');
    setStudent(profiledata);
    return profiledata;
  }
  console.log(student);

  const value = {
    student,
    signIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
