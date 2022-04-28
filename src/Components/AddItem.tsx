import React, { FC, useState } from "react";
import "./AddItem.css";

// 5
//interface IAddProps extends React.HTMLProps<HTMLInputElement> {
interface IAddProps {
  onSubmit: (item: string) => void;
}

const AddItem: FC<IAddProps> = ({ onSubmit }) => {
  // 4
  const [state, setState] = useState({
    input: "",
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, input: e.target.value });
  };

  const onClick = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (state.input) {
      onSubmit(state.input);

      setState({
        input: "",
        error: null
      });
    } else {
      // 3
      // @ts-ignore
      setState({ ...state, error: true });
    }
  };

  return (
    <div className="Buttons">
      <input
        type="text"
        placeholder="Type new todo..."
        value={state.input}
        // 2
        onChange={(e) => handleChange(e)}
      />
      {/* 1 */}
      <div onClick={onClick} className="Button">
        Add
      </div>
      {state.error && (
        <div className="Alert">Type a name for new todo item</div>
      )}
    </div>
  );
};

export default AddItem;
