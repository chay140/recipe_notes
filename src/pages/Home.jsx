import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // 내 페이지 가기
  const moveToMypage = () => {
    navigate("/mypage");
  }
  
  return (
    <>
      <h1>홈 화면</h1>
      <button onClick={moveToMypage}>내 페이지</button>
    </>
  );
}

export default Home;
