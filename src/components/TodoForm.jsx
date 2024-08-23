import { useReducer } from "react";
import useInput from "../hooks/useInput";
import { useTodos } from "../hooks/useTodos";

const TodoForm = () => {
    const [title, onChangeHandler] = useInput();
    const { todos, addTodo } = useTodos();

    const onClickaddTodoHandler = (text) => {
        addTodo(text);
    };
    return (
        <div>
            <input value={title} onChange={(e) => onChangeHandler(e)} />
            <button onClick={() => onClickaddTodoHandler(title)}>Todo추가</button>
            {/* <button onClick={() => onClickdis(title)}>Todo추가2</button> */}
        </div>
    );
};

export default TodoForm;
