import React from "react";
import "./List.css";

function List(props) {
	return (
		<div className="list" ref={props.innerRef}>
			{props.children}
		</div>
	);
}

export default List;
