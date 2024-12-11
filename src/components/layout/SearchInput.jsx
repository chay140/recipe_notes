import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const SearchInput = () => {
  return (
    <StSearchWrapper>
      <StInput placeholder="검색..." />
      <StSearchButton>
        <FaSearch />
      </StSearchButton>
    </StSearchWrapper>
  );
};

export default SearchInput;

const StSearchWrapper = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  height: 32px;
  background-color: var(--color-primary);
  width: var(--search-width);
  border-radius: var(--default-radius);
  font-size: 24px;
  padding-left: 5px;
`;

const StInput = styled.input`
  flex: 1;
  height: 100%;
  font-size: 16px;
  padding: 0 5px;
`;

const StSearchButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px;
  height: 100%;

  background-color: var(--color-third);
  border-top-right-radius: var(--default-radius);
  border-bottom-right-radius: var(--default-radius);
  color: var(--color-white);
  cursor: pointer;
`;
