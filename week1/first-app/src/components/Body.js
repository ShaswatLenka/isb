import React from "react";
import TodoItem from "./todoitem.js";
import tasks from "./tasksdata.js";

class Body extends React.Component{
    constructor(){
        super();
        this.state = {
            taskslist: tasks
        };
        this.handleClick = this.handleClick.bind(this);
    };

    //handles the action after we click the checkboxes
    handleClick(id){
        this.setState((prevState)=>{
            const updatedTasksList = prevState.taskslist.map((task)=>{
                let temp = Object.assign({}, task)
                if (temp.id === id){
                   temp.completed = !temp.completed
                }
                return temp;
            })
            return {
                taskslist:updatedTasksList
            }
        })
    }

    render(){
        const todoitems = this.state.taskslist.map(
            (item) => {return <TodoItem key={item.id} item={item}  handleClick={this.handleClick}/>}
        );
        return(
            <div className="todo-list">
                <p>Today:</p>
                {todoitems}
            </div>
            )
    }
}

export default Body;
