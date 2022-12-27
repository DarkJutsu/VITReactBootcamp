import { useLocation, useNavigate } from 'react-router-dom';

export const HomePage = () => {
	const location = useLocation();
	const history = useNavigate();

	console.log('We are in Route: ', location.pathname);

	const navigate = path => {
		history(path);
	};

	const navigateProps = path => {
		history(
			{
				pathname: path,
				search: '?online=true',
			},
			{
				state: {
					online: false,
					name: 'Joche',
				},
			}
		);
	};

	return (
		<div>
			<h1>Home Page</h1>
			<h2>Dashboard </h2>
			<button
				className='btn btn-secondary mx-1 mt-3'
				onClick={() => navigateProps('/state-page')}
			>
				Navigate Props
			</button>
			<button
				className='btn btn-secondary mx-1 mt-3'
				onClick={() => navigate('/profile')}
			>
				Profile
			</button>
		</div>
	);
};
