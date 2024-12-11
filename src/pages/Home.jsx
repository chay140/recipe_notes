import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Home() {
  const navigate = useNavigate();

  // 내 페이지 가기
  const moveToMypage = () => {
    navigate("/mypage");
  }
  
  return (
    <StHome>
      <h1>홈 화면</h1>
    </StHome>
  );
}

export default Home;

const StHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`