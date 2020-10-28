import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import List from "../List/List";
import Task from "../Task/Task";
import "./Columns.css";

function Column(props) {
	return (
		<div className="column">
			<h2>{props.title}</h2>
			<Droppable droppableId={props.id}>
				{(provided) => (
					<List
						innerRef={provided.innerRef}
						{...provided.droppableProps}
					>
						{props.tasks.map((task, index) => (
							<Task
								id={task.id}
								key={task.id}
								index={index}
								content={task.content}
							/>
						))}
						{provided.placeholder}
					</List>
				)}
			</Droppable>
		</div>
	);
}

export default Column;
