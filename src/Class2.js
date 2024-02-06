import styles from "./App.module.css";

function Class2 (){
    const age = 18;
    const isGreen = true;
    const names = ["syed", "nazeer", "ahmed", "mifzal"]; //list
    const users = [  //list of objects
        {name:"syed", age:22},
        {name:"nazeer", age:21},
        {name:"ahmed", age:23}    
    ];
    const planets = [
        {name: "Mars", isGasPlanet: false},
        {name: "Earth", isGasPlanet: false},
        {name: "Jupiter", isGasPlanet: true},
        {name: "Venus", isGasPlanet: false},
        {name: "Neptune", isGasPlanet: true},
        {name: "Uranus", isGasPlanet: true},
    ];
    return (
      <div className={styles.App}>
        {/* 
        <h1 className={styles.name}>nazeer</h1>
        {age >= 18 ? <h1>over age</h1> : <h1>under age</h1>}

        <h1 style={{color: isGreen ? "green" : "red"}}>This has color</h1> 
        ternary operator if-else statement above

        {isGreen && <button>This is button</button>}
        ternary operator if statement above

        {names.map((name, key) => {   // key returns index number
            return <h1>{name}</h1>
        })} 
        

        {users.map((user, key) =>{    // implementing map-function using props-component
            return (
                <User name={user.name} age={user.age} />
            );
        })}
        */}
           {/* map-function exercise  */}
        {planets.map((planets, key) => {
           // if(planets.isGasPlanet)   return<h1>{planets.name}</h1>;
           return planets.isGasPlanet && <h1>{planets.name}</h1>;
        })}
      </div>
    
    );
}

const User = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>                
            <h1>{props.age}</h1>
        </div>
    );
};


export default Class2;