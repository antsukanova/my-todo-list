import React, { useState } from "react";
import ListItem from "./ListItem";
import AddItem from "./AddItem";
import "./TodoList.css";

const TodoList = () => {
  // 1
  const [state, setState] = useState({
    list: [
      { id: 1, value: "value" },
      { id: 2, value: "value" }
    ],
    className: "List-item"
  });

  const addItem = (item: string) => {
    let newKey;
    if (state.list.length > 0) {
      newKey = state.list[state.list.length - 1].id + 1;
    } else {
      newKey = 0;
    }
    setState({ ...state, list: [...state.list, { id: newKey, value: item }] });
  };

  const deleteItem = (id: number) => {
    setState({ ...state, list: state.list.filter((el) => el.id !== id) });
  };

  return (
    <div className="App-list">
      {/* 4 */}
      <ul className="List">
        {/* 2, 3 */}
        {state.list.map((el, index) => (
          <ListItem
            key={index}
            className={state.className}
            value={el.value}
            handleDelete={() => deleteItem(el.id)}
          />
        ))}
      </ul>
      <AddItem onSubmit={addItem} />
    </div>
  );
};

export default TodoList;
