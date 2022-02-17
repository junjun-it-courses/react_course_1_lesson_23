import {useRef, useState, useEffect} from "react";

const UseRefComponent_2 = () => {
        const [count, setCount] = useState(0);

        const prevCountRef = useRef();

        useEffect(() => {
            prevCountRef.current = count;
        });

        const prevCount = prevCountRef.current;

        return (
            <h1 onClick={() => setCount(count + 1)}>
                Click me
                <br />
                Now: {count}, before: {prevCount}
            </h1>
        );

}

export default UseRefComponent_2;