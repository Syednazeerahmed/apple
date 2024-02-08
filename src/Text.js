import { useState, useEffect } from "react";
import style from "./App.module.css";

function Text(){
    const [text, setText] = useState("");
    const showText = (event) => {
        setText(event.target.value)
    }
    useEffect(() => {
        console.log("component mounted");
        return () => {
            console.log("component unmounted");
        };
    }, [text]);

    return(
        <div>
            <input type="text" onChange={showText}/>
            <h1>{text}</h1>
        </div>
    );
}

export default Text;