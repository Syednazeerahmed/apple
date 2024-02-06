import styles from "./App.module.css"

function Class2 (){
    const age = 18;
    const isGreen = true;
    const names = ["syed", "nazeer", "ahmed", "mifzal"]; //list
    const users = [  //list of objects
        {name:"syed", age:22},
        {name:"nazeer", age:21},
        {name:"ahmed", age:23}    
    ];
    return (
      <div className={styles.App}>
        <h1 className={styles.name}>nazeer</h1>
        {age >= 18 ? <h1>over age</h1> : <h1>under age</h1>}

        <h1 style={{color: isGreen ? "green" : "red"}}>This has color</h1> 
        {/* ternary operator if-else statement above */}

        {isGreen && <button>This is button</button>}
        {/* ternary operator if statement above */}

        {names.map((name, key) => {   // key returns index no
            return <h1>{name}</h1>
        })}

        {users.map((user, key) =>{
            return <div>
                <h1>{user.name}</h1>                
                <h1>{user.age}</h1>
            </div>
        })}

      </div>
    
    );
}

export default Class2;