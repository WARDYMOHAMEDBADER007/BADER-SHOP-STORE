import React from "react";
import "./contact.css";
export const Contact = () => {
  return (
    <div>
      <h1>Contactez-nous</h1>
      <form>
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" name="name" /> <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" /><br />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};



