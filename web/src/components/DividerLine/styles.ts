import styled from 'styled-components';

type ContainerProps = {
  gutterY: number;
};

export const Container = styled.div<ContainerProps>`
  border-top: 1px solid #d3e2e6;
  margin: ${props => `${props.gutterY}px`} 0;
`;
