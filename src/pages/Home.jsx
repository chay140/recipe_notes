import styled from 'styled-components';
import HorizontalCardList from '../components/home/HorizontalCardList';

function Home() {

  return (
    <StHome>
      {/* <HorizontalCardList label={`TOP`} icon={<FaHeart color="red"/>} />
      <HorizontalCardList label={`간단 (3-5분)`} />
      <HorizontalCardList label={`편의점 조합`} /> */}
      <HorizontalCardList label={`전체 레시피`} />
    </StHome>
  );
}

export default Home;

const StHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
