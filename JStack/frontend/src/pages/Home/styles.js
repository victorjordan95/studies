import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  position: relative;
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input {
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border: none;
    width: 100%;
    border-radius: 25px;
    height: 50px;
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 32px;

  strong {
    font-size: 24px;
  }

  a {
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    padding: 8px 16px;
    text-decoration: none;
    transition: all 0.2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;
  }

  .sort-button {
    align-items: center;
    background-color: transparent;
    border: none;
    display: flex;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
      margin-right: 8px;
    }
  }
`;

export const Card = styled.div`
  align-items: center;
  background: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  padding: 16px;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        border-radius: 4px;
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        margin-left: 8px;
        padding: 4px;
        text-transform: uppercase;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;
