import styled from "styled-components";
import { TodoDispatchContext } from "../context/TodoContext";
import { useContext } from "react";

const TodoItem = ({ todo }) => {
    const { deleteTodoR, toggleTodoR } = useContext(TodoDispatchContext);
    return (
        <TodoItemWrap>
            <TodoTitle $completed={todo.completed} onClick={() => toggleTodoR(todo.id)}>
                {todo.text}
            </TodoTitle>
            <button onClick={() => deleteTodoR(todo.id)}>삭제</button>
        </TodoItemWrap>
    );
};

export default TodoItem;

const TodoItemWrap = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 5px;
`;

const TodoTitle = styled.p`
    text-decoration: ${({ $completed }) => ($completed ? "line-through" : "none")};
    text-align: center;
`;
