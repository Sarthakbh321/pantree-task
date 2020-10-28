import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./Task.css";

function Task(props) {
	return (
		<Draggable draggableId={props.id} index={props.index}>
			{(provided) => (
				<div
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					className="task"
				>
					{props.content}
				</div>
			)}
		</Draggable>
	);
}

export default Task;
