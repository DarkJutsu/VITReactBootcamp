import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Copyright } from '../../components/pure/Copyright';

export const DashBoard = () => {
	const navigate = useNavigate();
	const logout = () => {
		navigate('/login');
	};

	return (
		<div>
			<h1>DashBoard - Tasks</h1>
			<Button variant='contained' onClick={logout}>
				LogOut
			</Button>
			<Copyright />
		</div>
	);
};
