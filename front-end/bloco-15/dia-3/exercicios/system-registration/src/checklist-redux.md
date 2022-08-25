# Checklist do react-redux

_Antes de começar_

- [ ] pensar como será o _formato_ do seu estado global
- [ ] pensar quais actions serão necessárias na sua aplicação

_Instalação_

- [x] npx create-react-app my-app-redux;
- [x] npm install --save redux react-redux redux-devtools-extension;

_Criar dentro do diretório src:_

- [x] diretório `redux`

_Criar dentro do diretório redux:_

- [x] diretório `store`

**Criar dentro do diretório `redux`**

- [x] arquivo `store.js`
- [x] diretório `actions`
- [x] diretório `reducers`

_Criar dentro do diretório `actions`:_

- [x] arquivo `index.js`.

_Criar dentro do diretório `reducers`:_

- [x] arquivo `index.js`.

_Criar dentro do arquivo `reducers/index.js`:_

- [x] estado inicial
- [x] criar função reducer com `switch` retornando apenas a opção `default`
- [X] criar `rootReducer` usando o `combineReducers`
- [X] exportar `rootReducer`

exemplo:

```js
const INITIAL_STATE = {
  example: "",
};
const exampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const rootReducer = combineReducers({ exampleReducer });
```

_No arquivo redux/store.js:_

- [x] importar `rootReducer` e usá-lo na criação da `store`
- [x] configurar o [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm)
- [x] exportar a `store`

exemplo:

```js
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
const store = createStore(rootReducer, composeWithDevTools());
export default store;
```

_No arquivo src/index.js:_

- [x] importar a `store`
- [x] definir o Provider, `<Provider store={ store }>`, para fornecer os estados a todos os componentes encapsulados em `<App />`.

_Na pasta actions:_

- [x] criar e exportar os actionTypes, por exemplo: `const ADD_TO_CART = 'ADD_TO_CART';`
- [x] criar e export os actions creators necessários

_Nos reducers:_

- [x] criar os casos para cada action criada, retornando o devido estado atualizado

_Nos componentes que irão ler o estado:_

- [x] criar a função `mapStateToProps`
- [x] exportar usando o `connect`

exemplo:

```js
const mapStateToProps = (state) => ({
  example: state.exampleReducer.example,
});
```

_Nos componentes que irão modificar o estado:_

- [x] criar a função `mapDispatchToProps`
- [x] exportar usando o `connect`

exemplo:

```js
const mapDispatchToProps = (dispatch) => ({
  functioPropExample: () => dispatch(actionCreator()),
});
```

```js
export default connect(mapStateToProps, mapDispatchToProps)(Component);
```