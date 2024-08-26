import useInput from "../hooks/useInput";
import { TodoDispatchContext } from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";

const TodoForm = () => {
    const [title, onChangeHandler] = useInput();
    const { addTodoR } = useTodos(TodoDispatchContext);

    return (
        <div>
            <input value={title} onChange={(e) => onChangeHandler(e)} />
            <button onClick={() => addTodoR(title)}>Todo추가2</button>
        </div>
    );
};

export default TodoForm;
