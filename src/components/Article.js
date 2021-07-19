import React from 'react';

import black from '../assets/img/black.png';
import pc from '../assets/img/pc.png';
import '../assets/css/Article.css';
export default function Article() {
  return (
    <section>
      <img className="img-article black" src={black} alt="Logo Black Friday" />
      <div className="article">
        <img className="img-article" src={pc} alt="Computador gamer" />
        <div>
          <h1>
            Com pandemia, mercado de games cresce 140% no Brasil, aponta estudo
          </h1>
          <p>
            Em meio à pandemia e ao isolamento social trazido por ela, muita
            gente precisou encontrar formas alternativas de entretenimento e
            diversão dentro de casa. Uma das principais saídas usadas pelos
            brasileiros foram os jogos eletrônicos. Prova disso é que as
            transações financeiras feitas nas principais plataformas e consoles
            de jogo cresceram 140% em 2020 ante 2019, segundo um estudo feito
            pela bandeira de cartões Visa.
          </p>
        </div>
      </div>
    </section>
  );
}
