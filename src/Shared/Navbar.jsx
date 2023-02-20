import React from "react";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [isOpen, setIOpen] = React.useState(true);
  return (
    <div className="nav">
      <h1>
        <span>P</span>ortfolio
      </h1>
      <ul id={isOpen ? "hide" : ""}>
        <a href="#description"><li>Acceuil</li></a>
        <a href="#apropos"><li>Apropos</li></a>
        <a href="#Education"><li>Education</li></a>
        <li>Compétences</li>
        <li>Certifications</li>
        <li>Projets</li>
        <li>Vie Associative</li>
      </ul>
      <img src={menu} onClick={() => setIOpen((prev) => !prev)} />
    </div>
  );
};

export default Navbar;
