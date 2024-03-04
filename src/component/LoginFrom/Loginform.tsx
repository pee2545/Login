import React, { useRef } from "react";
import { database } from "../userpassword/firbaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./Loginform.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Loginform: React.FC = () => {
  const history = useNavigate();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (usernameRef.current && passwordRef.current) {
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;

      try {
        const data = await createUserWithEmailAndPassword(
          database,
          username,
          password
        );
        history("/home");
        console.log(data, "authData");
      } catch (error) {
        console.error(error, "error");
      }
    }
    // Other relevant code
  };

  return (
    <div className="wrapper">
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" ref={usernameRef} />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" ref={passwordRef} />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <a href="/signup">Sign Up</a>
          <a href="#"></a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link"></div>
      </form>
    </div>
  );
};

export default Loginform;
