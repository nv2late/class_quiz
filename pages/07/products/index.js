import { gql, useMutation, useQuery } from '@apollo/client';
import styled from '@emotion/styled';

// API
const FETCH_PRODUCTS = gql`
  query fetchProducts {
    fetchProducts {
      _id
      seller
      name
      detail
      price
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      _id
      message
    }
  }
`;

// style
const Row = styled.div`
  display: flex;
  margin-top: 24px;
`;

const Column = styled.div`
  width: 24%;
  text-align: center;

  &:first-of-type,
  :last-of-type {
    width: 10%;
  }
`;

const DeleteBtn = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 16px;
`;

export default function MapFilterPractice() {
  const { data } = useQuery(FETCH_PRODUCTS);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const onClickDelete = async (e) => {
    await deleteProduct({
      variables: {
        productId: e.target.id, // 아래 button에 부여한 DOM요소 id 말하는 것, 헷갈릴 수 있으니 주의
      },
      refetchQueries: [
        {
          query: FETCH_PRODUCTS,
        },
      ],
    });
  };

  return (
    <>
      {data?.fetchProducts.map((el) => {
        return (
          <Row key={el._id}>
            <Column>
              <input type="checkbox" />
            </Column>
            {/* <Column>{el._id}</Column> */}
            <Column>{el.seller}</Column>
            <Column>{el.name}</Column>
            <Column>{el.detail}</Column>
            <Column>{el.price}</Column>
            <Column>
              <button id={el._id} onClick={onClickDelete}>
                삭제
              </button>
            </Column>
          </Row>
        );
      })}
    </>
  );
}
