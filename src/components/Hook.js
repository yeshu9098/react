import React, { useState } from "react";

const Hook = ({button}) => {
    const [state, setState] = useState(0);
    const [theme, setTheme] = useState("blue");

    function changeState() {
        setState(state + 1);
        setTheme("red");
    }
    

    return (
        <>
            <div className="hook">
                {state}
                {theme}
                <button onClick={changeState}>{button}</button>
            </div>
        </>
    );
};

const NewHook = (props) => {
    const [count, setCount] = useState(0)

    function setValue(){
        setCount(count + 1)
    }
    
    return (
        <>
        <div className="hook">
            {count}
            <button onClick={setValue}>{props.button}</button>
        </div>
        </>
    )
}

export { Hook, NewHook };
