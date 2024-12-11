import React from 'react';
import styled from 'styled-components';

const Button = ({ buttonHandler, label }) => {
  return <StButton onClick={buttonHandler}>{label}</StButton>;
};

export default Button;

const StButton = styled.button`
  background-color: var(--color-third);
  color: var(--color-gray7);

  padding: 15px 10px 10px;
  border-radius: var(--default-radius);

  &:hover {
  }
`;
