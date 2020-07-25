import React from "react";
const Resultat = ({ username, email, password, setRegistered }) => {
  return (
    <div>
      <div className="resultat">
        <h2>Results</h2>
        <div>
          <h3>Name : {username} </h3>
          <h3>Email : {email} </h3>
          <h3>Password : {password} </h3>
        </div>
      </div>
      <button
        className="btn-edit"
        onClick={() => {
          //Modifier état valide à false pour retourner au formulaire
          setRegistered(false);
        }}
      >
        Edit your information
      </button>
    </div>
  );
};
export default Resultat;
