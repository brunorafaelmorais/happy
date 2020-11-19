import styled from 'styled-components';

export const ButtonBase = styled.button`
  width: 100%;
  height: 64px;
  border: 0;
  outline: none;
  background: #3cdc8c;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  transition: all 0.2s;

  > svg {
    margin-right: 16px;
  }

  &:hover {
    background-color: #2bd47f;
  }
`;
