import React from "react";

const Form = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  passwordConfirm,
  setPasswordConfirm,
  setRegistered,
}) => {
  return (
    <div>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          if (password === passwordConfirm) {
            setRegistered(true);
          } else {
            alert("Your password are different. Please double check");
          }
        }}
      >
        <h2 className="title">Name</h2>
        <input
          className="input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        <h2 className="title">Email</h2>
        <input
          className="input"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <h2 className="title">Password</h2>
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <h2 className="title">Confirm your password</h2>
        <input
          className="input"
          type="password"
          placeholder="Confirm password"
          value={passwordConfirm}
          onChange={(event) => {
            setPasswordConfirm(event.target.value);
          }}
        />
        <button className="btn-register" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
export default Form;
