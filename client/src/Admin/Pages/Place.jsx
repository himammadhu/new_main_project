import React,{ useState } from "react";
import axios from 'axios'




const Place = () => {
    const[place,setPlace]=useState('')
    const addPlace =()=>{
        const data={
            Place
        }
        axios.post('http//localhost:5000/Place/',data).then((response)=>{
            console.log(response.data);
        })
    }
  return (
    
    <div>

        <div>
            <input type="text" name="" id="" onChange={(e)=>setPlace(e.target.value)}/>
                <button type="Submit" onClick={addPlace}>Save</button>
        </div>

    </div>
  )
}

export default Place



    
    

