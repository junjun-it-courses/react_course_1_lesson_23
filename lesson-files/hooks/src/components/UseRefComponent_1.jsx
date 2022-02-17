import {useRef} from "react";

const UseRefComponent_1 = () => {
    // null – начальное значение
    const inputEl = useRef(null);

    const onButtonClick = () => {
        // `current` указывает на смонтированный элемент `input`
        inputEl.current.focus();
    };

    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Фокус</button>
        </>
    );
}

export default UseRefComponent_1;