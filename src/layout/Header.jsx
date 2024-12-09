import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <StHeader>
			<StHeaderContent>
				{/* 로고 */}
        <StLink to="/">
          <StImg src="/logo.png" alt="" />
          <StTitle>레시피 노트</StTitle>
				</StLink>
				
				{/* 태그 메뉴 및 날씨 */}

				{/* 로그인 메뉴 */}
      </StHeaderContent>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  background: var(--color-secondary);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
`;

const StHeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 50px;
`;

const StLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  text-decoration: none;
`;

const StImg = styled.img`
  height: 50px;
  aspect-ratio: 1/1;
`;

const StTitle = styled.h1`
  color: var(--color-white);
`;
