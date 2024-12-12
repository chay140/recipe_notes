import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick, type }) => {
  return (
    <StButton onClick={onClick} type={type}>
      {children}
    </StButton>
  );
};

export default Button;

const StButton = styled.button`
  background-color: var(--color-third);
  color: var(--color-gray7);

  margin-top: 10px;
  padding: 15px 10px 10px;
  border-radius: var(--default-radius);
`;
