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
          <Link to="/">
            <img src={Logo} alt="Happy Logo" />
          </Link>

          <div className="content">
            <h1 className="big-title">Leve felicidade para o mundo</h1>
            <p className="sub-title">
              Visite orfanatos e mude o dia de muitas crianças.
            </p>
          </div>
        </div>
        <div className="right-content">
          <div className="location-box">
            <span className="city">Rio do Sul</span>
            <span className="state"> Santa Catarina</span>
          </div>
          <Link to="/locations" className="arrow-button">
            <FiArrowRight size={32} />
          </Link>
        </div>
      </main>
    </Container>
  );
};

export default Landing;
