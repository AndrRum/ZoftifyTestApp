import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { RootNavigationContainer } from "./src/navigation/RootNavigationContainer";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RootNavigationContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
