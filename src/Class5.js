import { useState } from "react";
import styles from "./App.module.css";
import Text from "./Text";

function Class5(){
    const [show,setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    return (
      <div>
        <button onClick={handleShow}>
          show/hide
        </button>
        {show && <Text />}
      </div>
    );
}
export default Class5;