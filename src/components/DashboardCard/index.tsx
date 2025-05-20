import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { theme } from '../../styles/theme';

const Card = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.large};
  padding: 1.5rem;
  box-shadow: ${theme.shadows.glass};
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: ${theme.colors.text.primary};
`;

const Value = styled.div`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(45deg, ${theme.colors.neon.blue}, ${theme.colors.neon.purple});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ChartContainer = styled.div`
  height: 200px;
  margin-top: 1rem;
`;

const COLORS = [theme.colors.neon.blue, theme.colors.neon.purple, theme.colors.neon.pink, theme.colors.neon.orange];

const pieData = [
  { name: 'NR-10', value: 400 },
  { name: 'NR-35', value: 300 },
  { name: 'NR-33', value: 300 },
  { name: 'NR-12', value: 200 },
];

const lineData = [
  { name: 'Jan', value: 400 },
  { name: 'Fev', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Abr', value: 800 },
  { name: 'Mai', value: 500 },
  { name: 'Jun', value: 700 },
];

interface DashboardCardProps {
  title: string;
  value: string | number;
  type: 'pie' | 'line';
}

export const DashboardCard = ({ title, value, type }: DashboardCardProps) => {
  return (
    <Card
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <CardHeader>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </CardHeader>
      <ChartContainer>
        {type === 'pie' ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: theme.colors.background.secondary,
                  border: `1px solid ${theme.colors.glass.border}`,
                  borderRadius: theme.borderRadius.small,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke={theme.colors.glass.border} />
              <XAxis dataKey="name" stroke={theme.colors.text.secondary} />
              <YAxis stroke={theme.colors.text.secondary} />
              <Tooltip
                contentStyle={{
                  background: theme.colors.background.secondary,
                  border: `1px solid ${theme.colors.glass.border}`,
                  borderRadius: theme.borderRadius.small,
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={theme.colors.neon.blue}
                strokeWidth={2}
                dot={{ fill: theme.colors.neon.blue }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </ChartContainer>
    </Card>
  );
}; 