import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Layout = () => {
  return (
    <StPage>
      <Header />
      <StMain>
        <Outlet />
      </StMain>
      <Footer />
    </StPage>
  );
};

export default Layout;

const StMain = styled.main`
  flex-grow: 1;
`;

const StPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;