import { useContext } from "react";
import { AppContext } from "../Class8";

export const Home = () => {
    const {username} = useContext(AppContext);
    return <h1>This is the home page and user is: {username}</h1>;
}


//Below code use for Class7

// export const Home = (props) => {
//     return <h1>This is the home page and user is: {props.username}</h1>;
// }