import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content } from './styles';

import MapMarkerImg from '../../assets/map-marker.svg';

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title }) => {
  const { goBack } = useHistory();

  return (
    <Container>
      <aside>
        <header>
          <Link to="/">
            <img src={MapMarkerImg} alt="Happy Logo" />
          </Link>
        </header>
        <footer>
          <button onClick={() => goBack()} type="button">
            <FiArrowLeft size={24} />
          </button>
        </footer>
      </aside>
      <section>
        {title && <span>{title}</span>}
        <Content>{children}</Content>
      </section>
    </Container>
  );
};

export default Layout;
