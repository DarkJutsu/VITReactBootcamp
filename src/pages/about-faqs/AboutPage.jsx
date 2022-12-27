import { useLocation, useNavigate } from 'react-router-dom';

export const AboutPage = () => {
	const location = useLocation();
	const history = useNavigate();

	console.log('We are in Route: ', location.pathname);

	const navigate = path => {
		history(path);
	};

	const goBack = () => {
		history(-1);
	};

	const goForward = () => {
		history(1);
	};

	return (
		<div>
			<h3>About | FAQs Page</h3>
			<button className='btn btn-secondary mx-1 mt-3' onClick={goBack}>Go Back</button>
			<button className='btn btn-secondary mx-1 mt-3' onClick={() => navigate('/')}>home</button>
			<button className='btn btn-secondary mx-1 mt-3' onClick={goForward}>Go Forward</button>
		</div>
	);
};
