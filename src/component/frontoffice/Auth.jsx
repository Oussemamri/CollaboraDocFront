import React, { useState } from "react";
import "./Auth.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const SignInSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [touchedFields, setTouchedFields] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add isLoggedIn state
  const [redirect, setRedirect] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleFieldBlur = (field) => {
    setTouchedFields({ ...touchedFields, [field]: true });
    if (field === "email") {
      validateEmail();
    } else if (field === "password") {
      validatePassword();
    } else if (field === "firstName") {
      validateFirstName();
    } else if (field === "lastName") {
      validateLastName();
    } else if (field === "confirmPassword") {
      validateConfirmPassword();
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  const validateEmail = () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required.");
    } else {
      setPasswordError("");
    }
  };

  const validateFirstName = () => {
    if (!firstName) {
      setFirstNameError("First name is required.");
    } else {
      setFirstNameError("");
    }
  };

  const validateLastName = () => {
    if (!lastName) {
      setLastNameError("Last name is required.");
    } else {
      setLastNameError("");
    }
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm password is required.");
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const validateForm = () => {
    validateEmail();
    validatePassword();
    validateFirstName();
    validateLastName();
    validateConfirmPassword();

    return (
      !emailError &&
      !passwordError &&
      !firstNameError &&
      !lastNameError &&
      !confirmPasswordError
    );
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("test");
      {
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
      }
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:3000/auth/signup", {
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
          confirm_password: confirmPassword,
        });

        console.log("Server Response:", response);
        // Display success toast
        toastr.success("Sign up successful", null, {
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
          backgroundcolor: "green",
        });
        // Reset input fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } catch (error) {
        console.error("Signup error:", error.message);
        toastr.error("Signup failed", null, {
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
          backgroundcolor: "red",
        });
      }
    }
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
              <div className="title">Login</div>
              <form onSubmit={handleSignIn}>
                <div className="input-boxes">
                  <div className={`input-box ${emailError ? "error" : ""}`}>
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      value={email}
                      onBlur={() => handleFieldBlur("email")}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {emailError && (
                    <span className="error-message">{emailError}</span>
                  )}

                  <div className={`input-box ${passwordError ? "error" : ""}`}>
                    <i className="fas fa-lock"></i>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onBlur={() => handleFieldBlur("password")}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" onClick={togglePasswordVisibility}>
                      <i
                        className={`fas ${
                          showPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                        style={{ cursor: "pointer", border: "none" }}
                      ></i>
                    </button>
                  </div>

                  {passwordError && (
                    <span className="error-message">{passwordError}</span>
                  )}

                  <div className="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div className="text sign-up-text">
                    Don't have an account?{" "}
                    <label htmlFor="flip">Signup now</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">Signup</div>
              <form onSubmit={handleSignUp}>
                <div className="input-boxes">
                  <div
                    className={`input-box ${
                      touchedFields.firstName && firstNameError ? "error" : ""
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

                  <div
                    className={`input-box ${
                      touchedFields.confirmPassword && confirmPasswordError
                        ? "error"
                        : ""
                    }`}
                  >
                    <i className="fas fa-lock"></i>
                    <input
                      type={showPassword ? "text" : "password"}
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
                          showPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                        style={{ cursor: "pointer", border: "none" }}
                      ></i>
                    </button>
                  </div>

                  {touchedFields.confirmPassword && confirmPasswordError && (
                    <span className="error-message">
                      {confirmPasswordError}
                    </span>
                  )}
                  <div className="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div className="text sign-up-text">
                    Already have an account?{" "}
                    <label htmlFor="flip">Login now</label>
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
