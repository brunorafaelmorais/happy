import React from 'react';

import { Container } from './styles';

type Props = {
  gutterY?: number;
};

const DividerLine: React.FC<Props> = ({ gutterY = 40 }) => {
  return <Container gutterY={gutterY} />;
};

export default DividerLine;
