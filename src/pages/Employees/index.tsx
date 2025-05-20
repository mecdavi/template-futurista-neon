import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlus, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
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

const Table = styled.div`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  width: 100%;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
  padding: 1rem;
  background: ${theme.colors.background.secondary};
  border-bottom: 1px solid ${theme.colors.glass.border};
  color: ${theme.colors.text.secondary};
  font-weight: 500;
`;

const TableRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr 1fr;
  padding: 1rem;
  border-bottom: 1px solid ${theme.colors.glass.border};
  color: ${theme.colors.text.primary};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${theme.colors.background.secondary};
  }
`;

const ActionButton = styled(motion.button)`
  color: ${theme.colors.text.secondary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: ${theme.borderRadius.small};
  transition: ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.neon.blue};
    background: ${theme.colors.background.secondary};
  }

  &.delete:hover {
    color: ${theme.colors.neon.red};
  }
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

interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  status: 'Ativo' | 'Inativo';
}

export const Employees = () => {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [employees] = useState<Employee[]>([
    { id: 1, name: 'João Silva', position: 'Eletricista', department: 'Manutenção', status: 'Ativo' },
    { id: 2, name: 'Maria Santos', position: 'Técnica de Segurança', department: 'SESMT', status: 'Ativo' },
    { id: 3, name: 'Pedro Oliveira', position: 'Operador', department: 'Produção', status: 'Inativo' },
  ]);

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <Title>Colaboradores</Title>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <SearchBar>
            <FaSearch />
            <input
              type="text"
              placeholder="Buscar colaborador..."
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
            Novo Colaborador
          </AddButton>
        </div>
      </Header>

      <Table>
        <TableHeader>
          <div>Nome</div>
          <div>Cargo</div>
          <div>Departamento</div>
          <div>Status</div>
          <div>Ações</div>
        </TableHeader>
        {filteredEmployees.map((employee) => (
          <TableRow
            key={employee.id}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div>{employee.name}</div>
            <div>{employee.position}</div>
            <div>{employee.department}</div>
            <div>{employee.status}</div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <ActionButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEdit />
              </ActionButton>
              <ActionButton
                className="delete"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTrash />
              </ActionButton>
            </div>
          </TableRow>
        ))}
      </Table>

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
            <FormTitle>Novo Colaborador</FormTitle>
            <FormGroup>
              <Label>Nome Completo</Label>
              <Input type="text" placeholder="Digite o nome completo" />
            </FormGroup>
            <FormGroup>
              <Label>Cargo</Label>
              <Input type="text" placeholder="Digite o cargo" />
            </FormGroup>
            <FormGroup>
              <Label>Departamento</Label>
              <Input type="text" placeholder="Digite o departamento" />
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