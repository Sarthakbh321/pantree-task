import "./App.css";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./components/Column/Column";
import { useState } from "react";

function App() {
	const dragEnd = (result) => {
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		const start = source.droppableId;
		const end = destination.droppableId;

		if (start === end) {
			let prev = source.index;
			let curr = destination.index;

			let item;
			if (start === "1") {
				item = task1[prev];

				let newTask = task1;
				newTask.splice(prev, 1);
				let nn = newTask.splice(curr, 0, item);

				setTask1(newTask);
			} else {
				item = task2[prev];

				let newTask = task2;
				newTask.splice(prev, 1);
				let nn = newTask.splice(curr, 0, item);

				setTask2(newTask);
			}
		} else {
			let item;
			if (start == 1) {
				let prev = source.index;
				let curr = destination.index;
				item = task1[prev];

				let newItem = { ...item };
				newItem.id = String(Math.random() * 100);

				let newTask = task2;
				newTask.splice(curr, 0, newItem);

				setTask2(newTask);
			} else {
				let prev = source.index;
				let curr = destination.index;
				item = task2[prev];

				let newItem = { ...item };
				newItem.id = String(Math.random() * 100);

				let newTask = task1;
				newTask.splice(curr, 0, newItem);

				setTask1(newTask);
				console.log(newTask, task2, item);
			}
		}

		return;
	};
	const [task1, setTask1] = useState([
		{ id: "11", content: "Do Something c1" },
		{ id: "22", content: "Do another thing c1" },
	]);
	const [task2, setTask2] = useState([
		{ id: "3", content: "Do Something c2" },
		{ id: "4", content: "Do another thing c2" },
	]);

	return (
		<div className="App">
			<DragDropContext onDragEnd={dragEnd}>
				<Column title="Column 1" id="1" tasks={task1} />
				<Column title="Column 2" id="2" tasks={task2} />
			</DragDropContext>
		</div>
	);
}

export default App;
