import styled from '@emotion/styled';

export const ProductBtn = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 24px;
  background-color: ${(props) => (props.btnColor ? 'tomato' : 'default')};
`;
