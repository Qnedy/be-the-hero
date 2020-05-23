import React from 'react';
import { FiLogIn } from 'react-icons/fi'

import './styles.css';

import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';

const LogonScreen = () => {
  return(
    <>
      <div className="logon-container">
        <section className="form">
          <img src={logoImage} alt="Be The Hero" />

          <form action="">
            <h1>Faça seu logon</h1>

            <input placeholder="Sua ID" />
            <button type="submit" className="button">Entrar</button>

            <a href="/register">
              <FiLogIn size={16} color="#e02041"/>
              Não tenho cadastro
            </a>
          </form>
        </section>

        <img src={heroesImage} alt="heroes" />
      </div>
    </>
  );
}

export default LogonScreen;