import Counter from "./Components/Counter";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Refresh from "./Components/RefreshPage";
import Toggle from "./Components/Toggle";
import UserContextProvider from "./Context/CounterContextProvider";
import NameContextProvider from "./Context/HomeContextProvider";
import MultiContextProvider from "./Context/MultiContextProvider";
import ToggleContextProvider from "./Context/ToggleContextProvider";
import './App.css'

function App() {
  
  return (
    <>
    
     {/* <UserContextProvider>
        <Counter />
     </UserContextProvider> */}

     {/* <NameContextProvider>
       <Home/>
     </NameContextProvider> */}

     {/* <ToggleContextProvider>
       <Toggle/>
      </ToggleContextProvider> */}

       <MultiContextProvider>
       <NavBar/>
       <Refresh/>
      </MultiContextProvider>
    </>
  )
}

export default App
