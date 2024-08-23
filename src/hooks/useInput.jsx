import { useState } from "react";

const useInput = () => {
    const [text, setText] = useState("");
    const onChangeHandler = (e) => {
        setText(e.target.value);
    };
    return [text, onChangeHandler];
};

export default useInput;
