import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlus, FaSearch, FaEdit, FaTrash, FaFileAlt } from 'react-icons/fa';
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

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.glass.background};
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.medium};
  padding: 0.5rem 1rem;
  width: 300px;
  gap: 0.5rem;

  input {
    background: none;
    border: none;
    color: ${theme.colors.text.primary};
    width: 100%;
    outline: none;

    &::placeholder {
      color: ${theme.colors.text.secondary};
    }
  }

  svg {
    color: ${theme.colors.text.secondary};
  }
`;

const AddButton = styled(motion.button)`
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

const Card = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.large};
  padding: 1.5rem;
  cursor: pointer;

  &:hover {
    border-color: ${theme.colors.neon.blue};
    box-shadow: ${theme.shadows.neon};
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
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

const CardInfo = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${theme.colors.glass.border};
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;

  &:last-child {
    margin-bottom: 0;
  }

  span:last-child {
    color: ${theme.colors.text.primary};
  }
`;

const StatusBadge = styled.span<{ status: 'Vigente' | 'Vencida' | 'Próxima' }>`
  padding: 0.3rem 0.8rem;
  border-radius: ${theme.borderRadius.small};
  font-size: 0.8rem;
  font-weight: 500;
  background: ${props => {
    switch (props.status) {
      case 'Vigente':
        return `${theme.colors.neon.blue}20`;
      case 'Vencida':
        return `${theme.colors.neon.red}20`;
      case 'Próxima':
        return `${theme.colors.neon.orange}20`;
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'Vigente':
        return theme.colors.neon.blue;
      case 'Vencida':
        return theme.colors.neon.red;
      case 'Próxima':
        return theme.colors.neon.orange;
    }
  }};
`;

const FormModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const FormContainer = styled(motion.div)`
  background: ${theme.colors.background.secondary};
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.large};
  padding: 2rem;
  width: 100%;
  max-width: 500px;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${theme.colors.text.primary};
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${theme.colors.text.secondary};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  background: ${theme.colors.glass.background};
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.medium};
  color: ${theme.colors.text.primary};
  outline: none;

  &:focus {
    border-color: ${theme.colors.neon.blue};
    box-shadow: ${theme.shadows.neon};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  background: ${theme.colors.glass.background};
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.medium};
  color: ${theme.colors.text.primary};
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: ${theme.colors.neon.blue};
    box-shadow: ${theme.shadows.neon};
  }

  option {
    background: ${theme.colors.background.secondary};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled(motion.button)<{ variant?: 'secondary' }>`
  flex: 1;
  padding: 0.8rem;
  border-radius: ${theme.borderRadius.medium};
  font-weight: 500;
  cursor: pointer;
  background: ${props => props.variant === 'secondary' 
    ? 'transparent' 
    : `linear-gradient(45deg, ${theme.colors.neon.blue}, ${theme.colors.neon.purple})`};
  color: ${theme.colors.text.primary};
  border: 1px solid ${props => props.variant === 'secondary' 
    ? theme.colors.glass.border 
    : 'transparent'};

  &:hover {
    box-shadow: ${theme.shadows.neon};
  }
`;

interface NR {
  id: number;
  number: string;
  title: string;
  validity: string;
  status: 'Vigente' | 'Vencida' | 'Próxima';
  employees: number;
  lastUpdate: string;
}

export const NRs = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [nrs] = useState<NR[]>([
    {
      id: 1,
      number: 'NR-10',
      title: 'Segurança em Instalações e Serviços em Eletricidade',
      validity: '2024-12-31',
      status: 'Vigente',
      employees: 45,
      lastUpdate: '2024-01-15'
    },
    {
      id: 2,
      number: 'NR-35',
      title: 'Trabalho em Altura',
      validity: '2024-06-30',
      status: 'Próxima',
      employees: 32,
      lastUpdate: '2024-01-10'
    },
    {
      id: 3,
      number: 'NR-33',
      title: 'Segurança e Saúde nos Trabalhos em Espaços Confinados',
      validity: '2024-03-15',
      status: 'Vencida',
      employees: 28,
      lastUpdate: '2024-01-05'
    }
  ]);

  const filteredNRs = nrs.filter(nr =>
    nr.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
    nr.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <Title>Normas Regulamentadoras</Title>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <SearchBar>
            <FaSearch />
            <input
              type="text"
              placeholder="Buscar NR..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBar>
          <AddButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowForm(true)}
          >
            <FaPlus />
            Nova NR
          </AddButton>
        </div>
      </Header>

      <Grid>
        {filteredNRs.map((nr) => (
          <Card
            key={nr.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CardHeader>
              <CardIcon>
                <FaFileAlt />
              </CardIcon>
              <CardTitle>{nr.number}</CardTitle>
            </CardHeader>
            <div style={{ color: theme.colors.text.secondary, fontSize: '0.9rem' }}>
              {nr.title}
            </div>
            <CardInfo>
              <InfoItem>
                <span>Status</span>
                <StatusBadge status={nr.status}>{nr.status}</StatusBadge>
              </InfoItem>
              <InfoItem>
                <span>Validade</span>
                <span>{new Date(nr.validity).toLocaleDateString()}</span>
              </InfoItem>
              <InfoItem>
                <span>Colaboradores</span>
                <span>{nr.employees}</span>
              </InfoItem>
              <InfoItem>
                <span>Última Atualização</span>
                <span>{new Date(nr.lastUpdate).toLocaleDateString()}</span>
              </InfoItem>
            </CardInfo>
          </Card>
        ))}
      </Grid>

      {showForm && (
        <FormModal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowForm(false)}
        >
          <FormContainer
            onClick={e => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <FormTitle>Nova Norma Regulamentadora</FormTitle>
            <FormGroup>
              <Label>Número da NR</Label>
              <Input type="text" placeholder="Ex: NR-10" />
            </FormGroup>
            <FormGroup>
              <Label>Título</Label>
              <Input type="text" placeholder="Digite o título da NR" />
            </FormGroup>
            <FormGroup>
              <Label>Data de Validade</Label>
              <Input type="date" />
            </FormGroup>
            <FormGroup>
              <Label>Status</Label>
              <Select>
                <option value="Vigente">Vigente</option>
                <option value="Vencida">Vencida</option>
                <option value="Próxima">Próxima</option>
              </Select>
            </FormGroup>
            <ButtonGroup>
              <Button
                variant="secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowForm(false)}
              >
                Cancelar
              </Button>
              <Button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Salvar
              </Button>
            </ButtonGroup>
          </FormContainer>
        </FormModal>
      )}
    </Container>
  );
}; 