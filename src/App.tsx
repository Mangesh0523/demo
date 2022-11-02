import React, {FC, createContext} from 'react';

import './App.css';
import { Person,HairColor} from './components/Person';

interface AppContextInterface{
  name:string;
  age:number;
  country:string;
}

const AppContext= createContext<AppContextInterface | null>(null);
const App:FC=()=> {

  const contextValue : AppContextInterface={
    name:"Mangesh",
    age:27,
    country:"India",
  }
  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
     <Person name="Mangesh" age={27} email="mangesh@gmail.com" hairColor={HairColor.black} />  
    </div>
    </AppContext.Provider>
  );
}

export default App;


//  <Person />  to remove the error we use ? to every property in person becaue we dont know which property is going to add. how ever if you remove ? one of then it will start to show error.