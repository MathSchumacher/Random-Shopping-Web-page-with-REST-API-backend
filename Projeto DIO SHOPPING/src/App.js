import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import styled from 'styled-components';
import store from './components/store';
import MainRoutes from './routes';
import Header from './components/Header';
import theme from './theme';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Aplicar estilos diretamente no componente
const AppWrapper = styled(Container)`
  padding: ${({ theme }) => theme.spacing(2)}; // Usando o espaçamento do tema
  min-height: 100vh; // Garante que o container ocupe a altura total da viewport
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.background.default}; // Cor de fundo padrão do tema
`;

const App = () => {
    const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'));

    if (localCart !== null) {
        store.dispatch({ type: 'CHANGE_CART', localCart });
    }

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppWrapper maxWidth="xl" theme={theme}>
                    <Router>
                        <Header />
                        <MainRoutes />
                    </Router>
                </AppWrapper>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
