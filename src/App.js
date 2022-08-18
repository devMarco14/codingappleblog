import { useState } from "react";
import "./App.css";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(event) => {
                  event.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍
                {따봉[i]}
              </span>
            </h4>
            <p>
              {month}월 {day}일 발행
            </p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
                let copy2 = [...따봉];
                copy2.splice(i, 1);
                따봉변경(copy2);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(event) => {
          입력값변경(event.target.value);
        }}
      />
      <button
        disabled={입력값 === ""}
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
          let copy2 = [...따봉];
          copy2.unshift(0);
          따봉변경(copy2);
        }}
      >
        글발행
      </button>
      {modal === true ? (
        <Modal 글제목={글제목} 글제목변경={글제목변경} title={title} />
      ) : null}
    </div>
  );
}

function Modal({ title, 글제목, 글제목변경 }) {
  return (
    <div className="modal">
      <h4>{글제목[title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {}}>글수정</button>
    </div>
  );
}

export default App;
