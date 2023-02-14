import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.95);
`;

export const Wrapper = styled.div`
  width: 640px;
  height: 100vh;
  padding-left: 50px;
  padding-right: 50px;
  background-image: url('/pizza.png');
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
  margin-bottom: 140px;
  h1 {
    padding-top: 40px;
    font-size: 3.75rem;
    font-weight: 700;
    line-height: 5.438rem;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;

  input {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #7d7d7d;
    color: white;
    font-size: 1.5rem;
    background-color: transparent;
  }

  span {
    display: block;
    margin-top: 8px;
    margin-bottom: 32px;
    font-size: 1rem;
    color: #ff1b6d;
  }

  button {
    width: 100%;
    height: 72px;
    border: none;
    border-radius: 48px;
    font-size: 1.625rem;
    color: white;
    background-color: rgba(255, 27, 109, 0.5);
    cursor: pointer;
  }
`;

// 여기 구분자부분 좀 더 효율적으로 괜찮게 할 수 있는 방법이 있으면 좋겠다. 이렇게하면 분명히 스크린리더 사용자한테는 엉뚱한 선 글자를 읽어줘서 혼동을 주지 않나...? 끙
export const UserFindWrapper = styled.div`
  margin-bottom: 56px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    font-size: 1.25rem;
  }

  li {
    &:not(:last-child) {
      margin-right: 0px;
    }
    &::after {
      content: '|';
      margin: 0 16px;
    }
    &:last-child {
      &::after {
        content: '';
      }
    }
  }
`;

export const UserFindInfo = styled.li`
  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 104px;
    width: 1px;
    height: 12px;
    border-radius: 0.5px;
    background-color: #dadada;
  }
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const SnsLogin = styled.button`
  width: 100%;
  height: 72px;
  border: 1px solid #ffe100;
  border-radius: 48px;
  font-size: 1.625rem;
  color: #ffe100;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  span {
    margin-left: 24px;
  }
`;
