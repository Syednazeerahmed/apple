import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { useToggle } from "./useToggle";
// import { useToggle } from "./useToggle";
import { useCounter } from "./useCounter";
import Axios from "axios";
import { useGetCat } from "./useGetCat";
import { QueryClient, QueryClientProvider,useQuery } from "@tanstack/react-query";

function Class11 () {
    const { currentValue, increaseCount, decreaseCount, setZero } =
      useCounter();
    return(
        <div>
            <h1>{currentValue}</h1>
            <button onClick={increaseCount}>increase</button>
            <button onClick={decreaseCount}>decrease</button>
            <button onClick={setZero}>set zero</button>
        </div>
    );
}

export default Class11;
// example 2 of custom hooks
// useGetCat

// function Class11 () {
//     const client = new QueryClient({
//         defaultOptions: {
//             queries: {
//                 refetchOnWindowFocus: false,
//             },
//         },
//     });

//     return(
//         <div>
//             <QueryClientProvider client={client} contextSharing={true}>
//                 <Cat />
//             </QueryClientProvider>
//         </div>
//     );
// };

// export default Class11;

// const Cat = () => {

//     const { catData, refetchCatData } = useGetCat();
    
    
//     return (
//       <div>
//         <h1>This is the home page</h1>
//         <h1>
//           {catData?.fact}
//           <br />
//           <button onClick={refetchCatData}>Update CAT FACT</button>
//         </h1>
//       </div>
//     );
// }


//Custom hooks first Example
//useToggle

// const [isVisible, toggle] = useToggle(false);
// return (
//   <div>
//     <button onClick={toggle}>{isVisible ? "hide" : "show"}</button>
//     {isVisible && <p>hidden text</p>}
//   </div>
// );
