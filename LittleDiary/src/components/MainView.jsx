import PropTypes from "prop-types";
import "./MainView.css";
import { useEffect, useState } from "react";

function MainView({ setView }) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();

  const answers = JSON.parse(localStorage.getItem("diary") || "{}");

  const [questions, setQuestions] = useState([]);
  const [input, setInput] = useState(answers[date]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/hackurity01/simple-diary/main/src/questions.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  return (
    <>
      <div className='header'>
        <div>
          {year}년 {month}월 {date}일
        </div>
        <div>
          <button
            className='history-btn'
            onClick={() => {
              setView("history");
            }}
          >
            기록 보기
          </button>
        </div>
      </div>
      <div className='question'>{questions[date]}</div>
      <div className='content'>
        <textarea
          value={input}
          onChange={(e) => {
            const value = e.target.value;
            setInput(value);
            localStorage.setItem(
              "diary",
              JSON.stringify({ ...answers, [date]: value })
            );
          }}
        />
      </div>
    </>
  );
}

export default MainView;
