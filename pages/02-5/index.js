import { faLocationDot, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Container, LogoWrapper, Wrapper, LoginWrapper, UserFindWrapper, SnsLogin } from '../../styles/02-5';

export default function eatsLoadsPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // 검증
  // 1) 이메일에 '@'가 포함되어있는지
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    if (!email.includes('@')) {
      setEmailError(`이메일 주소를 다시 확인해주세요.`);
    } else {
      setEmailError('');
    }
  };

  // 2) 패스워드가 정확한지
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (password.length >= 8 && password.length <= 16) {
      setPasswordError('');
    } else {
      setPasswordError(`8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.`);
    }
  };

  // 3) 아이디와 비밀번호 전부 제대로 들어와있을때 로그인 시키기
  // 문제발생: 두 인풋이 비어있을때 버튼 누르면 웰컴창이 떠버린다
  // 아이디랑 비밀번호 비어있을때 경고창 대신에 뭔가 더 좋은 방법이 있을거 같은데...
  const onClickLogin = () => {
    if (email === '' && password === '') {
      alert('이메일과 비밀번호를 입력해주세요.');
    } else if (emailError === '' && passwordError === '') {
      // API 백엔드서버에 저장하고 정보 받아오고 로그인
      alert('Welcome');
    }
  };

  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <FontAwesomeIcon icon={faLocationDot} size="7x"></FontAwesomeIcon>
          <h1>잇츠로드</h1>
        </LogoWrapper>

        <LoginWrapper>
          <input type="text" placeholder="이메일을 입력해주세요" onChange={onChangeEmail} />
          <span>{emailError}</span>
          <input type="password" placeholder="비밀번호를 입력해주세요" onChange={onChangePassword} />
          <span>{passwordError}</span>
          <button onClick={onClickLogin}>로그인</button>
        </LoginWrapper>

        <UserFindWrapper>
          <ul>
            <li>이메일 찾기</li>
            <li>비밀번호 찾기</li>
            <li>회원가입</li>
          </ul>
        </UserFindWrapper>

        <SnsLogin>
          <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
          <span>카카오톡으로 로그인</span>
        </SnsLogin>
      </Wrapper>
    </Container>
  );
}
