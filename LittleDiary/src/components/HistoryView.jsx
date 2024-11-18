import { useState } from "react";
import "./HistoryView.css";

function HistoryView({ setView }) {
  const answers = JSON.parse(localStorage.getItem("diary"));

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          className='back-btn'
          onClick={() => {
            setView("main");
          }}
        >
          &lt;
        </button>
        <h4>다이어리 기록</h4>
      </div>
      {Object.entries(answers).map(([key, value]) => {
        return (
          <div
            key={key}
            className='diary-item'
          >
            <div className='diary-date'>{key}일</div>
            <div>{value}</div>
          </div>
        );
      })}
    </>
  );
}
export default HistoryView;
