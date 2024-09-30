import React, {useState} from 'react';

const Counter = () => {
    const [num, setNumber] = useState(0);
    // 배열구조
    // const num = 0; 과 같다.
    // setNumber : num 이라는 변수에 대한 setter 함수

    const increase = () => {
        setNumber(num + 1);
        // num += 1;  과 같다.
        // 반드시 setter 함수를 사용해야함
    }

    const decrease = () => {
        setNumber (num - 1);
    }

    return (
        <div>
            {/* onClick 은 반드시 철자를 정확히 */}
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter;