import { ADD_TODO } from './types';

export const addTodo = ( todo ) => {
	console.log( 'Hello' );
	// const Newtodo = JSON.stringify( todo );
	return {
		type: ADD_TODO,
		todo,
	};
};
