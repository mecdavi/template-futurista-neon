import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBell, FaLock, FaPalette, FaLanguage, FaSave } from 'react-icons/fa';
import { theme } from '../../styles/theme';

const Container = styled.div`
  max-width: ${theme.maxWidth.form};
  margin: 0 auto;
  padding: ${theme.spacing.lg};
`;

const Title = styled.h1`
  font-size: ${theme.fonts.sizes.xxlarge};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xl};
  text-align: center;
`;

const SettingsGrid = styled.div`
  display: grid;
  gap: ${theme.spacing.lg};
  width: 100%;
`;

const SettingsCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.large};
  padding: ${theme.spacing.lg};
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};

  svg {
    font-size: 1.5rem;
    color: ${theme.colors.neon.blue};
  }
`;

const CardTitle = styled.h2`
  font-size: ${theme.fonts.sizes.large};
  color: ${theme.colors.text.primary};
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.md};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${theme.spacing.xs};
  color: ${theme.colors.text.secondary};
`;

const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm};
  background: ${theme.colors.background.secondary};
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.medium};
  color: ${theme.colors.text.primary};
  transition: ${theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${theme.colors.neon.blue};
    box-shadow: 0 0 0 2px ${theme.colors.neon.blue}40;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: ${theme.spacing.sm};
  background: ${theme.colors.background.secondary};
  border: 1px solid ${theme.colors.glass.border};
  border-radius: ${theme.borderRadius.medium};
  color: ${theme.colors.text.primary};
  transition: ${theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${theme.colors.neon.blue};
    box-shadow: 0 0 0 2px ${theme.colors.neon.blue}40;
  }
`;

const Toggle = styled.label`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  cursor: pointer;
`;

const ToggleInput = styled.input`
  display: none;

  &:checked + span {
    background: ${theme.colors.neon.blue};
    
    &:before {
      transform: translateX(20px);
    }
  }
`;

const ToggleSlider = styled.span`
  position: relative;
  width: 40px;
  height: 20px;
  background: ${theme.colors.background.secondary};
  border-radius: 10px;
  transition: ${theme.transitions.default};

  &:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${theme.colors.text.primary};
    top: 2px;
    left: 2px;
    transition: ${theme.transitions.default};
  }
`;

const SaveButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.neon.blue};
  color: ${theme.colors.background.primary};
  border: none;
  border-radius: ${theme.borderRadius.medium};
  font-weight: ${theme.fonts.weights.semibold};
  cursor: pointer;
  margin: ${theme.spacing.xl} auto;
  transition: ${theme.transitions.default};

  &:hover {
    background: ${theme.colors.neon.purple};
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      sound: false
    },
    security: {
      twoFactor: false,
      sessionTimeout: '30'
    },
    appearance: {
      theme: 'dark',
      fontSize: 'medium'
    },
    language: 'pt-BR'
  });

  const handleSave = () => {
    // Implementar lógica de salvamento
    console.log('Configurações salvas:', settings);
  };

  return (
    <Container>
      <Title>Configurações</Title>
      <SettingsGrid>
        <SettingsCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CardHeader>
            <FaBell />
            <CardTitle>Notificações</CardTitle>
          </CardHeader>
          <FormGroup>
            <Toggle>
              <ToggleInput
                type="checkbox"
                checked={settings.notifications.email}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: {
                    ...settings.notifications,
                    email: e.target.checked
                  }
                })}
              />
              <ToggleSlider />
              Notificações por e-mail
            </Toggle>
          </FormGroup>
          <FormGroup>
            <Toggle>
              <ToggleInput
                type="checkbox"
                checked={settings.notifications.push}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: {
                    ...settings.notifications,
                    push: e.target.checked
                  }
                })}
              />
              <ToggleSlider />
              Notificações push
            </Toggle>
          </FormGroup>
          <FormGroup>
            <Toggle>
              <ToggleInput
                type="checkbox"
                checked={settings.notifications.sound}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: {
                    ...settings.notifications,
                    sound: e.target.checked
                  }
                })}
              />
              <ToggleSlider />
              Som nas notificações
            </Toggle>
          </FormGroup>
        </SettingsCard>

        <SettingsCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <CardHeader>
            <FaLock />
            <CardTitle>Segurança</CardTitle>
          </CardHeader>
          <FormGroup>
            <Toggle>
              <ToggleInput
                type="checkbox"
                checked={settings.security.twoFactor}
                onChange={(e) => setSettings({
                  ...settings,
                  security: {
                    ...settings.security,
                    twoFactor: e.target.checked
                  }
                })}
              />
              <ToggleSlider />
              Autenticação em dois fatores
            </Toggle>
          </FormGroup>
          <FormGroup>
            <Label>Tempo limite da sessão (minutos)</Label>
            <Select
              value={settings.security.sessionTimeout}
              onChange={(e) => setSettings({
                ...settings,
                security: {
                  ...settings.security,
                  sessionTimeout: e.target.value
                }
              })}
            >
              <option value="15">15 minutos</option>
              <option value="30">30 minutos</option>
              <option value="60">1 hora</option>
              <option value="120">2 horas</option>
            </Select>
          </FormGroup>
        </SettingsCard>

        <SettingsCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <CardHeader>
            <FaPalette />
            <CardTitle>Aparência</CardTitle>
          </CardHeader>
          <FormGroup>
            <Label>Tema</Label>
            <Select
              value={settings.appearance.theme}
              onChange={(e) => setSettings({
                ...settings,
                appearance: {
                  ...settings.appearance,
                  theme: e.target.value
                }
              })}
            >
              <option value="dark">Escuro</option>
              <option value="light">Claro</option>
              <option value="system">Sistema</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>Tamanho da fonte</Label>
            <Select
              value={settings.appearance.fontSize}
              onChange={(e) => setSettings({
                ...settings,
                appearance: {
                  ...settings.appearance,
                  fontSize: e.target.value
                }
              })}
            >
              <option value="small">Pequeno</option>
              <option value="medium">Médio</option>
              <option value="large">Grande</option>
            </Select>
          </FormGroup>
        </SettingsCard>

        <SettingsCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <CardHeader>
            <FaLanguage />
            <CardTitle>Idioma</CardTitle>
          </CardHeader>
          <FormGroup>
            <Label>Idioma do sistema</Label>
            <Select
              value={settings.language}
              onChange={(e) => setSettings({
                ...settings,
                language: e.target.value
              })}
            >
              <option value="pt-BR">Português (Brasil)</option>
              <option value="en-US">English (US)</option>
              <option value="es">Español</option>
            </Select>
          </FormGroup>
        </SettingsCard>
      </SettingsGrid>

      <SaveButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSave}
      >
        <FaSave />
        Salvar Configurações
      </SaveButton>
    </Container>
  );
};

export default Settings; 