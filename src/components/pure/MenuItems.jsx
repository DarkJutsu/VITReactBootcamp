import { Home, Settings } from '@mui/icons-material';
import { List, ListItem, ListItemText } from '@mui/material';
import { Navigate } from 'react-router-dom';

export const MenuItems = ({ list }) => {
	const getIcon = icon => {
		switch (icon) {
			case 'HOME':
				return <Home />;
			case 'SETTINGS':
				return <Settings />;
			case 'HOME':
				return <Home />;
			default:
				return <Home />;
		}
	};

	return (
		<List>
			{list.map(({ text, path, icon }, index) => (
				<ListItem key={index} onClick={() => <Navigate to={path} />}>
					<ListItemIcon>
						{getIcon(icon)}
						<ListItemText primary={text} />
					</ListItemIcon>
				</ListItem>
			))}
		</List>
	);
};
