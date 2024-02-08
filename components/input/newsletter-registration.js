import { useState } from "react";
import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  async function registrationHandler(event) {
    event.preventDefault();
    const isEmailValid =
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email) &&
      email.trim() !== "";
    if (!isEmailValid) {
      setEmailError("Enter a valid Email Address.");
      return;
    }
    fetch("/api/registration", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        {emailError && (
          <p
            style={{
              textAlign: "center",
              color: "red",
              fontSize: "14px",
              margin: ".5rem 0",
            }}
          >
            {emailError}
          </p>
        )}
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            value={email}
            onChange={({ target }) => {
              setEmailError("");
              setEmail(target.value);
            }}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
