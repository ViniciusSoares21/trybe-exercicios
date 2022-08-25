import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  validate = () => {
    const { email, password } = this.state

    const senhaCadastrada = '996539190'

    const emialCadastrado = 'Viniciussoares72943@gmail.com'
    if (email === emialCadastrado && password === senhaCadastrada){
      return false
    };
  return true;
  
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.setState({ isDisabled: this.validate() });
    });
  };


  handleClickLogin = (event) => {
    event.preventDefault();
      const { history } = this.props;
      history.push('/clientesCadastrados');

  }

  render() {
    const { email, password, isDisabled } = this.state
    return (
      <div>
        <form className="form-login">
          <label htmlFor="email">
            <input
              placeholder="login Email:"
              className="login-name"
              id="email"
              name="email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              placeholder="Passwordl:"
              className="login-password"
              id="password"
              name="password"
              value={ password }
              type="password"
              onChange={ this.handleChange }
            />
          </label>
          <button
            className="button"
            type="button"
            disabled={ isDisabled }
            onClick={ this.handleClickLogin }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;