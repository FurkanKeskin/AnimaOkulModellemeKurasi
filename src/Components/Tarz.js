import React, { useState } from "react";

const Kavram = props => {
    const tarzlar = ['REALISTIC','GAMING','CYBERPUNK','STEAMPUNK','FUTURISTIC','CARTOON'];
    const [tarz, setTarz] = useState(0);

    const randomTarz = e => {
        const len = tarzlar.length;
        setTarz(Math.floor(Math.random() * len));
    }

    return (
        <div className="App">
            <p> <h4>TARZ: {tarzlar[tarz]}</h4></p>
            <button onClick={randomTarz}>
                KAVRAM ICIN TIKLA
        </button>
        </div>
    );
}


export default Kavram;