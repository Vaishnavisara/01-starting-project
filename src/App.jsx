// import { Guessnum } from "./Guessnum";
import { useState } from "react";
let randomNum = Math.floor(Math.random() * 21);
console.log(randomNum)
export default function App(){
  const[result,setResult] = useState("please enter any number");
  const [score, setScore] = useState(5);

  function condition(inputValue){
    // console.log(randomNum)
    // console.log(inputValue)
    // let score=5;
    let result1;
     if(inputValue == ""){
      result1= "Please enter any number"
     }
     else if(score === 0){
      result1 ="Ohh! no you loss the game 😓"
     }
    else if(inputValue === randomNum){
      result1 ="yeah! your guess is correct 🎉"
     }
     else if(inputValue > randomNum){
      result1 = "ohh! no your guess is too high🥲"
      setScore((prevScore) => prevScore - 1);
     }
   else if(inputValue<randomNum){
    result1 = "ohh! no your guess is too low 🥲"
    setScore((prevScore) => prevScore - 1);
   }
   else if(inputValue>20){
    result1 = "invalid choice"
    
   }
   setResult(result1,score);
  }
  // document.getElementById("input").value = "";


  return(
    <div className="header"><br></br><br></br>
      <h1 >NUMBER GUESSING GAME</h1>
      <p>Score :{score}</p>
        <label for ="input" id="inpt">Enter number between 0 to 20</label><br></br><br></br>
        <input type="number" id="input"></input><br></br>
     
      <button id="btn" onClick={()=>condition(document.getElementById("input").value)}>submit</button><br></br>
      <p id rslt>{result}</p>
      
    </div>
  )
}



 
