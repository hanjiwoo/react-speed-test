import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
  const [title, settitle] = useState("");
  const [contents, setcontents] = useState("");
  const [todos, settodos] = useState([
    {
      id: 1,
      title: "제목",
      contents: "내용",
      isdone: true,
    },
    {
      id: 2,
      title: "제목2",
      contents: "내용2",
      isdone: false,
    },
    {
      id: 3,
      title: "제목3",
      contents: "내용3",
      isdone: false,
    },
    {
      id: 4,
      title: "제목4",
      contents: "내용4",
      isdone: true,
    },
  ]);
  const doingtodo = todos.filter(function (todo) {
    return todo.isdone === false;
  });
  const donetodo = todos.filter(function (todo) {
    return todo.isdone === true;
  });

  return (
    <div>
      <header>
        <h1>투두리스트</h1>
        <form
          onSubmit={function (e) {
            e.preventDefault();
            const addtodo = {
              id: 5,
              title: title,
              contents: contents,
              isdone: false,
            };
            settodos([...todos, addtodo]);
          }}
        >
          제목 :{" "}
          <input
            value={title}
            onChange={function (e) {
              settitle(e.target.value);
            }}
          ></input>
          내용 :{" "}
          <input
            value={contents}
            onChange={function (e) {
              setcontents(e.target.value);
            }}
          ></input>
          <button>추가하기</button>
        </form>
      </header>
      <main>
        <div>
          <h2>진행중 리스트</h2>
          {doingtodo.map(function (todo) {
            return (
              <div
                style={{
                  display: "flex",
                  border: "1px solid black",
                  width: "300px",
                  margin: "10px",
                  padding: " 10px",
                }}
              >
                <div>
                  <div>
                    아이디 : {todo.id}
                    <br />
                    {todo.title}
                    <br />
                    {todo.contents}
                    <br />
                    {String(todo.isdone)}
                    <br />
                  </div>
                  <button
                    onClick={function () {
                      const deletingtodo = todos.filter(function (i) {
                        return todo.id !== i.id;
                      });
                      settodos(deletingtodo);
                    }}
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={function () {
                      const movingtodo = todos.map((i) => {
                        if (i.id === todo.id) {
                          return {
                            ...i,
                            isdone: !i.isdone,
                          };
                        } else {
                          return i;
                        }
                      });
                      settodos(movingtodo);
                    }}
                  >
                    완료
                  </button>
                </div>{" "}
              </div>
            );
          })}
        </div>
        <div>
          <h2>진행중 리스트</h2>
          {donetodo.map(function (todo) {
            return (
              <div
                style={{
                  display: "flex",
                  border: "1px solid black",
                  width: "300px",
                  margin: "10px",
                  padding: " 10px",
                }}
              >
                <div>
                  <div>
                    아이디 : {todo.id}
                    <br />
                    {todo.title}
                    <br />
                    {todo.contents}
                    <br />
                    {String(todo.isdone)}
                    <br />
                  </div>
                  <button
                    onClick={function () {
                      const deletingtodo = todos.filter(function (i) {
                        return todo.id !== i.id;
                      });
                      settodos(deletingtodo);
                    }}
                  >
                    삭제하기
                  </button>
                  <button
                    onClick={function () {
                      const movingtodo = todos.map((i) => {
                        if (i.id === todo.id) {
                          return {
                            ...i,
                            isdone: !i.isdone,
                          };
                        } else {
                          return i;
                        }
                      });
                      settodos(movingtodo);
                    }}
                  >
                    완료취소
                  </button>
                </div>{" "}
              </div>
            );
          })}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
export default App;
