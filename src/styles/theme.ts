export const theme = {
  colors: {
    background: {
      primary: '#0a0a0a',
      secondary: '#1a1a1a',
      gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
    },
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
      accent: '#00f3ff'
    },
    neon: {
      blue: '#00f3ff',
      purple: '#9d00ff',
      red: '#ff0055',
      orange: '#ff9900',
      pink: '#ff61d8',
      green: '#00ff9d'
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: 'rgba(255, 255, 255, 0.1)',
      hover: 'rgba(255, 255, 255, 0.1)',
      active: 'rgba(255, 255, 255, 0.15)',
      shadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
    },
    status: {
      success: '#00ff9d',
      warning: '#ff9900',
      error: '#ff0055',
      info: '#00f3ff'
    }
  },
  fonts: {
    primary: 'Inter, sans-serif',
    secondary: 'Poppins, sans-serif',
    sizes: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
      xlarge: '1.5rem',
      xxlarge: '2rem'
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  shadows: {
    neon: '0 0 10px rgba(0, 243, 255, 0.5), 0 0 20px rgba(0, 243, 255, 0.3)',
    card: '0 4px 6px rgba(0, 0, 0, 0.1)',
    modal: '0 10px 20px rgba(0, 0, 0, 0.2)',
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    circle: '50%'
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease'
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px',
    wide: '1920px'
  },
  maxWidth: {
    content: '1400px',
    sidebar: '280px',
    form: '600px'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },
  zIndex: {
    base: 1,
    dropdown: 1000,
    modal: 2000,
    tooltip: 3000
  }
}; 