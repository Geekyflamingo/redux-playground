var redux = require('redux');

console.log('Starting redux todo example');
var stateDefault = {
	showCompleted: false,
	searchText: '',
	todos: []
}
var reducer = (state = stateDefault, action) => {
	return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('current state', currentState);
