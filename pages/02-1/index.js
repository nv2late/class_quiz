import { useState } from 'react';

export default function statePracticePage() {
  const [click, setClick] = useState(`안녕하세요!`);

  function changeBtnOn() {
    setClick(`반갑습니다.`);
  }

  return (
    <>
      <button id="hello-world" onClick={changeBtnOn}>
        {click}
      </button>
    </>
  );
}
