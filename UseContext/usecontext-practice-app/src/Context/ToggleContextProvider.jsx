import ToggleContext from "./toggle-context";
import { useState } from "react";

export default function ToggleContextProvider({children}){
    const [show, setShow]= useState(true);

   const toggleHandler = () => {
         setShow((prev) => !prev);
           };
    return(
        <ToggleContext.Provider value={{show, toggleHandler}}>
            {children}
        </ToggleContext.Provider>
    )
}