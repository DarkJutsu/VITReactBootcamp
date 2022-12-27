import { useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
	const history = useNavigate();
	const navegateTo = path => {
		history(path);
	};
	const goBack = () => {
		history(-1);
	};

	return (
		<div>
			<h1>Your Profile</h1>
			<button
				className='btn btn-secondary mx-1 mt-3'
				onClick={() => navegateTo('/tasks')}
			>
				Tasks
			</button>
			<button className='btn btn-secondary mx-1 mt-3' onClick={goBack}>
				Go Back
			</button>
		</div>
	);
};
