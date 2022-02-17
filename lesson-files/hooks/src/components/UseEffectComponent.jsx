import React, { useState, useEffect } from 'react';

const UseEffectComponent = () => {
    const [count, setCount] = useState(0);

    // Работает как componentDidMount и componentDidUpdate вместе взятые
    // Запускается после рендера компонента
    // Вызывается после каждого клика по кнопке
    useEffect(() => {
        // Состояние доступно внутри за счет обычной области видимости
        alert(`Кликов ${count}`);
    });

    // На классах мы бы сделали так
    // Обратите внимание на дублирование
    // componentDidMount() {
    //   alert(`Кликов: ${count}`);
    // }
    // componentDidUpdate() {
    //   alert(`Кликов: ${count}`);
    // }

    return (
        <div>
            <p>Вы нажали {count} раз(а)</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми меня
            </button>
        </div>
    );
};

export default UseEffectComponent;