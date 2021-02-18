/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';

import Navigator from 'app/navigation';
import configureStore from 'app/store';
const { persistor, store } = configureStore();

export default function Entrypoint() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <PaperProvider>
          <Navigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
