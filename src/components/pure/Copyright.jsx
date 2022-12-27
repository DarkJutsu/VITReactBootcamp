import { Link, Typography } from '@mui/material';

export const Copyright = () => {
	return (
		<div>
			<Typography variant='body2' color='GrayText' align='center'>
				{'Copyright (C) '}
				<Link color='inherit' href='https://imaginaformacion.com'>
					{new Date().getFullYear()} - Samllo95
				</Link>
			</Typography>
		</div>
	);
};
