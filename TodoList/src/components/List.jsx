import { TodoStateContext } from "../App";
import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";

const List = () => {
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);
  // 의존성 배열 : deps ( useMemo도 배열 안에 있는 값이 바뀔 때만 리렌더링 됨 )
  // 아무것도 넣지 않으면 useEffect 처럼 최초에 한 번만 실행이된다.

  return (
    <div className='List'>
      <h4>Todo List 🌱</h4>
      <div className='CountWrapper'>
        <div className='count'>총: {totalCount}</div>
        <div className='count'>완료: {doneCount}</div>
        <div className='count'>미완료: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder='검색어를 입력하세요'
      />
      <div className='todos_wrapper'>
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
