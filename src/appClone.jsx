import image1 from './assets/image.png';
import image2 from './assets/android.webp';
import image3 from './assets/backend.jpg';
import { Children, useState } from 'react';
let list = ["Hello!","Hi","welcome"];

function random(max){
  return Math.floor(Math.random()*(max+1));
}

export default function App() {
const [getSelectTopic,setSeletedTopic] = useState(0);

  function handleSelect(selectedbtn){
    setSeletedTopic(selectedbtn);
    // console.log(getSelectTopic)
  }

  return (
    <div>
      <header>
        <h1>Home work</h1>
        <p>
        {list[random(2)]} I am Vaishnavi </p>
        <h3>I'm a Software Developer in fields like</h3>
        <Call {...array[0]}/>
        <Call {...array[1]}/>
        <Call {...array[2]}/>
        <ShortGoal {...list2[0]}/>
        <section>
        <menu>
        <Tapbutton onSelect ={()=>handleSelect(0)}>front-end</Tapbutton>
        <Tapbutton onSelect ={()=>handleSelect(1)}>middle -tyre</Tapbutton>
        <Tapbutton onSelect ={()=>handleSelect(2)}>back-end</Tapbutton>
        </menu>
        </section>
       
        <div id="tab-content">
          <h3>{example[getSelectTopic].title} </h3>
          <h3>{example[getSelectTopic].description} </h3>
        </div>
      </header>
      </div>
  );
  }

  // _____________________________dynamic values in spread operator___________________________________
  function Call(props){
    return(
      <div className='grid'>
        <element id="core-concepts">
          <li>
        <img src={props.image} alt={props.title} />
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    </li>
    </element>
    </div>
    );
  }


export let array = [
  {
    image:image1,
   title:"Frontend",
   description : "I have built my portfolio using HTML,BOOTSTRAP "

  },
  {
    image:image2,
   title:"Andoid",
   description : "I have built 5 basic game apps in android"

  },
  {
    image:image3,
   title:"Backend",
   description : "I have wrote Api and i can write backend codes"

  },
]
// ___________________________________________props_________________________________________


export  function ShortGoal(props) {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

let list2=[
    {
    title : "My short term Goal is",
    description : "To learn React and Data structure tharoughly"
}
]
// ]_passing functions as values_______________________________
// export function Pass(){
//   return(
//   // <h2>djgjg</h2>
//   <button onClick={()=>{tabtn(check())}}>Tap</button>
//   );
// }

// function check(){
//  console.log("hmmrdg");
// }

// function tabtn(fun){
//  fun();
// }
// _________________________________________dynamic button______________________________________
function Tapbutton({children,onSelect}){
  return <li><button onClick={onSelect}>{children}</button></li>
}

export let example = [
  {
   title:"Frontend",
   description : "I have built my portfolio using HTML,BOOTSTRAP "

  },
  {
   title:"Andoid",
   description : "I have built 5 basic game apps in android"

  },
  {
   title:"Backend",
   description : "I have wrote Api and i can write backend codes"

  },
]