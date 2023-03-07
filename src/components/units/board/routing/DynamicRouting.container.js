import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import DynamicRoutingPracticeUI from './DynamicRouting.present';
import { CREATE_PRODUCT } from './DynamicRouting.query';

export default function DynamicRoutingPracticeContainer() {
  const router = useRouter();

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

      alert(result.data.createProduct.message);
      console.log(result.data.createProduct._id);
      router.push(`/05/boards/${result.data.createProduct._id}`);
    } catch (error) {
      console.log(error.message);
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
    <DynamicRoutingPracticeUI
      onChangeSeller={onChangeSeller}
      onChangeProduct={onChangeProduct}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onClickRegister={onClickRegister}
    />
  );
}
