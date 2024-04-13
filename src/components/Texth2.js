import { useState, useEffect} from "react";



const Texth2 = () =>{
    const [text, setText] = useState("");

    const TextView = (e) => {
        setText(e.target.value);
    }

    useEffect(() => {
        console.log('pa calar')
    }, [])
    return(
        <div>
            <input type="text" onChange={TextView}/>
            <h2>{text}</h2>
        </div>
    )
};

export default Texth2;
