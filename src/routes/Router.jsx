import {
	createBrowserRouter,
	Navigate,
	redirect,
	Route,
} from 'react-router-dom';
import { DashBoard } from '../pages/dashboard/DashBoard';
import { NotFoundPage } from '../pages/404/NotFoundPage';
import { LoginPage } from '../pages/auth/LoginPage';
import { HomePage } from '../pages/home/HomePage';

let loggedIn = true;

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <NotFoundPage />,
		children: [
			{
				path: '/dashboard',
				element: <DashBoard />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
		],
	},
]);
