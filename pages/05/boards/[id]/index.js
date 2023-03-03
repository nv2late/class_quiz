import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
    }
  }
`;

export default function StaticRoutedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.id, // [] 변수가 id자리에 들어가면 된다
    },
  });

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
