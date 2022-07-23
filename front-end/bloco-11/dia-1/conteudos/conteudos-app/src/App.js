import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      botao1NumeroDeCliques: 0,
      botao2NumeroDeCliques: 0,
      botao3NumeroDeCliques: 0
    }
  }
  handleClick = () => {
    console.log('funcionou');
    this.setState((estadoAnterior) => ({
      botao1NumeroDeCliques: estadoAnterior.botao1NumeroDeCliques +1
    }))
  }
  handleClick2 = () => {
    console.log('funcionou');
    this.setState((estadoAnterior) => ({
      botao2NumeroDeCliques: estadoAnterior.botao2NumeroDeCliques +1
    }))
  }
  handleClick3 = () => {
    console.log('funcionou');
    this.setState((estadoAnterior) => ({
      botao3NumeroDeCliques: estadoAnterior.botao3NumeroDeCliques +1
    }))
  }

  buttonColor = (numPar) => {
    return numPar % 2 === 0 ? 'green' : 'red';
  }

  render () {
    console.log(this)
  return (
    <section>
      <div>
        <button onClick={this.handleClick} 
        style={{backgroundColor: this.buttonColor(this.state.botao1NumeroDeCliques)}}>
          {`BOTÂO 1: Clicks[${this.state.botao1NumeroDeCliques}] `}
          </button>
        <button onClick={this.handleClick2} 
        style={{backgroundColor: this.buttonColor(this.state.botao2NumeroDeCliques)}}>
          {`BOTÂO 2: Clicks[${this.state.botao2NumeroDeCliques}] `}
          </button>
        <button onClick={this.handleClick3} 
        style={{backgroundColor: this.buttonColor(this.state.botao3NumeroDeCliques)}}>
          {`BOTÂO 3: Clicks[${this.state.botao3NumeroDeCliques}] `}
          </button>
      </div>
    </section>
  );
  }
}

export default App;
