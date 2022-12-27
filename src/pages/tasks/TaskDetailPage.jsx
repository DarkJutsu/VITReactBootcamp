import { useParams } from 'react-router-dom';

export const TaskDetailPage = ({ task }) => {
	const { id } = useParams();
	const myTask = task[id - 1];
	return (
		<div>
			<h1>Task Deatail - {id}</h1>
			<h2>{myTask.name}</h2>
			<h2>{myTask.description}</h2>
		</div>
	);
};
