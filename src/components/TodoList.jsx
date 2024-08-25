import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoDispatchContext } from "../context/TodoContext";

const TodoList = () => {
    const { todosR } = useContext(TodoDispatchContext);
    return (
        <TodoWrapper>
            {todosR.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />;
            })}
        </TodoWrapper>
    );
};

export default TodoList;

const TodoWrapper = styled.div`
    border: 1px solid black;
    min-width: 300px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;
