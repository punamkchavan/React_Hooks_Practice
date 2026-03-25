import { useContext } from "react"
import MultiContext from "../Context/multi-context"
export default function NavBar(){

    const {value}=useContext(MultiContext)
 
  
    return(
        <>
        <header>
            <nav style={{backgroundColor:'pink', margin:0, padding:'4px', color:'white'}}>
                <h1>{value}</h1>
            </nav>
        </header>
        </>
    )
}
