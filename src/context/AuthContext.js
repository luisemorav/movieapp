import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const userStorage = JSON.parse(localStorage.getItem("movieapp.user")) || {};

  const [user, setUser] = useState(userStorage);

  function login(user, pass) {
    if (user === "admin" && pass === "1234") {
      const authUser = {
        user: user,
        name: "Bruno Diaz",
      };
      localStorage.setItem("movieapp.user", JSON.stringify(authUser));
      setUser(authUser);
      return true;
    }
    return false;
  }

  function logout() {
    localStorage.removeItem("movieapp.user");
    setUser({});
  }

  function isAuth() {
    console.log(user);
    return user.name ? true : false;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
