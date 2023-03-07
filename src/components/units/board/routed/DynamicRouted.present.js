export default function DynamicRoutedUI() {
  return (
    <>
      <h1>제품 상세 페이지</h1>
      <div>판매처: {data ? data.fetchProduct.seller : '로딩중입니다...'}</div>
      <div>제품명: {data && data.fetchProduct.name}</div>
      <div>제품상세: {data?.fetchProduct.detail}</div>
      <div>제품가격: {data && data.fetchProduct.price}</div>
      <div>제품등록코드: {router.query.id}</div>
    </>
  );
}
