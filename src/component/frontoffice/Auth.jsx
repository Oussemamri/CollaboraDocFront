import React, { useEffect, useState } from "react";
import "./Auth.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const SignInSignUp = () => {
  //SIGNUP LOGIC
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [touchedFields, setTouchedFields] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [redirect, setRedirect] = useState(false);

  function navigateTo() {
    setRedirect(false);
  }

  const togglePasswordVisibility = (type) => {
    if (type === "password") {
      setShowPassword((prevState) => !prevState);
    } else if (type === "confirmPassword") {
      setShowConfirmPassword((prevState) => !prevState);
    }
  };

  const handleFieldBlur = (field) => {
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [field]: true,
    }));
    validateField(field);
  };

  const validateField = (field) => {
    switch (field) {
      case "firstName":
        if (!/^[a-zA-Z]{3,16}$/.test(firstName)) {
          setFirstNameError(
            "Firstname should be 3-16 characters and shouldn't include any special characters!"
          );
        } else {
          setFirstNameError("");
        }
        break;
      case "lastName":
        if (!/^[a-zA-Z]{3,16}$/.test(lastName)) {
          setLastNameError(
            "Lastname should be 3-16 characters and shouldn't include any special characters!"
          );
        } else {
          setLastNameError("");
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(email)) {
          setEmailError("Please enter a valid email address.");
        } else {
          setEmailError("");
        }
        break;
      case "password":
        if (
          !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$%!*#?&+])[A-Za-z\d@$%!*#?&+]{8,20}$/.test(
            password
          )
        ) {
          setPasswordError(
            "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!"
          );
        } else {
          setPasswordError("");
        }
        break;
      case "confirmPassword":
        if (password !== confirmPassword) {
          setConfirmPasswordError("Passwords do not match!");
        } else {
          setConfirmPasswordError("");
        }
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    validateField("firstName");
    validateField("lastName");
    validateField("email");
    validateField("password");
    validateField("confirmPassword");

    return (
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (isSignUp) {
        axios
          .post("http://localhost:3000/auth/signup", {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password,
            confirm_password: confirmPassword,
          })
          .then(function (response) {
            toastr.success("Signup successful");
          })
          .catch(function (error) {
            console.log(error.message);
          });
      } else {
        try {
          const response = await axios.post(
            "http://localhost:3000/auth/signin",
            {
              email: email,
              password: password,
            },
            { withCredentials: true }
          );

          console.log("Server Response:", response);

          const { data } = response;

          // Check if the token is present in the response data
          if (data && data.access_token) {
            // Store the token in Axios defaults
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${data.access_token}`;

            // Log the token to see if it's received correctly
            console.log("Access Token:", data.access_token);

            setIsLoggedIn(true);
          } else {
            console.error("Access token not found in server response");
          }
        } catch (error) {
          console.error("Login error:", error.message);
          toastr.error("Incorrect email or password", null, {
            closeButton: true,
            debug: false,
            newestOnTop: true,
            progressBar: true,
            positionClass: "toast-top-right",
            preventDuplicates: false,
            onclick: null,
            showDuration: "300",
            hideDuration: "1000",
            timeOut: "5000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut",
            backgroundcolor: "purple",
          });
        }

        console.log("c bn ");
      }
    }
  };
  useEffect(() => {
    if (!isSignUp && isLoggedIn) {
      setRedirect(true);
    }
  }, [isSignUp, isLoggedIn]);

  if (redirect) {
    return <Navigate to="/" />;
  }

  const handleToggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="body">
      <div className="cont">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src="/public/Documents (1).gif" alt="" />
            <div className="text">
              <span className="text-1">
                Every new friend is a <br /> new adventure
              </span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <img
              className="backImg"
              src="/public/assets_front/image/asset 11.jpeg"
              alt=""
            />
            <div className="text">
              <span className="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">{isSignUp ? "Signup" : "Login"}</div>
              <form action="#" onSubmit={handleSubmit}>
                <div className="input-boxes">
                  {isSignUp && (
                    <>
                      <div
                        className={`input-box ${
                          touchedFields.firstName && firstNameError
                            ? "error"
                            : ""
                        }`}
                      >
                        <i className="fas fa-user"></i>
                        <input
                          type="text"
                          placeholder="Enter your firstname"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          onBlur={() => handleFieldBlur("firstName")}
                        />
                      </div>
                      {touchedFields.firstName && firstNameError && (
                        <span className="error-message">{firstNameError}</span>
                      )}

                      <div
                        className={`input-box ${
                          touchedFields.lastName && lastNameError ? "error" : ""
                        }`}
                      >
                        <i className="fas fa-user"></i>
                        <input
                          type="text"
                          placeholder="Enter your lastname"
                          value={lastName}
                          onBlur={() => handleFieldBlur("lastName")}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      {touchedFields.lastName && lastNameError && (
                        <span className="error-message">{lastNameError}</span>
                      )}
                    </>
                  )}

                  <div
                    className={`input-box ${
                      touchedFields.email && emailError ? "error" : ""
                    }`}
                  >
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      value={email}
                      onBlur={() => handleFieldBlur("email")}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {touchedFields.email && emailError && (
                    <span className="error-message">{emailError}</span>
                  )}

                  <div
                    className={`input-box ${
                      touchedFields.password && passwordError ? "error" : ""
                    }`}
                  >
                    <i className="fas fa-lock"></i>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onBlur={() => handleFieldBlur("password")}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility("password")}
                    >
                      <i
                        className={`fas ${
                          showPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                        style={{ cursor: "pointer", border: "none" }}
                      ></i>
                    </button>
                  </div>

                  {touchedFields.password && passwordError && (
                    <span className="error-message">{passwordError}</span>
                  )}

                  {isSignUp && (
                    <>
                      <div
                        className={`input-box ${
                          touchedFields.confirmPassword && confirmPasswordError
                            ? "error"
                            : ""
                        }`}
                      >
                        <i className="fas fa-lock"></i>
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={confirmPassword}
                          onBlur={() => handleFieldBlur("confirmPassword")}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() =>
                            togglePasswordVisibility("confirmPassword")
                          }
                        >
                          <i
                            className={`fas ${
                              showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                            style={{ cursor: "pointer", border: "none" }}
                          ></i>
                        </button>
                      </div>

                      {touchedFields.confirmPassword &&
                        confirmPasswordError && (
                          <span className="error-message">
                            {confirmPasswordError}
                          </span>
                        )}
                    </>
                  )}
                  <div className="button input-box">
                    <input
                      type="submit"
                      value={isSignUp ? "Signup" : "Login"}
                    />
                  </div>
                  <div className="text sign-up-text">
                    {isSignUp
                      ? "Already have an account?"
                      : "Don't have an account?"}{" "}
                    <button
                      type="button"
                      onClick={handleToggleForm}
                      style={{
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                      }}
                    >
                      {isSignUp ? "Login now" : "Signup now"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
