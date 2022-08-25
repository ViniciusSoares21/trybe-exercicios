import React from 'react';
import { connect } from 'react-redux';
import addCardAction from '../redux/store/actions/index';

class Cadastro extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      idade: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmitSave = (event) => {
    event.preventDefault();

    const { dispatch } = this.props;

    dispatch(addCardAction(this.state));
  }

  handleClick = (event) => {
    event.preventDefault();
      const { history } = this.props;
      history.push('/clientesCadastrados');
  }

  render() {
    const { name, email, idade } = this.state
    return (
    <section>
      <form onSubmit={ this.handleSubmitSave }>
        <h1>Formulário de Cadastro</h1>
        <label htmlFor="nome">
            <input
              placeholder="Nome:"
              name="nome"
              type="text"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email">
            <input
              placeholder="Email:"
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="idade">
            <input
              placeholder="Idade:"
              name="idade"
              type="text"
              value={ idade }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
          >
            Enviar
          </button>
      </form>
      <button 
      type="button"
      onClick={ this.handleClick}
      >
      Clientes cadastrados
      </button>
    </section>
    );
  }
}

export default connect()(Cadastro);