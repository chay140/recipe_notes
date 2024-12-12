import styled from 'styled-components';
import AuthForm from '../components/common/AuthForm';
import { Link } from 'react-router-dom';

const Signup = () => {
  const handleSignup = (formData) => {
    console.log('슈바 베이스 회원가입');
  };

  return (
    <StSignup>
      <StFormWrapper>
        <h1>회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignup} />
        <p>
          이미 계정이 있으신가요?{` `}
          <Link to="/login">로그인</Link>
        </p>
      </StFormWrapper>
    </StSignup>
  );
};

export default Signup;

const StSignup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StFormWrapper = styled.div`
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
