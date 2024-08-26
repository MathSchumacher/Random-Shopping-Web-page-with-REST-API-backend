import { createTheme } from '@mui/material/styles';

// Importar o CSS do tema para aplicar variáveis
import './theme.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Cor primária
        },
        secondary: {
            main: '#dc004e', // Cor secundária
        },
    },
    spacing: 8, // Espaçamento
    components: {
        // Definições de componentes personalizados
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                    padding: '8px 16px',
                    fontFamily: 'Arial, sans-serif',
                    textTransform: 'none',
                },
                containedPrimary: {
                    backgroundColor: '#1976d2',
                    color: '#fff',
                },
                containedSecondary: {
                    backgroundColor: '#dc004e',
                    color: '#fff',
                },
            },
        },
    },
});

export default theme;
