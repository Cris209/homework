import { useState } from "react";

const Sumar = () => {

    const[number, setNumber] = useState(0);

    const sumar = () =>{
        setNumber(number + 1);
    }

    const restar = () => {
        setNumber(number - 1);
    }

    return(
        <div>
           <h1>{number}</h1>
           <button onClick={restar}>-</button> <button onClick={sumar}>+</button> 
        </div>
    );
}

export default Sumar;