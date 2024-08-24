import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./src/navigator/MainNavigator";
import { Provider } from "react-redux";
import {createStore, combineReducers} from 'redux';
import { userLoginReducer } from "./store/realm/reeducers/userLoginReducer";
import { chartReducers } from "./store/realm/reeducers/chartReducers";

const rootReducer = combineReducers({
  userLoginReducer: userLoginReducer,
  chartReducers: chartReducers
})

const store = createStore(rootReducer);

const App = () => {
  return (
  <Provider store={store}>
    <SafeAreaProvider>
      <MainNavigator/>
    </SafeAreaProvider>
    </Provider>
  )
};

export default App;
