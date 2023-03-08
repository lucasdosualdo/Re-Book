import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      setUser(user);
      setToken(user.token);
    }
  }, []);

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    setToken(user.token);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
  };
  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("BooksContext not found");
  return context;
}
