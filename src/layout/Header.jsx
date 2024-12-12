import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderMenu from '../components/layout/HeaderMenu';
import SearchInput from '../components/layout/SearchInput';

const Header = () => {
  return (
    <StHeader>
      <StHeaderContent>
        {/* 로고 */}
        <StLink to="/">
          <StImg src="/logo.svg" alt="recipe notes logo" />
          <h1>레시피 노트</h1>
        </StLink>
        {/* 검색창 */}
        <SearchInput />

        {/* 메뉴 */}
        <HeaderMenu />
      </StHeaderContent>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  z-index: 10;
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

  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 5px;
`;

const StHeaderContent = styled.div`
  width: var(--inner-width);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
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
