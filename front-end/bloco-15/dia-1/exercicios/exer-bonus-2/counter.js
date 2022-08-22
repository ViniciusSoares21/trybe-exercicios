const showCountValue = (counter) => {
  const h1Element = document.getElementById("counter");
  h1Element.innerText = counter;
};

showCountValue(0);
// ========== ACTIONTYPES ==========
const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";

// ========== ACTIONS ==========
const actionIncremento = () => {

    store.dispatch({type: INCREMENTO})
  
};

const actionDecremento = () => {
  store.dispatch({type: DECREMENTO})
};
// ========== REDUCER ==========
const initialState = 0;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTO:
      return state += 1

      case DECREMENTO:
      return state -= 1
      default:
        return state;
  }
};

// ========== STORE ==========
const store = Redux.createStore(reducer);

store.subscribe(() => {
  const counter = store.getState();
  showCountValue(counter);
});

const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");

btnInc.addEventListener("click", actionIncremento);
btnDec.addEventListener("click", actionDecremento);
