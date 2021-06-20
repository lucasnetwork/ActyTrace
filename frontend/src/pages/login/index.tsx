import Link from 'next/link';
import Container from './styles';

const Login = () => (
  <Container>
    <div>
      <h1>Login</h1>
      <form>
        <fieldset>
          <label htmlFor="name">Nome</label>
          <input id="name" />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input id="email" />
        </fieldset>
        <Link href="/forgetPassword">
          <a>Esqueceu a senha?</a>
        </Link>
        <button type="button">Entrar</button>
      </form>
    </div>
  </Container>
);

export default Login;
