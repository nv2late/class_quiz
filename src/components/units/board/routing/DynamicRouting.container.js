import DynamicRoutingPracticeUI from './DynamicRouting.present';
import { CREATE_PRODUCT } from './DynamicRouting.query';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function DynamicRoutingPracticeContainer() {
  const router = useRouter();

  const [createProduct] = useMutation(CREATE_PRODUCT);

  const [seller, setSeller] = useState('');
  const [productName, setProductName] = useState('');
  const [productDetail, setProductDetail] = useState('');
  const [price, setPrice] = useState(0);
  const [btnColor, setBtnColor] = useState(false);

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
      router.push(`/05/boards/${result.data.createProduct._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onChangeSeller = (e) => {
    setSeller(e.target.value);
    if (e.target.value && productName && productDetail && price) {
      setBtnColor(true);
    }
  };

  const onChangeProduct = (e) => {
    setProductName(e.target.value);
    if (e.target.value && seller && productDetail && price) {
      setBtnColor(true);
    }
  };

  const onChangeDetail = (e) => {
    setProductDetail(e.target.value);
    if (e.target.value && seller && productName && price) {
      setBtnColor(true);
    }
  };

  const onChangePrice = (e) => {
    setPrice(e.target.valueAsNumber);
    if (e.target.valueAsNumber && seller && productName && productDetail) {
      setBtnColor(true);
    }
  };

  return (
    <DynamicRoutingPracticeUI
      onChangeSeller={onChangeSeller}
      onChangeProduct={onChangeProduct}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onClickRegister={onClickRegister}
      btnColor={btnColor}
    />
  );
}
