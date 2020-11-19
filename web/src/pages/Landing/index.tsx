import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <main>
        <div className="left-content">
          <header>
            <Link to="/">
              <img src={Logo} alt="Happy Logo" />
            </Link>
          </header>

          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>
        </div>
        <div className="right-content">
          <header>
            <strong>Rio do Sul</strong>
            <span> Santa Catarina</span>
          </header>
          <Link to="/locations" className="arrow-button">
            <FiArrowRight size={32} />
          </Link>
        </div>
      </main>
    </Container>
  );
};

export default Landing;
