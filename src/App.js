import './App.css';

function App() {
  
  const name = "nazeer";
  const age = <h1>22</h1>;
  const user = (
    <div>
      <h1>{name}</h1>
      {age}
    </div>
  );

  return (
    <div className="App">
      {/* <h1>{name}</h1> 
     {age} 
     {user}

     <Comp />  component-implementation 

     <User />  component-implementation  

     <UserProps name="naz" age={21} email="naz@naz.com"/> props-implementation

     <Job salary={100000} position="full stack engineer" company="xyz"/> props-assignment
      */}
    </div>
  );
}

const Comp = () => {
    return <h1>nazeer </h1>;
};

const User = () => {
    return (
      <div>
        <h1>nazeer</h1>
        <h1>22</h1>
        <h1>naz@naz.com</h1>
      </div>
    );
};
const UserProps = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        <h1>{props.email}</h1>
      </div>
    );
};

const Job = (props) => {
    return (
      <div>
        <h1>Salary = {props.salary}</h1>
        <h1>Position = {props.position}</h1>
        <h1>Company = {props.company}</h1>
      </div>
    );
};

export default App;
