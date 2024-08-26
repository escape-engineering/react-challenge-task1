import { createContext, useReducer } from "react";

export const TodoDispatchContext = createContext();

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

export const TodosProvider = ({ children }) => {
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
        <TodoDispatchContext.Provider value={{ deleteTodoR, toggleTodoR, addTodoR, todosR }}>
            {children}
        </TodoDispatchContext.Provider>
    );
};
