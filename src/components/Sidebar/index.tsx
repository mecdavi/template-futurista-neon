import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUsers, FaFileAlt, FaChartLine, FaCog, FaBars } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import { useState } from 'react';

const SidebarContainer = styled(motion.nav)<{ isOpen: boolean }>`
  width: ${theme.maxWidth.sidebar};
  min-width: ${theme.maxWidth.sidebar};
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(10px);
  border-right: 1px solid ${theme.colors.glass.border};
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  z-index: 1200;
  left: 0;
  top: 0;
  transition: transform 0.3s ease;
  transform: none;

  @media (max-width: ${theme.breakpoints.tablet}) {
    transform: translateX(-100%);
    ${(props) => props.isOpen && css`transform: translateX(0);`}
    box-shadow: 2px 0 16px #0008;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 1100;
  display: none;
  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, ${theme.colors.neon.blue}, ${theme.colors.neon.purple});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  text-align: center;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavItem = styled(motion.li)`
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: ${theme.colors.text.secondary};
  text-decoration: none;
  border-radius: ${theme.borderRadius.medium};
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.glass.hover};
    color: ${theme.colors.text.primary};
  }

  &.active {
    background: ${theme.colors.glass.active};
    color: ${theme.colors.text.primary};
    box-shadow: ${theme.shadows.neon};
  }

  svg {
    font-size: 1.2rem;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1300;
  background: ${theme.colors.glass.background};
  border: 1px solid ${theme.colors.glass.border};
  color: ${theme.colors.text.primary};
  padding: 0.5rem;
  border-radius: ${theme.borderRadius.medium};
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

const navItems = [
  { path: '/', icon: FaHome, label: 'Dashboard' },
  { path: '/employees', icon: FaUsers, label: 'Colaboradores' },
  { path: '/nrs', icon: FaFileAlt, label: "NR's" },
  { path: '/reports', icon: FaChartLine, label: 'Relatórios' },
  { path: '/settings', icon: FaCog, label: 'Configurações' }
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fecha o menu ao clicar em overlay ou em um link
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <MobileMenuButton
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaBars />
      </MobileMenuButton>
      <AnimatePresence>
        {isOpen && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
        )}
      </AnimatePresence>
      <SidebarContainer
        isOpen={isOpen}
        initial={false}
        animate={isOpen ? { x: 0 } : { x: '-100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <Logo>AtualizaNR</Logo>
        <NavList>
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <StyledNavLink to={item.path} onClick={handleClose}>
                <item.icon />
                {item.label}
              </StyledNavLink>
            </NavItem>
          ))}
        </NavList>
      </SidebarContainer>
    </>
  );
}; 