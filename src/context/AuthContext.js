import React, { useContext, useState, useEffect } from 'react';

const AuthContext = React.createContext;

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [student, setStudent] = useState();

  useEffect(() => {});

  const value = {
    student,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
