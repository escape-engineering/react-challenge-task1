import { useContext } from "react";
import useInput from "../hooks/useInput";
import { TodoDispatchContext } from "../context/TodoContext";

const TodoForm = () => {
    const [title, onChangeHandler] = useInput();
    const { addTodoR } = useContext(TodoDispatchContext);

    return (
        <div>
            <input value={title} onChange={(e) => onChangeHandler(e)} />
            <button onClick={() => addTodoR(title)}>Todo추가2</button>
        </div>
    );
};

export default TodoForm;
