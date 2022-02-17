import React, { useContext } from 'react';
import {WrapperContext} from "../context/WrapperContext";

const UseContextComponent = () => {
    // Возвращает контекст целиком
    const context = useContext(WrapperContext);

    return <h1>{context.foreground}</h1>;
}

export default UseContextComponent;