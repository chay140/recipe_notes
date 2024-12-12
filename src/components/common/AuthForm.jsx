import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    password: '',
  });

  // 입력값
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <StForm onSubmit={handleSubmit}>
      {mode === 'signup' && (
        <>
          <p>닉네임</p>
          <StInput
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임"
            autoComplete="off"
            required
          />
        </>
      )}
      <p>이메일</p>
      <StInput
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="이메일"
        autoComplete="off"
        required
      />
      <p>비밀번호</p>
      <StInput
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
        autoComplete="off"
        required
      />
      <Button>{mode === 'login' ? '로그인' : '회원가입'}</Button>
    </StForm>
  );
};

export default AuthForm;

const StForm = styled.form`
  width: 100%;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;

  margin-top: 1.5rem;
  margin-bottom: 1rem;
  padding: 1.5rem;
  border-radius: var(--default-radius);
`;

const StInput = styled.input`
  border: 1px solid var(--color-gray3);
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: var(--default-radius);
`;
