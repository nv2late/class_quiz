import { useState } from 'react';

export default function countPage() {
  const [count, setCount] = useState(0);

  function handleIncreaseCount(event) {
    setCount(count + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={handleIncreaseCount}>카운트올리기</button>
    </>
  );
}
