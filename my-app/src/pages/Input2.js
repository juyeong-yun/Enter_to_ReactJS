import React, {useState} from 'react';

const Input2 = () => {

    const[inputs, setInputs] = useState({
        // object 형태로 정의
        name: "",
        email: "",
        tel: ""
    });

    const {name, email, tel} = inputs;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        // inputs[id] = value => 상태관리가 되지 않음. 
        // 변경되었다는 것을 인지 할 수 있도록 해야함
        // 자바스크립트의 기본 구조 이해가 필요하다. 
        // 리액트는 참조값만 알고 있는것일 뿐 블록의 상태를 알 수 없다.

        setInputs({
            // 깊은 복사를 해서 spread 기법에 넣어준 후 새로운 object를 만든것
            ...inputs,
            [id] : value 
        })

    }


    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange} />
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange} />
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange} />
            </div>
            <p>이름 : {name}</p>
            <p>이메일 : {email}</p>
            <p>전화번호 : {tel}</p>
        </div>

    )
}

export default Input2;