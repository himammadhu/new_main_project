import React, { useEffect } from 'react'
import axios from 'axios'

const Home = () => {

  useEffect(() => {
    axios.get('http://localhost:5000/Test/').then((response) =>{
      console.log(response);
    })
  },[])
  return (
    <div>Home</div>
  )
}

export default Home