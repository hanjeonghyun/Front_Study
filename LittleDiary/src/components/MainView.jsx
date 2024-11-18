import PropTypes from "prop-types";
import "./MainView.css";

function MainView({ setView }) {
  return (
    <>
      <div className='header'>
        <div>(오늘 날짜)</div>
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
      <div className='question'>(질문)</div>
      <div className='content'>
        <textarea
          onChange={() => {
            console.log("onChange");
          }}
        />
      </div>
    </>
  );
}

MainView.propTypes = {
  firstname: PropTypes.string.isRequired,
};

export default MainView;
