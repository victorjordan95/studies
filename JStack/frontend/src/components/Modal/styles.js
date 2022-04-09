import styled from 'styled-components';

export const Overlay = styled.div`
  align-items: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  max-width: 450px;
  padding: 24px;
  width: 100%;

  h1 {
    color: ${({ theme, danger }) => (danger ? theme.colors.danger.main : theme.colors.gray[900])};
    font-size: 22px;
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
