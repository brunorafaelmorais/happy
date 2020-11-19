import styled, { css } from 'styled-components';

interface Props {
  variant?: 'success' | 'info' | 'danger';
}

const theme = {
  success: css`
    color: #37c77f;
    border: 1px solid #a1e9c5;
    background: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);
  `,
  info: css`
    border: 1px solid #b3dae2;
    background: linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%);
  `,
  danger: css`
    color: #ec655d;
    border: 1px solid #ffe1df;
    background: linear-gradient(154.16deg, #fdeae8 7.85%, #ffffff 91.03%);
  `,
};

export const Container = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 20px;

  ${props => theme[props.variant || 'info']};

  > svg {
    margin-bottom: 16px;
  }

  > span {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }
`;
