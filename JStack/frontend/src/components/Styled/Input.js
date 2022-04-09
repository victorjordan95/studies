import styled, { css } from 'styled-components';

export default styled.input`
  appearance: none;
  background: #FFFFFF;
  border-radius: 4px;
  border-radius: 4px;
  border: 2px solid #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-size: 16px;
  height: 52px;
  outline: none ;
  padding: 0 16px;
  width: 100%;
  transition: border-color 0.2s ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    border-color: ${theme.colors.danger.main}!important;
    color: ${theme.colors.danger.main};
  `}
`;
