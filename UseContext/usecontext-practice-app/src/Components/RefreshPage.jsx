import { useContext } from "react"
import MultiContext from "../Context/multi-context"
export default function Refresh(){

    const {refreshData}= useContext(MultiContext);
  
    return(
        <>
        <div style={{backgroundColor:"white", margin:0}}>
            <button style={{backgroundColor:"purple",padding:"3", marginTop:'40px'}} onClick={refreshData}>Refresh</button>
        </div>
        </>
    )
}
