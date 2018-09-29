import React, { Component } from "react";

class TodoList extends Component {
	constructor(props) {
		super(props);
		// the natural state is an array to hold all the tasks
		this.state = {
			items: [];
		};

		this.addItem = this.addItem.bind(this);
	}


	addTask(e) {
		if(this._inputElement !== ""){
			const newTask = {
				// a specific unique value to identify differents tasks
				key: Date.now(),
				task: this._inputElement.value
			}
		}

	}

	render() {
		return (
			<div className="main">
				<div className="header">
					<form onSumbit={this.addTask}>
						<input ref={(a) => this._inputElement = a}
								placeholder="enter task">
						
						</input>
						<button type="submit">add</button>
					</form>
				</div>
			</div>
		);
	}
}



export default TodoList;
{/* a comment */}