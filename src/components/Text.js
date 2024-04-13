import { useState } from "react";
import Texth2 from './Texth2';
const Text = () => {

    const[ver, setVer] = useState(true);

    function mostrar() {
        setVer(!ver);
    }


    return(
        <div>
            <button onClick={mostrar}>{ver === true ? "Ocultar" : "Mostrar"}</button>
            {ver === true && <Texth2/>}
        </div>
    );

}

export default Text;