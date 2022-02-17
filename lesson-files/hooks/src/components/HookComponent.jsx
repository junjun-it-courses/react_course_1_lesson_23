// useState – встроенный в React хук
import React, { useState } from 'react';

const HookComponent = () => {
    // Пример хука для работы с состоянием
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Вы нажали {count} раз(а)</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми меня
            </button>
        </div>
    );
};

export default HookComponent;