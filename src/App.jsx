import styled from "styled-components";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
    return (
        <Wrapper>
            <TodoForm />
            <TodoList />
        </Wrapper>
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
