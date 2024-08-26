import styled from "styled-components";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { TodosProvider } from "./context/TodoContext";

const App = () => {
    return (
        <TodosProvider>
            <Wrapper>
                <TodoForm />
                <TodoList />
            </Wrapper>
        </TodosProvider>
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
