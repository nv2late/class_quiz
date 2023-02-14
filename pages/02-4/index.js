import { useState } from 'react';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [checkPW, setCheckPW] = useState('');

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function onChangePWCheck(e) {
    setCheckPW(e.target.value);
  }

  function onClickSignUp(e) {
    // 1) 이메일에 @가 없으면 에러
    // 2) 비번이랑 비번확인 다르면 에러
    // 3) 에러없는 입력은 state를 빈값으로 변경
    if (email.includes('@') === false) {
      setEmailError(`이메일은 '@'마크를 포함해야합니다. 확인해주세요!`);
    } else if (email.includes('@')) {
      setEmailError('');
    }

    if (password !== checkPW) {
      setPasswordError(`비밀번호가 일치하지 않습니다.`);
    } else if (password === checkPW) {
      setPasswordError('');
    }
  }

  return (
    <>
      Email: <input type="text" onChange={onChangeEmail} />
      <div>{emailError}</div>
      Password: <input type="password" onChange={onChangePassword} />
      <div>{passwordError}</div>
      Check Password: <input type="password" onChange={onChangePWCheck} />
      <div></div>
      <button onClick={onClickSignUp}>SignUp</button>
    </>
  );
}
