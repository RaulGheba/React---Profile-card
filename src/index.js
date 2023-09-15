import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Raul Gheba</h1>
      <p>
        Web development enthusiast, always eager to learn and surpass my
        capabilities every day.
      </p>
    </div>
  );
}

function Avatar() {
  return <img src="me.jpg" alt="me"></img>;
}

function SkillList() {
  return (
    <ul className="skill-list">
      <Skill name="HTML+CSS" emoji="💪" />
      <Skill name="Sass" emoji="💪" />
      <Skill name="Javascript" emoji="💪" />
      <Skill name="OOP" emoji="💪" />
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill">
      <p>
        {props.name} {props.emoji}
      </p>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
