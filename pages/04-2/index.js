import { useMutation, gql } from '@apollo/client';

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "ㅇㅂㅇ", title: "으갸갸갸", contents: "호잇") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlPracticePage() {
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard();
    console.log(result);
    console.log(result.data.createBoard.message);
    console.log(result.data.createBoard.number);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
