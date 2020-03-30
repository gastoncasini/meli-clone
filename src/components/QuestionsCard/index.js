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

function Question({ ques, ans, vendor }) {
  return (
    <>
      <TextBlock type={"quest"} {...ques} />
      {ans && <TextBlock type={"ans"} content={ans} user={vendor} />}
    </>
  );
}

export default function QuestionsCard({ questions, vendor }) {
  function renderQuestions(quest) {
    return quest.map((props) => {
      return <Question {...props} vendor={vendor} />;
    });
  }

  return <Card>{renderQuestions(questions)}</Card>;
}
