import axios from 'axios';
import { useState } from 'react';

export default function RestApiPracticePage() {
  const [username, setUsername] = useState('');

  const onClickSync = async () => {
    const result = await axios.get('https://koreanjson.com/users');
    console.log(result.data);
    console.log(result.data[1].name);
    setUsername(result.data[2].name);
  };

  return (
    <>
      <button onClick={onClickSync}>REST-API 요청하기</button>
      <div>{username}</div>
    </>
  );
}
