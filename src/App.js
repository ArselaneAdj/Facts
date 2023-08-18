import { useState } from 'react';
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

    function myFunction() {
      var x = document.getElementById("cats");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("hidec").innerHTML = "Hide Cats"
      } else {
        x.style.display = "none";        
        document.getElementById("hidec").innerHTML = "Show Cats"

      }
    }

    function myFunctiond() {
      var x = document.getElementById("dogs");
      if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("hided").innerHTML = "Hide Dogs"
      } else {
        x.style.display = "none";
        document.getElementById("hided").innerHTML = "Show Dogs"
      }
    }


      
  return (
    <div>
      <div class="d-flex justify-content-around">
          <button  id='hidec' class="btn btn-outline-secondary" onClick={() => {myFunction()}} >Hide Cats</button>
          <button id='hided' class="btn btn-outline-secondary" onClick={() => {myFunctiond()}} >Hide Dogs</button>
      </div>
      <div className='App' id='full'>
          <div class="position-absolute top-0 start-0">
          </div>

            <div id='cats' className='u'>
              <h1 className="display-1"><b>Cats!</b></h1>
              <div className='display-4'>{quote}</div>
              <button className="btn btn-outline-secondary" onClick={getquote} >New fact!</button>
            </div>

            <div class="vr"></div>

            <div class="position-absolute top-0 end-0">
            </div>

            <div id='dogs' className='w'>
              <h1  className="display-1 "><b>Dogs!</b></h1>
              <div className='display-4 '>{quoted}</div>
              <button className="btn btn-outline-secondary " onClick={getquoted} >New fact!</button>
            </div>
            
      </div>
    </div>
  );
}

export default App;
