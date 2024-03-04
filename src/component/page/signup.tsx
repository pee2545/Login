import React, { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { database } from "../userpassword/firbaseconfig";

const Signup: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useNavigate();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const usernameRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
        <h1>Sign Up</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" ref={usernameRef} />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" ref={passwordRef} />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <a href="#"></a>
        </div>

        <button type="submit">Sign Up</button>

        <div className="register-link"></div>
      </form>
    </div>
  );
};

export default Signup;
