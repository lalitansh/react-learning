import React from 'react';
import Routes from './navigation/route';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store/configureStore';

const App=()=> {	
	const { persistor, store} = configureStore()
		return (
				<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
				<Routes />
				</PersistGate>
				</Provider>
		);
}

export default App;
