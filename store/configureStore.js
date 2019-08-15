import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';


const configureStore = (preloadedState) => {
	const middleWare = [];
	const middlewareEnhancers = applyMiddleware(...middleWare);
	const storeEnhancers = [ middlewareEnhancers ];
	const composeEnhancers = composeWithDevTools(...storeEnhancers);
	const store = createStore(rootReducer, preloadedState, composeEnhancers);

	if (process.env.NODE_ENV !== 'production' && module.hot) {
		module.hot.accept('../reducers/rootReducer', () => store.replaceReducer(rootReducer));
	}
	return store;
};

export default configureStore;

