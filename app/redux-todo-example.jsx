var redux = require('redux');

console.log('Starting redux todo example');
var stateDefault = {
	showCompleted: false,
	searchText: '',
	todos: []
}
var reducer = (state = stateDefault, action) => {
	switch (action.type) {
		case 'CHANGE_SEARCH_TEXT':
			return {
				...state,
				searchText: action.searchText
			};
		default:
			return state;
	}
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('current state', currentState);

store.dispatch({
	type: 'CHANGE_SEARCH_TEXT',
	searchText: 'Dog'
});

console.log('search text is now', store.getState());
