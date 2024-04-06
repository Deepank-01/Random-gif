import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from './Spinner';
const API_key=process.env.Key;
export const Random = () => {

const[gif,setgif]=useState("");
const[loaded,setlaoded]=useState(false);
async function fetchdata(){
   setlaoded(false)
  const url="https://api.giphy.com/v1/gifs/random?api_key=nUa9hFjXFdC4URzugxG01eUQwpb9I2n3"
  const data= await axios.get(url);
  console.log(data);
  const val=data.data.data.images.downsized_large
  .url
  // console.log(val);
  // const val=data.data.images.downsized_large.url;
  setgif(val);
  console.log(data);
  setlaoded(true);
  // console.log(data.data.data.images.downsized.url)
}
useEffect(() => {
  fetchdata()
}, []);

function clickhander(){
   fetchdata();
}
  return (
    <div className='bg-green-500 w-[75%] flex flex-col items-center mt-[60px] rounded-md border-[5px] border-b-slate-400'>
    <h1 className='text-center underline font-bold text-2xl mt-[10px] mb-[20px] p-4'>A Random Gif</h1>
    {
      loaded==false ? (<Spinner className='w-1/2 h-9 mb-6 mt-3'/>):(<img src={gif} className='rounded'></img>)

    }
   
    <button onClick={clickhander} className='mt-[20px] mb-[20px] bg-orange-400 w-1/3 font-semibold tranform transition duration-300 hover:scale-125 rounded-sm  hover:bg-orange-200 '>
      Generate
    </button>
    </div>
  )
}
export default Random;