// import "./styles.css";
import React from 'react'
import {useLocation} from 'react-router-dom'

const faceitId = "b9dd6e21-35e7-4222-b2aa-853a84460a8a";

const faceitUrl = `https://accounts.faceit.com/accounts?response_type=code&client_id=${faceitId}`;

 const Home = () => {
  // const search = useLocation().search;  
  // const name = new URLSearchParams(search).get('name');
  const search = useLocation().search;  
  const name = new URLSearchParams(search).get('code');
  
  // const search = useLocation().search
  // const code = new URLSearchParams(search).get('code')
  const loginWithFaceIt = (e) => {
    window.open(faceitUrl, "popup", "width=600,height=600");
  }

  return (
    <div className="App">
      <button onClick={loginWithFaceIt}>Login with Faceit</button>
   {name}
      <h1></h1>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  )
}

export default Home