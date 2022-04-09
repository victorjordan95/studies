import styled from 'styled-components';

export default styled.select`
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
  transition: border-color 0.2s ease-in;
  width: 100%;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }
`;
