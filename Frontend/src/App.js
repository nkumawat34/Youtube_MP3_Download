import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { FaYoutube } from "react-icons/fa";
import { useState } from 'react';
import backgroundImage from '../src/background.jpg'
import { FaHeart } from "react-icons/fa";
function App() {
  const [url,setUrl]=useState('')

  const [link,setLink]=useState('')
  const download= async ()=>{
    
    try {
      const response = await axios.post('http://localhost:3000/download', { url });
      console.log(response)
      setLink(response.data.link)
      console.log(link)
    
      
    } catch (error) {
    console.log("Error occured")
    }

  }


  return (
    <div className="App " style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', }}>
      <div class='flex flex-row justify-center'>
      <div className='m-4 mx-5'><FaYoutube size={70}/></div><div className='m-4'><h1 class="text-5xl">Youtube MP3 Downloader</h1></div>
      </div>
      <div className='flex justify-center'><div><h1 class='text-3xl tracking-wide'>Any youtube video <br/> can be downloaded in MP3</h1></div></div>
     <div class='mt-[8vh]'><label class='text-2xl'>URL:-</label>
     <input class='w-[30vw] border-2 border-indigo-500/100 mx-4' onChange={(e)=>setUrl(e.target.value)}></input>
     <button class='p-3 bg-[#FF0000] rounded-full ' onClick={()=>download()}>Generate Link</button>
     </div>
     {link?<h2 class='text-2xl'>MP3 LINK</h2>:""}{link}
     {link!=''?<div class='mt-[6vh]'><a href={link} class=' p-3 bg-cyan-300'>Download</a></div>:""}
     <div class='mt-[290px] flex flex-row justify-center '><div class='mx-3'><FaHeart size={50} color={"red"} /></div><h3 class='font-bold italic text-2xl'>Made By Neeraj Kumawat</h3></div>
    </div>
  );
}

export default App;
