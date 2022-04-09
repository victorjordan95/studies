import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.backgroundColor};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  button {
    cursor: pointer;
  }
`;
