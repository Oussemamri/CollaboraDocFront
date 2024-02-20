import { useState } from "react";
import "./Auth.css";

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp((prevState) => !prevState);
  };

  return (
    <div
      className={`wrapper ${isSignUp ? "animated-signup" : "animated-signin"}`}
    >
      <div className="form-container sign-up">
        <form action="#" noValidate>
          {" "}
          {/* Add noValidate here */}
          <h2>sign up</h2>
          <div className="form-group">
            <input type="text" required />
            <i className="fas fa-user"></i>
            <label htmlFor="">username</label>
          </div>
          <div className="form-group">
            <input type="email" required />
            <i className="fas fa-at"></i>
            <label htmlFor="">email</label>
          </div>
          <div className="form-group">
            <input type="password" required />
            <i className="fas fa-lock"></i>
            <label htmlFor="">password</label>
          </div>
          <div className="form-group">
            <input type="password" required />
            <i className="fas fa-lock"></i>
            <label htmlFor="">confirm password</label>
          </div>
          <button type="submit" className="btn">
            sign up
          </button>
          <div className="link">
            <p>
              You already have an account?
              <button className="signin-link" onClick={toggleForm}>
                {" "}
                sign in
              </button>
            </p>
          </div>
        </form>
      </div>
      <div className="form-container sign-in">
        <form action="#" noValidate>
          {" "}
          {/* Add noValidate here */}
          <h2>login</h2>
          <div className="form-group">
            <input type="text" required />
            <i className="fas fa-user"></i>
            <label htmlFor="">username</label>
          </div>
          <div className="form-group">
            <input type="password" required />
            <i className="fas fa-lock"></i>
            <label htmlFor="">password</label>
          </div>
          <div className="forgot-pass">
            <button onClick={toggleForm}>forgot password?</button>
          </div>
          <button type="submit" className="btn">
            login
          </button>
          <div className="link">
            <p>
              Don t have an account?
              <button className="signup-link" onClick={toggleForm}>
                {" "}
                sign up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInSignUp;
