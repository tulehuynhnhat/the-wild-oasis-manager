import styled from 'styled-components';
import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';
import Heading from '../ui/Heading';

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  align-content: center;
  justify-items: center;
  padding: 4rem;
  background-color: var(--color-grey-50);
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  width: 100%;
  gap: 3.2rem;
`;

function Login() {
  return (
    <LoginLayout>
      <Div>
        <Logo />
        <Heading as="h4">Log in to your account</Heading>
        <LoginForm />
      </Div>
    </LoginLayout>
  );
}

export default Login;
