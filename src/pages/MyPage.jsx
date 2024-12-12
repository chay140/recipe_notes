import styled from 'styled-components';
import InfoEditForm from '../components/mypage/InfoEditForm';

function MyPage() {
  // 회원정보 수정만
  return (
    <StMyPage>
      <StInfoEditFormWrapper>
        <h1>회원정보</h1>
        <InfoEditForm />
      </StInfoEditFormWrapper>
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

const StInfoEditFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 500px;
  margin-top: 50px;
  background-color: var(--color-secondary);
  padding: 1.5rem;
  border-radius: var(--default-radius);
`;