import React, { useContext, useState } from 'react';

const AuthContext = React.createContext;

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [student, setStudent] = useState();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
