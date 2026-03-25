import NameContext from "../Context/home-context";
import { useContext } from "react";
export default function Home(){
 
    const {name, setName} =useContext(NameContext);

    return(
        <>
        <h1>{name}</h1>
        <button onClick={()=>setName("Karan")}>Change Name</button>
        </>
    )
}
