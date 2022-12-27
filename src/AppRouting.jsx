import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/404/NotFoundPage';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { TasksPage } from './pages/tasks/TasksPage';

export const AppRouting = () => {
	const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn'));

	return (
		<div className='container mx-auto'>
			<Routes>
				<Route
					path='/'
					element={
						loggedIn ? <Navigate to={'/task'} /> : <Navigate to={'/login'} />
					}
				/>
				<Route
					path='/login'
					element={loggedIn ? <Navigate to={'/task'} /> : <LoginPage />}
				/>
				<Route path='/sign-in' element={<RegisterPage />} />
				<Route
					path='/task'
					element={loggedIn ? <TasksPage /> : <Navigate to={'/login'} />}
				/>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</div>
	);
};
