'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9c27b0',
      dark: '#7b1fa2',
      contrastText: '#ffffff',
    },
    success: {
      main: '#388e3c',
    },
    error: {
      main: '#d32f2f',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'uppercase',
          fontWeight: 700,
          letterSpacing: '1px',
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#9c27b0',
        },
      },
    },
  },
});

export default theme;
