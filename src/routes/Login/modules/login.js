import HttpRequest from '../../../utils/HttpRequest'

const Config = require('Config')

// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN = 'LOGIN'
//export const LOGGED_IN = 'LOGGED_IN'
// ------------------------------------
// Actions
// ------------------------------------


/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk! */


export const actions = {}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
	/*[LOGGED_IN]: (state, action) => ({
		...state,
		isLogin: true,
		user: action.payload
	})*/
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function factsReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type]
	return handler ? handler(state, action) : state
}
