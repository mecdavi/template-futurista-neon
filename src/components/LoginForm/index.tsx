import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUser, FaLock } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import { useAuth } from '../../contexts/AuthContext';

const FormContainer = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.glass};
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(45deg, ${theme.colors.neon.blue}, ${theme.colors.neon.purple});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.medium};
  color: ${theme.colors.text.primary};
  font-size: 1rem;
  transition: ${theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${theme.colors.neon.blue};
    box-shadow: ${theme.shadows.neon};
  }

  &::placeholder {
    color: ${theme.colors.text.secondary};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.text.secondary};
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(45deg, ${theme.colors.neon.blue}, ${theme.colors.neon.purple});
  border-radius: ${theme.borderRadius.medium};
  color: ${theme.colors.text.primary};
  font-weight: 600;
  font-size: 1rem;
  transition: ${theme.transitions.default};

  &:hover {
    box-shadow: ${theme.shadows.neon};
  }
`;

const ErrorMessage = styled.div`
  color: ${theme.colors.neon.red};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${theme.colors.text.primary};
  border-top: 2px solid ${theme.colors.neon.blue};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(username, password);
    } catch (err) {
      setError('Usuário ou senha inválidos');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      as="form"
      onSubmit={handleSubmit}
    >
      <Title>Bem-vindo</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <InputGroup>
        <IconWrapper>
          <FaUser />
        </IconWrapper>
        <Input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </InputGroup>
      <InputGroup>
        <IconWrapper>
          <FaLock />
        </IconWrapper>
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </InputGroup>
      <Button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isLoading}
      >
        {isLoading ? <LoadingSpinner /> : 'Entrar'}
      </Button>
    </FormContainer>
  );
}; 