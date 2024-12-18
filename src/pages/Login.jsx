import styled from 'styled-components';
import AuthForm from '../components/common/AuthForm';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleLogin = (formData) => {
    console.log('슈바 베이스 로그인 ');
  };

  return (
    <StLogin>
      <StFormWrapper>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <p>
          계정이 없으신가요?{` `}
          <Link to="/signup">회원가입</Link>
        </p>
      </StFormWrapper>
    </StLogin>
  );
};

export default Login;

const StLogin = styled.div`
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
