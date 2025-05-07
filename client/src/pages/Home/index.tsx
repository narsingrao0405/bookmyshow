//import React from 'react'

import { useEffect } from "react";

import { getCurrentUser } from "../../services/user";

function Home(){

  useEffect( () => {
    const fetchUser = async () =>{
    const response = await getCurrentUser();
    console.log("Current User Details are :::::::::::", response);
  };
    fetchUser();
  }, []);
  return (
    

    <div>
      <h1> Home Page Component</h1>
    </div>
  )
}

export default Home
