// import { useContext } from "react";
// import { AppContext } from "../Class8";
import Axios  from "axios";
import { useQuery } from "@tanstack/react-query";

export const Home = () => {
    const { data: catData, isLoading, isError, refetch } = useQuery({
      queryKey: ["cat"],
      queryFn: () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
      }
    });
    if(isLoading)
        return <h1>loading...</h1>;
    if(isError)
        return <h1>sorry, there is an error</h1>
    return (
      <div>
        <h1>This is the home page</h1>
        <h1>
        {catData?.fact}<br/>
        <button onClick={refetch}>Update CAT FACT</button>
        </h1>
      </div>
    );
}

// queryFn: () => {
//         return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
//       }

//Below code is used for Class8.js 

// export const Home = () => {
//     const {username} = useContext(AppContext);
//     return <h1>This is the home page and user is: {username}</h1>;
// }

//Below code use for Class7

// export const Home = (props) => {
//     return <h1>This is the home page and user is: {props.username}</h1>;
// }