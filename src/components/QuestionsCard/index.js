import React from "react";
import Card from "../Card";
import styles from "./questions.module.css";
import "./styles.css";

function TextBlock({ user, content, type }) {
  type =
    type === "ans"
      ? "text-block text-block--yellow text-block--right"
      : "text-block";

  return (
    <div className={type}>
      <div aria-label="user" className={styles.user}>
        {user}
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  );
}

function Question({ quest, ans }) {
  return (
    <>
      <TextBlock type={"quest"} {...quest} />
      {ans && <TextBlock type={"ans"} {...ans} />}
    </>
  );
}

export default function QuestionsCard({ questions }) {
  let testQuestions = [
    {
      quest: {
        user: "lolocololo",
        content: "hola cual es el costo del envio ?"
      },
      ans: {
        user: "shoes inc",
        content: "el envio es gratis papa ! "
      }
    }
  ];

  questions = questions ? questions : testQuestions;

  function renderQuestions(quest) {
    return quest.map(props => {
      return <Question {...props} />;
    });
  }

  return <Card>{renderQuestions(questions)}</Card>;
}
