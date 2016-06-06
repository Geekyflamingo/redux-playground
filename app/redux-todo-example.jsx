var redux = require('redux');

console.log('Starting redux todo example');
var stateDefault = {
	showCompleted: false,
	searchText: 'foo',
	todos: []
}
var reducer = (state = stateDefault, action) => {
	switch (action.type) {
		case 'CHANGE_SEARCH_TEXT':
			return {
				...state,
				searchText: action.searchText,
				showCompleted: action.showCompleted
			};
		default:
			return state;
	}
};
var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
 store.subscribe(() => {
	var state = store.getState();

	document.getElementById('app').innerHTML = state.searchText;
	// document.getElementById('app').innerHTML = state.showCompleted;
});

var currentState = store.getState();
console.log('current state', currentState);

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'Dog',
	showCompleted: true
});

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'bar',
	showCompleted: true
});

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'baz',
	showCompleted: false
});
