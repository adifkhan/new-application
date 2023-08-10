
import { useState, useEffect } from 'react'
import './App.css'

useEffect

function App() {

  
  const tabList = [
    {
      id: 11,
      name: "Risk Assessment"
    },
    {
      id: 12,
      name: "Risk Assessment"
    },
    {
      id: 13,
      name: "Risk Assessment"
    },
    {
      id: 14,
      name: "Risk Assessment"
    }
]


   const [bio, setBio] = useState([]);
   const [select, setSelect] = useState(11);
  //  console.log("slt",select)

     useEffect(() =>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => {
        //  console.log(data)
        setBio(data)
        })
     },[])

   const idData = bio.filter(mainData => mainData.id === select)
   console.log(idData)
  

  return (
    <div className='section'>
       <div className='containers'>
          <div className='heading'>
              <h1>SAFEGUARD YOUR BUSINESS WITH ALL-IN-ONE CYBERSECURITY</h1>

              <div className='tab-container'>
                  <ul>
                    {
                      tabList.map((tab, index) => <li key={index} onClick={() => setSelect(tab.id)}>{tab.name}</li> )
                    }
                  </ul>
              </div>


               {
                   idData.map((bioData, index) =>  <div key={index} className={`content`}>
                   <div className='first-content'>
                       <h2>{bioData.name}</h2>
                       <p>{bioData.desc}</p>
                       <button>Click Here</button>
                   </div>
 
                   <div className='second-content'>
                      <figure>
                          <img src={bioData.image} alt="" />
                      </figure>
                   </div>
               </div>
               )}
             
          </div>
       </div>
    </div>
  )
}

export default App;
