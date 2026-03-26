import MultiContext from "./multi-context";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MultiContextProvider({children}){

   const [value, setValue] = useState();

  const refreshData = async () => {
    try {
      const res = await axios.post("https://api.openweathermap.org/data/2.5/weather?q=London&appid=fcc8de7015bbb202209bbf0261babf4c&units=metric"); 
      setValue(res.data)
      console.log(res.data);

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