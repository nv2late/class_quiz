import { gql, useMutation } from '@apollo/client';
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

export default function DynamicRoutingPracticePage() {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [seller, setSeller] = useState('');
  const [productName, setProductName] = useState('');
  const [productDetail, setProductDetail] = useState('');
  const [price, setPrice] = useState(0);

  const onClickRegister = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller: seller,
          createProductInput: {
            name: productName,
            detail: productDetail,
            price: price,
          },
        },
      });

      console.log(result.data.createProduct);
      alert(result.data.createProduct.message);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeSeller = (e) => {
    setSeller(e.target.value);
  };

  const onChangeProduct = (e) => {
    setProductName(e.target.value);
  };

  const onChangeDetail = (e) => {
    setProductDetail(e.target.value);
  };

  const onChangePrice = (e) => {
    setPrice(e.target.valueAsNumber);
  };

  return (
    <>
      <h1>상품 등록 페이지</h1>
      판매자: <input type="text" onChange={onChangeSeller} />
      <br />
      상품명: <input type="text" onChange={onChangeProduct} />
      <br />
      상품내용: <input type="text" onChange={onChangeDetail} />
      <br />
      상품가격: <input type="number" onChange={onChangePrice} />
      <br />
      <button onClick={onClickRegister}>상품을 등록합니다.</button>
    </>
  );
}
