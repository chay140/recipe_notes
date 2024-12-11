import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HorizontalCardList from '../components/home/HorizontalCardList';
import { FaHeart } from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();

  // 내 페이지 가기
  const moveToMypage = () => {
    navigate('/mypage');
  };

  return (
    <StHome>
      <HorizontalCardList label={`TOP`} icon={<FaHeart color="red"/>} />
      <HorizontalCardList label={`간단 (3-5분)`} />
      <HorizontalCardList label={`편의점 조합`} />
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
