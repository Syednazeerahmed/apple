import styles from "./App.module.css";

function Task(props){
    return (
      <div style={{ backgroundColor: props.task.completed && "green" ,Margin:0}}>
        <h1>{props.task.taskName}</h1>
        <button onClick={() => props.updateTask(props.task.id)}>complete</button>
        <button onClick={() => props.deleteTask(props.task.id)}>x</button>
      </div>
    );
}

export default Task;

{/* <div style={{ backgroundColor: task.completed && "green" }}>
  <h1>{task.taskName}</h1>
  <button onClick={() => updateTask(task.id)}>complete</button>
  <button onClick={() => deleteTask(task.id)}>x</button>
</div>; */}