// ===== Ato 0 =====
const wrapper = document.getElementById("wrapper");
const button = document.getElementById("light-switch");
const lampada = document.getElementById("light-bulb");

// ===== Ato I =====
// Criar Store e Reducer part 1
const INITIAL_STATE = {
  theme: "dark",
};

const CHANGE_THEME = "CHANGE_THEME";

function reducerTheme(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark"
      };
      default:
        return state;
  }
}

const store1 = Redux.createStore(reducerTheme);

// Subscrevendo meu estado
store1.subscribe(() => {
  const { theme } = store1.getState();
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
  store1.dispatch(actionChangeTheme());
})

// ===== Ato IV =====
// Extra e Boas Praticas
// ACTIONS TYPE
// const CHANGE_THEME = "CHANGE_THEME";