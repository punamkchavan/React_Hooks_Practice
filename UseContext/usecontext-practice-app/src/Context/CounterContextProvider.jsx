import UserContext from "./counter-context";
import { useState } from "react";

export default function UserContextProvider({children}){

    const [count, setCount]= useState(0);

    const Increase= ()=>{
        setCount(count+1);
    }

    const Decrease= ()=>{
        setCount(count-1);
    }

    const contextValue={
        count,
        Increase,
        Decrease
    }



    return(
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}