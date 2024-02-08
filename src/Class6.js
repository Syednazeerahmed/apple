import { useState, useEffect } from "react";
import Axios from "axios";

function Class6(){
  // const [excuseType, setExcuseType] = useState("");
  const [excuse, setExcuse] = useState("");

  const getExcuse = (excuseType) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuseType}/`).then((res) =>{
      setExcuse(res);
    });
  };
  getExcuse();
  return(
    <div>
      <h1>Generate an excuse</h1>
      
      <div>
        <button onClick={() => getExcuse("party")}>party</button>
        <button onClick={() => getExcuse("family")}>family</button>
        <button onClick={() => getExcuse("office")}>office</button>
      </div>
      {excuse !== "" && <h1>{excuse}</h1>}

    </div>
  );
}



export default Class6;

// exampl-2 feching data from API


// const [name, setName] = useState("");
// const getName = (event) => {
//   setName(event.target.value);
// };
// const [predictedAge, setPredictedAge] = useState(null);
// const getAge = () => {
//   Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
//     setPredictedAge(res.data);
//   });
// };

// return (
//   <div>
//     <input onChange={getName} type="text" placeholder="enter your name" />
//     <button onClick={getAge}>Predict Age</button>
//     {predictedAge !== null && (
//       <h1>
//         Predicet Age for {predictedAge?.name} is {predictedAge?.age} and count
//         is {predictedAge?.count}
//       </h1>
//     )}
//   </div>
// );



// Fetching data from API Example-1

// function Class6() {
//   const [catFact, setCatFact] = useState("");

//   useEffect(() => {
//     generateCatFact();
//   }, []);

//   const generateCatFact = () => {
//     Axios.get("https://catfact.ninja/fact").then((res) => {
//       setCatFact(res.data.fact);
//     });
//   };

//   return (
//     <div className="middle">
//       <button onClick={generateCatFact}>Generate Cat Fact</button>
//       <h1>{catFact}</h1>
//     </div>
//   );
// }