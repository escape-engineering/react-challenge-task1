import { useContext } from "react";
import { TodoDispatchContext } from "../context/TodoContext";

export const useTodos = () => {
    const context = useContext(TodoDispatchContext);
    if (!context) throw new Error("useTodos는 TodoDispatchContext 내부에 있어야 합니다.");
    return context;
};
