import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './imageSelector/reducer';
import AppContainer from './imageSelector/appContainer';

const store = createStore(reducer);

export default class App extends React.Component{
	render(){
		console.log("【App render】 store", store);
		return (
			<Provider store={store}>
				<AppContainer />
			</Provider>
		)
	}
}