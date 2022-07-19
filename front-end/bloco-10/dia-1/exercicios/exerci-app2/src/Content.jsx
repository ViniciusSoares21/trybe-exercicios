import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        {conteudos.map((elem) => (
          <section key={elem.conteudo} className="card">
            <h2> {`O conteúdo é: ${elem.conteudo}`} </h2>
            <p> {`Bloco: ${elem.bloco}`} </p>
            <p> {`Status: ${elem.status}`} </p>
            
          </section>
        ))
        }
      </div>
    );
  }
}
export default Content;