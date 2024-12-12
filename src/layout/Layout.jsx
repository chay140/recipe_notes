import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Layout = () => {
  return (
    <StPage>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StPage>
  );
};

export default Layout;

const StPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;