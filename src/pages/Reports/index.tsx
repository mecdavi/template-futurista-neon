import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChartLine, FaChartPie, FaChartBar, FaDownload } from 'react-icons/fa';
import { theme } from '../../styles/theme';

const Container = styled.div`
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  background: linear-gradient(45deg, ${theme.colors.neon.blue}, ${theme.colors.neon.purple});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DownloadButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, ${theme.colors.neon.blue}, ${theme.colors.neon.purple});
  color: ${theme.colors.text.primary};
  padding: 0.8rem 1.5rem;
  border-radius: ${theme.borderRadius.medium};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    box-shadow: ${theme.shadows.neon};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const Card = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.large};
  padding: 1.5rem;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const CardIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.medium};
  background: ${theme.colors.neon.blue}20;
  color: ${theme.colors.neon.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: ${theme.colors.text.primary};
  margin: 0;
`;

const ChartPlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: ${theme.colors.glass.background};
  border: 1px dashed ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background: ${theme.colors.glass.background};
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.medium};
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${theme.colors.text.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${theme.colors.text.secondary};
`;

export const Reports = () => {
  return (
    <Container>
      <Header>
        <Title>Relatórios</Title>
        <DownloadButton
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaDownload />
          Exportar Relatório
        </DownloadButton>
      </Header>

      <Grid>
        <Card
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <CardHeader>
            <CardIcon>
              <FaChartLine />
            </CardIcon>
            <CardTitle>NR's por Status</CardTitle>
          </CardHeader>
          <ChartPlaceholder>
            Gráfico de Status das NR's
          </ChartPlaceholder>
          <StatGrid>
            <StatItem>
              <StatValue>12</StatValue>
              <StatLabel>Vigentes</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>3</StatValue>
              <StatLabel>Vencidas</StatLabel>
            </StatItem>
          </StatGrid>
        </Card>

        <Card
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <CardHeader>
            <CardIcon>
              <FaChartPie />
            </CardIcon>
            <CardTitle>Treinamentos</CardTitle>
          </CardHeader>
          <ChartPlaceholder>
            Gráfico de Treinamentos
          </ChartPlaceholder>
          <StatGrid>
            <StatItem>
              <StatValue>45</StatValue>
              <StatLabel>Realizados</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>8</StatValue>
              <StatLabel>Pendentes</StatLabel>
            </StatItem>
          </StatGrid>
        </Card>

        <Card
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <CardHeader>
            <CardIcon>
              <FaChartBar />
            </CardIcon>
            <CardTitle>Exames Médicos</CardTitle>
          </CardHeader>
          <ChartPlaceholder>
            Gráfico de Exames
          </ChartPlaceholder>
          <StatGrid>
            <StatItem>
              <StatValue>156</StatValue>
              <StatLabel>Válidos</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>12</StatValue>
              <StatLabel>Vencidos</StatLabel>
            </StatItem>
          </StatGrid>
        </Card>
      </Grid>
    </Container>
  );
}; 