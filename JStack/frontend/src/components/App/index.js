import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from '../../assets/styles/global';

import defaultTheme from '../../assets/styles/themes/default';

import Routes from '../../Routes';

import Header from '../Header';

import * as S from './styles';

function App() {
  return (
    <Router>

      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <S.Container>
          <Header />

          <Routes />
        </S.Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
