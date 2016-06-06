var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
	switch (action.type) {
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.name
			};
		default:
			return state;
	}
};
var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
var unsbscribe = store.subscribe(() => {
	var state = store.getState();

	console.log('name is', state.name);
	document.getElementById('app').innerHTML = state.name;
});
// unsbscribe();

var currentState = store.getState();
console.log('current state', currentState);

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Becca'
});


store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Andrew'
});
