import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUsers, FaFileAlt, FaStethoscope, FaChartLine, FaExclamationTriangle } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import { DashboardCard } from '../../components/DashboardCard';

const HomeContainer = styled.div`
  padding: 1rem;
`;

const WelcomeSection = styled.div`
  margin-bottom: 2rem;
`;

const WelcomeTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, ${theme.colors.neon.blue}, ${theme.colors.neon.purple});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const WelcomeSubtitle = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const QuickStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  width: 100%;
`;

const StatCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.medium};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    border-color: ${theme.colors.neon.blue};
    box-shadow: ${theme.shadows.neon};
  }
`;

const StatIcon = styled.div<{ color: string }>`
  width: 50px;
  height: 50px;
  border-radius: ${theme.borderRadius.medium};
  background: ${props => props.color}20;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const StatInfo = styled.div`
  flex: 1;
`;

const StatValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.colors.text.primary};
  margin-bottom: 0.2rem;
`;

const StatLabel = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const AlertsSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${theme.colors.text.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${theme.colors.neon.red};
  }
`;

const AlertCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.medium};
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    border-color: ${theme.colors.neon.red};
    box-shadow: 0 0 10px ${theme.colors.neon.red}40;
  }
`;

const AlertIcon = styled.div`
  color: ${theme.colors.neon.red};
  font-size: 1.2rem;
`;

const AlertContent = styled.div`
  flex: 1;
`;

const AlertTitle = styled.div`
  color: ${theme.colors.text.primary};
  font-weight: 500;
  margin-bottom: 0.2rem;
`;

const AlertDescription = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const DashboardSection = styled.div`
  margin-bottom: 2rem;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
  width: 100%;
`;

export const Home = () => {
  const alerts = [
    {
      title: 'Exames Médicos Pendentes',
      description: '5 colaboradores com exames vencidos',
    },
    {
      title: 'NR-10 Vencida',
      description: '3 colaboradores precisam renovar o treinamento',
    },
    {
      title: 'NR-35 Próxima do Vencimento',
      description: '8 colaboradores com treinamento próximo do vencimento',
    },
  ];

  return (
    <HomeContainer>
      <WelcomeSection>
        <WelcomeTitle>Bem-vindo ao AtualizaNR</WelcomeTitle>
        <WelcomeSubtitle>
          Gerencie suas NR's, colaboradores e exames médicos de forma eficiente
        </WelcomeSubtitle>
      </WelcomeSection>

      <QuickStats>
        <StatCard whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <StatIcon color={theme.colors.neon.blue}>
            <FaUsers />
          </StatIcon>
          <StatInfo>
            <StatValue>156</StatValue>
            <StatLabel>Colaboradores Ativos</StatLabel>
          </StatInfo>
        </StatCard>

        <StatCard whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <StatIcon color={theme.colors.neon.purple}>
            <FaFileAlt />
          </StatIcon>
          <StatInfo>
            <StatValue>12</StatValue>
            <StatLabel>NR's em Vigor</StatLabel>
          </StatInfo>
        </StatCard>

        <StatCard whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <StatIcon color={theme.colors.neon.pink}>
            <FaStethoscope />
          </StatIcon>
          <StatInfo>
            <StatValue>8</StatValue>
            <StatLabel>Exames Pendentes</StatLabel>
          </StatInfo>
        </StatCard>

        <StatCard whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <StatIcon color={theme.colors.neon.orange}>
            <FaChartLine />
          </StatIcon>
          <StatInfo>
            <StatValue>45</StatValue>
            <StatLabel>Treinamentos Realizados</StatLabel>
          </StatInfo>
        </StatCard>
      </QuickStats>

      <AlertsSection>
        <SectionTitle>
          <FaExclamationTriangle />
          Alertas Importantes
        </SectionTitle>
        {alerts.map((alert, index) => (
          <AlertCard
            key={index}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <AlertIcon>
              <FaExclamationTriangle />
            </AlertIcon>
            <AlertContent>
              <AlertTitle>{alert.title}</AlertTitle>
              <AlertDescription>{alert.description}</AlertDescription>
            </AlertContent>
          </AlertCard>
        ))}
      </AlertsSection>

      <DashboardSection>
        <SectionTitle>Visão Geral</SectionTitle>
        <DashboardGrid>
          <DashboardCard
            title="NR's em Vigor"
            value="12"
            type="pie"
          />
          <DashboardCard
            title="Exames Pendentes"
            value="8"
            type="line"
          />
          <DashboardCard
            title="Colaboradores Ativos"
            value="156"
            type="line"
          />
          <DashboardCard
            title="Treinamentos Realizados"
            value="45"
            type="pie"
          />
        </DashboardGrid>
      </DashboardSection>
    </HomeContainer>
  );
}; 