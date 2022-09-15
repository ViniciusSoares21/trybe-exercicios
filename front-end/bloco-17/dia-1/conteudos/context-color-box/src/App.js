import './App.css';
import React from 'react';
import ColorBox from './components/ColorBox';
import MyContext from './components/MyContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['blue', 'red', 'yellow'],
      colorIndex: 0,
    };
  }

  nextColor = () => {
    const { colorIndex, colors } = this.state;
    if (colorIndex < (colors.length - 1)) {
      this.setState((prevState) => ({ colorIndex: prevState.colorIndex + 1 }));
    } else {
      this.setState({ colorIndex: 0 });
    }
  }

  render() {
    const context = {
      ...this.state,
      nextColor: this.nextColor,
    }
    return (
      <MyContext.Provider value={context}>
        <ColorBox />
      </MyContext.Provider>
    );
  }
}

export default App;
