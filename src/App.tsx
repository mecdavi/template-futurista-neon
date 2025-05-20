import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { AuthProvider } from './contexts/AuthContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${theme.colors.background.primary};
`;

const TopBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${theme.colors.glass.border};
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, ${theme.colors.neon.blue}, ${theme.colors.neon.purple});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: ${theme.maxWidth.sidebar};
  margin-top: 60px;
  padding: 2rem;
  width: 100%;
  min-width: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-left: 0;
    max-width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

const AppContent = () => {
  return (
    <AppContainer>
      <TopBar>
        <Logo>AtualizaNR</Logo>
        <Header />
      </TopBar>
      <Sidebar />
      <ContentWrapper>
        <MainContent>
          <Outlet />
        </MainContent>
      </ContentWrapper>
    </AppContainer>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <AppContent />
    </AuthProvider>
  );
};

export default App;
