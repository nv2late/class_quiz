import { useState } from 'react';

// 1-1) let document.getElementById 사용
// export default function initialPage() {
//   // const [initial, setInitial] = useState('');

//   function generateNumber(e) {
//     let random = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
//     document.getElementById('numbers').innerText = random;
//   }

//   return (
//     <>
//       <div id="numbers">000000</div>
//       <button onClick={generateNumber}>인증번호전송</button>
//     </>
//   );
// }

// 1-2) state 사용
export default function initialPage() {
  const [initial, setInitial] = useState('000000');

  function handleNumber() {
    setInitial(String(Math.floor(Math.random() * 1000000)).padStart(6, '0'));
  }

  return (
    <>
      <div>{initial}</div>
      <button onClick={handleNumber}>인증번호전송</button>
    </>
  );
}
