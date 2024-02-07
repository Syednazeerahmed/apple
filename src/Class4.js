import { useState } from "react";
import styles from "./App.module.css";
import Task  from "./Task";
function Class4 (){
    const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState("");

    const updateTodoList = () => {
        const newTask = {
            id : todoList.length === 0 ? 1 : todoList[todoList.length - 1].id+1,
            taskName : task,
            completed : false
        }
        const newTodoList = [...todoList, newTask];
        // console.log(newTodoList);
        setTodoList(newTodoList);
    }

    const addTask = (event) => {
        setTask(event.target.value);
    }
    const deleteTask = (taskId) =>{
        const newTodoList = todoList.filter((task)=>{
            if  (task.id === taskId)
                return false;
            else    
                return true;
        })
        setTodoList(newTodoList);
    }

    const updateTask = (taskId) =>{
        setTodoList(
          todoList.map((task) => {
            if (task.id === taskId) return { ...task, completed: true };
            else return task;
          })
        );
    };
    return (
      <div>
        <div className={styles.middle}>
          <input type="text" onChange={addTask} />
          <button onClick={updateTodoList}>Add task</button>
        </div>

        <div className={styles.middle}>
          {todoList.map((task) => {
            return (
              <Task task={task} updateTask={updateTask} deleteTask={deleteTask}/>
            );
          })}
        </div>
      </div>
    );

}

export default Class4;