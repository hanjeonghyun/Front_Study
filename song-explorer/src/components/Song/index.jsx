import React from "react";
import "./index.css";

export default function Song({ title, singer, no }) {
  return (
    <div className='Song'>
      <div>
        <div className='Song__title'>{title}</div>
        <div className='Song__singer'>{singer}</div>
      </div>
      <div className='Song__no'>{no}</div>
    </div>
  );
}
