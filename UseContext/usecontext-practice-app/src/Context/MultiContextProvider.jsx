import MultiContext from "./multi-context";
import { useState } from "react";
import axios from "axios";

export default function MultiContextProvider({children}){

   const [value, setValue] = useState();

  const refreshData = async () => {
    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/todos"); 
      setValue(res.data)
      //console.log(res.data);

    } catch (err) {
      console.error("API error:", err);
    }
  

    }

  
    return(
        <MultiContext.Provider value={{value, refreshData}}>
            {children}
        </MultiContext.Provider>
    )
}