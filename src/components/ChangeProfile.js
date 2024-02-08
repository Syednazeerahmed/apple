import { useState, useContext } from "react";
import { AppContext } from "../Class8";

export const ChangeProfile = () => {

    const {setUsername} = useContext(AppContext);
    const [newUsername, setNewUsername] = useState("");
    return(
    <div>
            <input type="text" onChange={(event) => {
                setNewUsername(event.target.value);
            } }/>
            <button onClick={() =>{
                setUsername(newUsername);
            } }>Change Username</button>
        </div>
    );
}