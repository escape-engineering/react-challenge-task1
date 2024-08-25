import styled from "styled-components";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useReducer } from "react";
import { TodoDispatchContext } from "./context/TodoContext";

const todosReducer = (state, action) => {
    switch (action.type) {
        case "addTodo":
            return [...state, { id: crypto.randomUUID(), text: action.text, completed: false }];
        case "deleteTodo":
            return state.filter((todo) => todo.id !== action.id);
        case "toggleTodo":
            return state.map((todo) => {
                return todo.id === action.id ? { ...todo, completed: !todo.completed } : todo;
            });
        default:
            console.log("올바르지 않은 action Type입니다.");
            return state;
    }
};
const initialTodo = [];

const App = () => {
    const [todosR, dispatch] = useReducer(todosReducer, initialTodo);
    const addTodoR = (text) => {
        dispatch({
            type: "addTodo",
            text,
        });
    };
    const deleteTodoR = (id) => {
        dispatch({
            type: "deleteTodo",
            id: id,
        });
    };
    const toggleTodoR = (id) => {
        dispatch({
            type: "toggleTodo",
            id: id,
        });
    };
    return (
        <TodoDispatchContext.Provider value={{ dispatch, deleteTodoR, toggleTodoR, addTodoR, todosR }}>
            <Wrapper>
                <TodoForm />
                <TodoList />
            </Wrapper>
        </TodoDispatchContext.Provider>
    );
};

export default App;

const Wrapper = styled.div`
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
