// ===== Ato 0 =====
const wrapper = document.getElementById("wrapper");
const button = document.getElementById("light-switch");
const lampada = document.getElementById("light-bulb");

// ===== Ato I =====
// Criar Store e Reducer part 1
const INITIAL_STATE = {
  theme: "light",
};

const CHANGE_THEME = "CHANGE_THEME";

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      };
      default:
        return state;
  }
}

const store = Redux.createStore(reducer);

// Subscrevendo meu estado
store.subscribe(() => {
  const { theme } = store.getState();
  console.log(store.getState());
  wrapper.classList = theme
})

// ===== Ato II =====
// Criando uma Action
const actionChangeTheme = () => {
  return {
    type: CHANGE_THEME,
  }
}

// ===== Ato III =====
// Chamar o Dispatch e Reducer part 2
button.addEventListener("click", () => {
  store.dispatch(actionChangeTheme());
})

// ===== Ato IV =====
// Extra e Boas Praticas
// ACTIONS TYPE
// const CHANGE_THEME = "CHANGE_THEME";