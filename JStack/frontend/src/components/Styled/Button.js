import styled, { css } from 'styled-components';

export default styled.button`
  background: ${(props) => props.theme.colors.primary.main};
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  height: 48px;
  padding: 0 16px;
  transition: background 0.2s ease-in;


  &:hover {
    background: ${(props) => props.theme.colors.primary.light};
  }

  &:active {
    background: ${(props) => props.theme.colors.primary.dark};
  }

  &:disabled {
    background: #ccc;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`

    background: ${theme.colors.danger.main};
    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `};

`;
