import { useContext } from "react";
import UserContext from "../Context/counter-context";
export default function Counter(){

    const {count, Increase, Decrease}= useContext(UserContext);
    return(
        <>
        <h1>Counter App Using useContext</h1>
        <h2>Count {count}</h2>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
        </>
    )
}