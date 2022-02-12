import logoImg from '../../assets/logo.svg';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <img src={logoImg} alt="dt money" />
      <button>Nova transação</button>
    </Container>
  );
}