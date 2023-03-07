export default function DynamicRoutingPracticeUI(props) {
  return (
    <>
      <h1>상품 등록 페이지</h1>
      판매자: <input type="text" onChange={props.onChangeSeller} />
      <br />
      상품명: <input type="text" onChange={props.onChangeProduct} />
      <br />
      상품내용: <input type="text" onChange={props.onChangeDetail} />
      <br />
      상품가격: <input type="number" onChange={props.onChangePrice} />
      <br />
      <button onClick={props.onClickRegister}>상품을 등록합니다.</button>
    </>
  );
}
