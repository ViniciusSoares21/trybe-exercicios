import React from 'react';
import { connect } from 'react-redux';

class ClientesCadastrados extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
      const { history } = this.props;
      history.push('/cadastro');
  }
  render() {
    const { list } = this.props;
    return (
      <section>
        <h1>Clientes Cadastrados</h1>
        <div>
          {list.map((element, index) => (
            <div key={ index } className="card-list">
              <p>{ `Nome: ${ element.nome}`}</p>

              <p>{ `Idade: ${ element.idade}`}</p> 

              <p>{ `Email: ${ element.email}`}</p>
                        
            </div>
          
          )
     
          
         )}
        </div>
        <button 
      type="button"
      onClick={ this.handleClick}
      >
      Cadastrar
      </button>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.cardReducer});

export default connect(mapStateToProps)(ClientesCadastrados);
