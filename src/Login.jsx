import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const { login: loginToApp } = useUser();

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginToApp({ login, password })) {
      navigate("/");
    } else {
      setError(true);
    }
  };

  const message = "Nie udało się zalogować. Login: admin, hasło: admin.";

  return (
    <form onSubmit={handleSubmit}>
      <div className="input__wrapper">
        <label htmlFor="uname">Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          value={login}
          onChange={handleLoginChange}
          required
        />
      </div>
      <div className="input__wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      {error && message}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
