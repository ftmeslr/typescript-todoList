import React, { Dispatch, SetStateAction, useState } from "react";
import { Todo } from "../../models.types.ts/todos";
interface Props {
  add: Dispatch<SetStateAction<Todo[]>>;
}

const AddTodo: React.FC<Props> = ({ add}) => {
  const [input, setInput] = useState<string>("");

  return (
    <div className="form-inline">
      <div className="form-group">
        <input
          type="text"
          className="form-control mx-sm-3"
          placeholder="i want to do ..."
          value={input}
        />
        <button className="btn btn-primary">add</button>
      </div>
    </div>
  );
};

export default AddTodo;
