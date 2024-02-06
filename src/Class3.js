import { useState } from "react";
import styles from "./App.module.css";

function Class3(){

    //use state example 1

    // const [age,setAge] = useState(22);
    // const increaseAge = () => {
    //     setAge(age + 1)
    // }
    // return (
    //   <div>
    //     <h1>{age}</h1>
    //     <button onClick={increaseAge}>
    //       increase age
    //     </button>
    //   </div>
    // );


    // useState example-2

    // const [text,setText] = useState("");
    // const changeText = (event) => {
    //     setText(event.target.value);
    // }
    // return(
    //     <div>
    //         <input type="text" onChange={changeText}/>
    //         <h1>{text}</h1>
    //     </div>
    // );


    //useState example-3

    // const [text, setText] = useState(false);
    // const showText = () => {
    //     setText(!text);
    // }
    // return(
    //     <div>
    //         <button onClick={showText}>show/hide</button>
    //         {text && <h1>Hello world</h1>}
    //     </div>
    // );

    // useState example-4

    // const [colour,setColour] = useState("black");
    // const changeColor = () => {
    //     setColour(colour === "black" ? "red" : "black");
    // }
    // return(
    //     <div>
    //         <button onClick={changeColor}>change color</button>        
    //         <h1 style={{color : colour}}>Hello world</h1>
    //     </div>
    // );  
    
    // useState exercise

    const [number, setNumber] = useState(0);
    const increase = () =>{
        setNumber(number + 1);
    }
    const decrease = () =>{
        setNumber(number  > 0 ? number - 1 : 0);
    }
    const setZero = () =>{
        setNumber(0);
    }
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={setZero}>Set Zeto</button>
      </div>
    );

}

export default Class3;