import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import styled from 'styled-components';
import Button from '../common/Button';
import { useUserStore } from '../../zustand/userStore';

const InfoEditForm = () => {
	const { name } = useUserStore();
  const [userName, setUserName] = useState(name);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <StForm>
      <ImageUpload />
      <p>닉네임 변경</p>
      <StInput
        type="text"
        name="text"
        value={userName}
        onChange={handleChange}
        placeholder="닉네임"
        autoComplete="off"
        required
      />
      <Button type="submit">수정 완료</Button>
    </StForm>
  );
};

export default InfoEditForm;

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
