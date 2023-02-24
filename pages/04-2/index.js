import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlPracticePage() {
  const [seller, setSeller] = useState('');
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');
  const [price, setPrice] = useState(1);
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: price,
        },
      },
    });
    console.log(result.data.createProduct);
    alert(result.data.createProduct.message);
  };

  const onChangeSeller = (e) => {
    setSeller(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeDetail = (e) => {
    setDetail(e.target.value);
  };

  const onChangePrice = (e) => {
    setPrice(e.target.valueAsNumber);
  };

  return (
    <>
      판매자: <input type="text" onChange={onChangeSeller} />
      <br />
      제품명: <input type="text" onChange={onChangeName} />
      <br />
      상세설명: <input type="text" onChange={onChangeDetail} />
      <br />
      가격: <input type="number" onChange={onChangePrice} />
      <br />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
