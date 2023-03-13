const classmate = [
  { name: '정국', age: 10, school: 'Rabbit School' },
  { name: '알엠', age: 13, school: 'SCR School' },
  { name: '뷔', age: 11, school: 'Rabbit School' },
];

const FRUITS = [
  { number: 1, title: '레드향' },
  { number: 2, title: '샤인머스켓' },
  { number: 3, title: '산청딸기' },
  { number: 4, title: '한라봉' },
  { number: 5, title: '사과' },
  { number: 6, title: '애플망고' },
  { number: 7, title: '딸기' },
  { number: 8, title: '천혜향' },
  { number: 9, title: '과일선물세트' },
  { number: 10, title: '귤' },
];

export default function FilterMapPracticePage() {
  const rabbitFilter = classmate.filter((el) => el.school === 'Rabbit School');
  const scrFilter = classmate.filter((el) => el.school === 'SCR School');
  const evenFruits = FRUITS.filter((el) => el.number % 2 === 0);

  return (
    <>
      <h3>보너스문제 1-1: 토끼초등학교만 골라낸 후, candy: 10 key value 추가</h3>
      {rabbitFilter.map((el, candies) => {
        return (
          <div key={candies}>
            {el.name} {el.school} {(el.candy = 10)}
          </div>
        );
      })}
      <br />
      <h3>보너스문제1-2:</h3>
      {scrFilter.map((el, names) => {
        return (
          <div key={names}>
            {el.name + '어린이'} {el.school}
          </div>
        );
      })}
      <br />
      <h3>보너스문제2: 짝수만 나오게 해보세요</h3>
      {evenFruits.map((el, numbers) => {
        return (
          <div key={numbers}>
            {el.number} {el.title}
          </div>
        );
      })}
    </>
  );
}
