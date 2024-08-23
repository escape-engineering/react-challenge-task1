import { createContext, useReducer, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const addTodo = (text) => {
        setTodos((prev) => {
            return [...prev, { id: crypto.randomUUID(), text, completed: false }];
        });
    };
    const deleteTodo = (id) => {
        setTodos((prev) => {
            return prev.filter((todo) => todo.id !== id);
        });
    };
    const toggleTodo = (id) => {
        setTodos((prev) => {
            return prev.map((todo) => {
                return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
            });
        });
    };

    // const todoInitialState = [];
    // const todoReducer = (todosState, action) => {
    //     switch (action.type) {
    //         case "addTodo":
    //             return [...todosState, { id: crypto.randomUUID(), text: action.text, completed: false }];
    //         case "deleteTodo":
    //             console.log(2);
    //             break;
    //         case "toggleTodo":
    //             console.log(3);
    //             break;
    //     }
    // };
    // const [state, dispatch] = useReducer(todoReducer, todos);
    // const onClickdis = (title) => {
    //     dispatch({
    //         type: "addTodo",
    //         text: title,
    //     });
    // };

    return <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>{children}</TodoContext.Provider>;
};
