import React from 'react';
import '../styles/box.css';
import MyContext from './MyContext';

class ColorBox extends React.Component {
  render() {
    const {colors, colorIndex, nextColor } = this.context;
    return(
      // <MyContext.Consumer>
      /* {(value) => ( */
          <button
            type="button"
            className="box"
            style={ { backgroundColor: colors[colorIndex] } }
           /*  style={ { backgroundColor: value.colors[value.colorIndex] } }
            onClick={ () => value.nextColor()} */
            onClick={ () => nextColor()}
            >
              Click me to change my color!
          </button>
        /* )} */
      //</MyContext.Consumer>
    )
  }
}

ColorBox.contextType = MyContext;

export default ColorBox;