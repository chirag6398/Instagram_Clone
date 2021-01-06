import React from "react";
import loginStyle from "../styles/login.module.css";
import logo from "../images/instaLogo.png";
import Adnld from "../images/Appleplaystore.png";
import Gps from "../images/googleplaystore.png";
import sideImg from "../images/sidePhoneimg.png";
import fIcon from "../images/facebookIcon.png";

export default function login() {
  return (
    <div
      className={loginStyle.loginPage}
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <img src={sideImg} alt="..." className={loginStyle.sideimg} />
      <div className={loginStyle.login_extdiv}>
        <div className={loginStyle.login__container}>
          <img src={logo} alt="..." className={loginStyle.insta_logo} />
          <input
            type="text"
            placeholder="email..."
            className={loginStyle.login__inpt}
          ></input>
          <input
            type="password"
            placeholder="password..."
            className={loginStyle.login__inpt}
          ></input>
          <button type="submit" className={loginStyle.login_btn}>
            Login
          </button>
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
          <h6 style={{ fontWeight: "thin" }}>
            Don't have an Account ?
            <span
              style={{ color: "blue", fontWeight: "thin", cursor: "pointer" }}
            >
              SignUp
            </span>
          </h6>
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
