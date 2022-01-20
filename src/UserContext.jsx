import { createContext, useContext, useState } from "react";
const UserContext = createContext();

function UserProvider(props) {
  const [user, setUser] = useState();

  const login = (credentials) => {
    if (credentials?.login === "admin" && credentials?.password === "admin") {
      setUser({
        user: { firstName: "Adrian", lastName: "Mostowski" },
        token: "abc",
      });
      return true;
    }
    return false;
  };

  return <UserContext.Provider value={{ user, login }} {...props} />;
}

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
