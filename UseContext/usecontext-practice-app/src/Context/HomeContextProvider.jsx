import { useState } from "react";
import NameContext from "./home-context";

export default function NameContextProvider({children}){

    const [name, setName]= useState("Komal");
    
    return(
        <NameContext.Provider value={{name, setName}}>
            {children}
        </NameContext.Provider>
    )
}