import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import ContainerComponent from "./ContainerComponent";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <ContainerComponent />
    </Provider>
  );
};

export default App;
