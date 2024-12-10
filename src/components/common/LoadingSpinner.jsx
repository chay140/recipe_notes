import React from 'react'
import styled from 'styled-components';

const LoadingSpinner = () => {
  return (
    <StyledSpinner />
  )
}

export default LoadingSpinner

const StyledSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--color-fourth);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
  margin-right: 20px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;