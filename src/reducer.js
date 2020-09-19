export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	token:
		'BQD96QdZhjJO-Fx3REi7S__tukSFQ1CeI9GTNYc2WeQ3bCR3P2xjEgZuo3CbE_wyQUBygzgZbH4cWZ9CuTu6Nd6RwqOWLgD741-dFwMjT6wtMw6zv6zNJUAHNGKlIGnyAcu4EsXnGCXubkdhKhl2QvgB0E92WiqKC_Ud1bD2AjUP-vA682IN', // remove token after developing and set to null
};

// Action
export const SET_USER = 'SET_USER';
export const SET_TOKEN = 'SET_TOKEN';

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.user,
			};

		case SET_TOKEN:
			return {
				...state,
				token: action.token,
			};

		default:
			return state;
	}
};

export default reducer;
