import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';



function App() {

  const URL ="https://catfact.ninja/fact"
  const [quote, setQuote] = useState("get new cat facts!")
  
  function getquote(){
    const fetchData = async () => {
     const result = await fetch(URL)
     result.json().then(json=>{
      setQuote(json.fact);})
     
     }
    
    fetchData();
    }

  const URLD ="https://dogapi.dog/api/v2/facts"
  const [quoted, setQuoted] = useState("get new dog facts!")

  function getquoted(){
    const fetchDatad = async () => {
      const resultd = await fetch(URLD)
      resultd.json().then(json=>{
      setQuoted(json.data.map((user)=>(user.attributes.body))); 
      console.log(json.data.map((user)=>(user.attributes.body)))
  })
      
      }
    
    fetchDatad();
    }

  function ot(){
    if(document.getElementById("cat") === "Cats !"){
      document.getElementById("full").innerHTML = <div>
      <h1 id='cat' className="display-1">Cats!</h1>
      <div className='display-4'>{quote}</div>
      <button class="btn btn-outline-secondary" onClick={getquote} >New fact!</button>
      </div>
    }else(
      <div>
           <h1 class="display-1">Dogs!</h1>
            <div className='display-4'>{quoted}</div>
            <button class="btn btn-outline-secondary" onClick={getquoted}>New fact!</button>
          </div>
    )
      
  }

  return (
    <div className='App' id='full'>
          <div className='u'>
            <h1  id='cat' className="display-1"><b>Cats!</b></h1>
            <div className='display-4'>{quote}</div>
            <button class="btn btn-outline-secondary" onClick={getquote} >New fact!</button>
          </div>
          <div class="vr"></div>
          <div className='w'>
           <h1  class="display-1"><b>Dogs!</b></h1>
            <div className='display-4'>{quoted}</div>
            <button class="btn btn-outline-secondary" onClick={getquoted} >New fact!</button>
          </div>
            
    </div>
  );
}

export default App;
