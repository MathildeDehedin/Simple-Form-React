import React, { useState } from "react";
import "./App.css";

import Footer from "./components/Footer";
import Form from "./components/Form";
import Resultat from "./components/Resultat";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [registered, setRegistered] = useState(false);

  return (
    <div>
      <h1>Create account</h1>
      {registered === true ? (
        <Resultat
          className="resultat"
          username={username}
          email={email}
          password={password}
          setRegistered={setRegistered}
        />
      ) : (
        <Form
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          passwordConfirm={passwordConfirm}
          setPasswordConfirm={setPasswordConfirm}
          setRegistered={setRegistered}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
