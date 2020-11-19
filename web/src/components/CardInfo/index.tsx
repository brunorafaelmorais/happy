import React, { ElementType } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

type Props = {
  text: string;
  type: 'success' | 'info' | 'danger';
  icon: ElementType<IconBaseProps>;
};

const CardInfo: React.FC<Props> = ({ text, type, icon: Icon }) => {
  return (
    <Container variant={type}>
      <Icon size={32} />
      <span>{text}</span>
    </Container>
  );
};

export default CardInfo;
