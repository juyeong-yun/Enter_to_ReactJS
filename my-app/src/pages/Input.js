import React, {useState} from 'react';

const Input = () => {
    const [textValue, setTextValue] = useState("");
    // 초기값은 빈 배열

    const onChange = (e) => {
        // event를 가지고 온다.
        // e.target = input 태그
        setTextValue(e.target.value)
    }

    return (
        <div>
            {/* onChange 변경이 일어날 때 마다 */}
            <input type="text" value={textValue} onChange={onChange} />
            <br />
            <p>{textValue}</p>
            {/* 현재 키워딩 하는 애로 바뀌고 있음. value 연결 잊지 말기 */}

        </div>
    )
}

export default Input;