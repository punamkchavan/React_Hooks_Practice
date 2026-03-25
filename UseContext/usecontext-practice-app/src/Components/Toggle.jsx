import ToggleContext from "../Context/toggle-context";
import { useContext } from "react";
export default function Toggle(){
    const {show, toggleHandler}=useContext(ToggleContext);
    return(
        <>
        <h1>Show/Hide Text</h1>
    {  show &&  <h2>Hello React !!!!</h2>}
        <button onClick={toggleHandler}>{show ? "Hide":"show"}</button>
        </>
    )
}