
import './App.css';
import React,{ useState} from 'react'

function App() {
  let clock = new Date().toLocaleTimeString();
  const [currentTime,setNewTime]= useState(clock);

  let updateTime =() =>{

    clock = new Date().toLocaleTimeString();
    setNewTime(clock);
  }
  setInterval(updateTime,1000)

  return (
    <div className="App">
      <div>
      <h1> {currentTime}</h1>  
      </div>

    </div>
  );
}

export default App;
