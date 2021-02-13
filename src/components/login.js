import React, { useState, useEffect } from "react";
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
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcesing] = useState();
  const [successed, setSuccessed] = useState(false);
  const [dynUrl, setDynUrl] = useState(
    "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"
  );
  const urls = [
    "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg",
    "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
  ];

  const seturl = () => {
    setDynUrl(urls[Math.floor(Math.random() * 5)]);
  };

  useEffect(() => {
    setInterval(seturl, 3000);
    return () => {
      clearInterval(seturl);
    };
  }, [urls, seturl]);
  const signInHandler = (e) => {
    e.preventDefault();
    setProcesing(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setProcesing(false);
        setSuccessed(true);

        history.push("/");
      })
      .catch((err) => {
        setError(err.message);
        setProcesing(false);
      });
  };

  const registerHandler = (e) => {
    e.preventDefault();
    setProcesing(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        setProcesing(false);
        setSuccessed(true);
        history.push("/");
      })
      .catch((err) => {
        setError(err.message);
        setProcesing(false);
      });
  };

  return (
    <div className={loginStyle.loginPage}>
      <img src={sideImg} alt="..." className={loginStyle.sideimg} />
      <img src={dynUrl} alt="..." className={loginStyle.dynamicImg} />
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
                if (email && password) setDisabled(false);
              }}
            ></input>
            <button
              type="submit"
              onClick={signInHandler}
              disabled={processing || disabled || successed}
              className={loginStyle.login_btn}
            >
              {processing ? "processing" : successed ? "successed" : "Login"}
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
                style={{
                  color: "blue",
                  fontWeight: "thin",
                  border: "none",
                  backgroundColor: "white",
                }}
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
