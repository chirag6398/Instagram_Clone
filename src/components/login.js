import React, { useState } from "react";
import loginStyle from "../styles/login.module.css";
import logo from "../images/instaLogo.png";
import Adnld from "../images/Appleplaystore.png";
import Gps from "../images/googleplaystore.png";
import sideImg from "../images/sidePhoneimg.png";
import fIcon from "../images/facebookIcon.png";
import { auth } from "../firebase/firebase";
import { useHistory } from "react-router-dom";

export default function Login({ LoginUser }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  const registerHandler = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        history.push("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div
      className={loginStyle.loginPage}
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <img src={sideImg} alt="..." className={loginStyle.sideimg} />
      <div className={loginStyle.login_extdiv}>
        <div className={loginStyle.login__container}>
          <img src={logo} alt="..." className={loginStyle.insta_logo} />
          <form className={loginStyle.login_form}>
            <h6
              style={{
                fontFamily: "verana",
                fontWeight: "thin",
                color: "red",
                margin: "10px 10px",
              }}
            >
              {error}
            </h6>

            <input
              type="text"
              placeholder="email..."
              className={loginStyle.login__inpt}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              type="password"
              placeholder="password..."
              className={loginStyle.login__inpt}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <button
              type="submit"
              onClick={signInHandler}
              className={loginStyle.login_btn}
            >
              Login
            </button>
          </form>

          <span className={loginStyle.line_OR}>OR</span>

          <h6
            style={{
              fontWeight: "thin",
              color: "blue",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={fIcon}
              alt="..."
              style={{ objectFit: "contain", width: "18px" }}
            />
            Login with facebook
          </h6>
          <p style={{ fontWeight: "thin", cursor: "pointer" }}>
            Forgot Password ?
          </p>
        </div>
        <div
          className={loginStyle.login__container}
          style={{ marginTop: "10px" }}
        >
          <form>
            <h6 style={{ fontWeight: "thin" }}>
              Don't have an Account ?
              <button
                onClick={registerHandler}
                type="button"
                style={{ color: "blue", fontWeight: "thin", border: "none" }}
              >
                SignUp
              </button>
            </h6>
          </form>
        </div>

        <div
          style={{
            marginTop: "30px",
          }}
        >
          <p style={{ fontWeight: "thin", display: "block" }}>Get the App</p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <img
            src={Adnld}
            alt="..."
            style={{ width: "123px", objectFit: "contain", cursor: "pointer" }}
          />
          <img
            src={Gps}
            alt="..."
            style={{
              width: "123px",
              objectFit: "contain",
              marginLeft: "15px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
}
