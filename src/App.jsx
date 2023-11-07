import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  const [todos, settodos] = useState([
    {
      id: 1,
      title: "제목",

      content: "내용",
      isdone: true,
    },
    {
      id: 2,
      title: "제목2",
      content: "내용2",
      isdone: false,
    },
    {
      id: 3,
      title: "제목3",

      content: "내용3",
      isdone: true,
    },
  ]);

  const [donetodos, setdontodos] = useState([]);

  const newtodo = { id: 4, title: title, content: content, isdone: true };

  const plusbutton = function () {
    return settodos([...todos, newtodo]);
  };

  const erasebutton = function (id) {
    todos.filter(function (item) {
      return id !== item.id;
    });
    settodos(todos);
  };

  // const donetodo = function(id){
  //   if (){

  //     settodos()
  //   }
  // }

  return (
    <div>
      <header>
        <h1>헤더</h1>{" "}
      </header>
      <form onsubmit="return false;">
        제목:{" "}
        <input
          value={title}
          onChange={function (event) {
            return settitle(event.target.value);
          }}
        ></input>{" "}
        {title}
        내용:{" "}
        <input
          value={content}
          onChange={function (event) {
            return setcontent(event.target.value);
          }}
        ></input>{" "}
        {}
        <button type="submit" onClick={plusbutton}>
          추가하기
        </button>
      </form>
      <main>
        <h1>메인</h1>
        <h1>진행중</h1>
        <div>
          {" "}
          {todos.map(function (todo) {
            return (
              <>
                {" "}
                <div>
                  {todo.id}
                  <br />
                  {todo.title} <br />
                  {todo.content}
                  <br />
                  {todo.isdone} <br />
                  <button conclick={() => erasebutton(todo.id)}>
                    삭제하기
                  </button>
                  <button>완료</button>
                </div>
              </>
            );
          })}
        </div>
        <h1>완료</h1>
      </main>

      <footer>푸터</footer>
    </div>
  );
}

export default App;
