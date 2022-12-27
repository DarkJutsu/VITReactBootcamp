import { useLocation } from 'react-router-dom';

export const StatePage = () => {
	const location = useLocation();

	console.log('Location state: ', location.state.online);
	console.log('Query params: ', location.search);

	return (
		<div>
			<h1>State Pages</h1>
			<h3>State: {location.state.online ? 'onLine' : 'offLine'}</h3>
		</div>
	);
};
