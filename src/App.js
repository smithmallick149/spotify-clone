import React, { useState, useEffect } from 'react';
// import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotifywebApi from 'spotify-web-api-js';
import Login from './Login';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import { SET_USER, SET_TOKEN } from './reducer';

const spotify = new SpotifywebApi();

function App() {
	// const [token, setToken] = useState(null);
	const [{ user, token }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';

		const _token = hash.access_token;
		if (_token) {
			dispatch({
				type: SET_TOKEN,
				token: _token,
			});
			// setToken(_token);

			spotify.setAccessToken(_token);
			spotify.getMe().then((user) => {
				dispatch({
					type: SET_USER,
					user: user,
				});
			});
		}
	}, []);
	console.log('user', user);
	console.log('token', token);

	return (
		// BEM
		<div className="app">{token ? <Player /> : <Login />}</div>
	);
}

export default App;
