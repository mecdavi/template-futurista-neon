import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBell, FaUser, FaSignOutAlt, FaCog, FaExchangeAlt } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import { theme } from '../../styles/theme';
import { useState } from 'react';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(45deg, ${theme.colors.neon.blue}, ${theme.colors.neon.purple});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.text.primary};
  font-weight: bold;
  cursor: pointer;
  transition: ${theme.transitions.default};

  &:hover {
    transform: scale(1.05);
  }
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  color: ${theme.colors.text.primary};
  font-weight: 500;
`;

const UserRole = styled.span`
  color: ${theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${theme.colors.text.secondary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: ${theme.borderRadius.medium};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${theme.colors.text.primary};
    background: ${theme.colors.glass.hover};
  }

  svg {
    font-size: 1.2rem;
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: ${theme.colors.neon.red};
  color: ${theme.colors.text.primary};
  font-size: 0.7rem;
  padding: 0.2rem 0.4rem;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
`;

const Menu = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.medium};
  padding: 0.5rem;
  min-width: 200px;
  box-shadow: ${theme.shadows.neon};
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  color: ${theme.colors.text.secondary};
  cursor: pointer;
  border-radius: ${theme.borderRadius.small};
  transition: ${theme.transitions.default};

  &:hover {
    background: ${theme.colors.glass.hover};
    color: ${theme.colors.text.primary};
  }

  svg {
    font-size: 1rem;
  }
`;

const NotificationPanel = styled(Menu)`
  min-width: 300px;
`;

const NotificationItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${theme.colors.glass.border};
  cursor: pointer;
  transition: ${theme.transitions.default};

  &:hover {
    background: ${theme.colors.glass.hover};
  }

  &:last-child {
    border-bottom: none;
  }
`;

const NotificationTitle = styled.div`
  font-weight: 500;
  color: ${theme.colors.text.primary};
  margin-bottom: 0.25rem;
`;

const NotificationTime = styled.div`
  font-size: 0.8rem;
  color: ${theme.colors.text.secondary};
`;

export const Header = () => {
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'NR-35 atualizada',
      time: '5 minutos atrás'
    },
    {
      id: 2,
      title: 'Novo colaborador adicionado',
      time: '1 hora atrás'
    },
    {
      id: 3,
      title: 'Treinamento pendente',
      time: '2 horas atrás'
    }
  ];

  return (
    <HeaderContainer>
      <Actions>
        <IconButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <FaBell />
          <NotificationBadge>{notifications.length}</NotificationBadge>
        </IconButton>
      </Actions>

      <UserInfo>
        <UserAvatar onClick={() => setShowUserMenu(!showUserMenu)}>
          {user?.name?.charAt(0) || 'U'}
        </UserAvatar>
        <UserDetails>
          <UserName>{user?.name || 'Usuário'}</UserName>
          <UserRole>{user?.role || 'Administrador'}</UserRole>
        </UserDetails>

        <AnimatePresence>
          {showUserMenu && (
            <Menu
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <MenuItem>
                <FaUser />
                Meu Perfil
              </MenuItem>
              <MenuItem>
                <FaCog />
                Configurações
              </MenuItem>
              <MenuItem>
                <FaExchangeAlt />
                Trocar Conta
              </MenuItem>
              <MenuItem onClick={logout}>
                <FaSignOutAlt />
                Sair
              </MenuItem>
            </Menu>
          )}

          {showNotifications && (
            <NotificationPanel
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {notifications.map((notification) => (
                <NotificationItem key={notification.id}>
                  <NotificationTitle>{notification.title}</NotificationTitle>
                  <NotificationTime>{notification.time}</NotificationTime>
                </NotificationItem>
              ))}
            </NotificationPanel>
          )}
        </AnimatePresence>
      </UserInfo>
    </HeaderContainer>
  );
}; 