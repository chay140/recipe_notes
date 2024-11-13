import { useNavigate } from "react-router-dom";

function MyPage() {
    const navigate = useNavigate();
    return (
      <>
        <h1>내 페이지</h1>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          홈 화면
        </button>
      </>
    );
}

export default MyPage;
