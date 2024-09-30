import React from 'react';

// property로 받는다
const User = ({userData}) => {
    return(
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )

}

const UserList = () => {
    // 실무에서는 배열로 받아온 데이터이다
    const users = [
        {email: 'user1@gmail.com', name: 'user1'},
        {email: 'user2@gmail.com', name: 'user2'},
        {email: 'user3@gmail.com', name: 'user3'},
        {email: 'user4@gmail.com', name: 'user4'}
    ];

    return(
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {/* map 함수를 사용하여 요소 하나하나가 들어온다. */}
                {/* <User userData={user} userData : propery명 */}
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
    )
}

export default UserList;