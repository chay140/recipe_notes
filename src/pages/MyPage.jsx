import styled from 'styled-components';

function MyPage() {
  // 회원정보 수정만
  return (
    <StMyPage>
      <h1>회원정보</h1>
    </StMyPage>
  );
}

export default MyPage;

const StMyPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
