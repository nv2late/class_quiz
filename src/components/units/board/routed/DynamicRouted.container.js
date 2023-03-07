import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import DynamicRoutedUI from './DynamicRouted.present';
import { FETCH_PRODUCT } from './DynamicRouted.query';

export default function DynamicRoutedContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.id, // [] 변수가 id자리에 들어가면 된다
    },
  });

  return <DynamicRoutedUI data={data} />;
}
