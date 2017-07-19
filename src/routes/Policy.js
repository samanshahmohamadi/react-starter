/**
 * Created by saman on 7/18/17.
 */

export const requireAuth = (store) => (nextState, replace) => {
	const state = store.getState();
	if (nextState.location.pathname === '/login') {
		return;
	}
	if (!state.auth || !state.auth.isAuthenticated) {
		replace('/login');
	}
};

export const requireNotAuth = (store) => (nextState, replace) => {
	const state = store.getState();
	if (state.auth || state.auth.isAuthenticated) {
		replace('/');
	}
};