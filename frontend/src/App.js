import './App.css';
import Grid from "./Components/Grid";
import React, {useState, createContext} from "react";



export const AppContext = createContext(null);



function App() {

  const [bin, setBin] = useState("");


  return (
    <AppContext.Provider value={{bin, setBin}}>
      <div className='App'>
        <Grid />
      </div>
    </AppContext.Provider>
  );
}

export default App;
