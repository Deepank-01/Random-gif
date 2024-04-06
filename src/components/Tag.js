import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from './Spinner';

const Tag = () => {
  const[gif,setgif]=useState("");
const[loaded,setlaoded]=useState(false);
const[tag,settag]=useState("");
const[tag_check,settag_check]=useState(false);
async function fetchdata(){
   setlaoded(false)
   try{
    const url=`https://api.giphy.com/v1/gifs/random?api_key=nUa9hFjXFdC4URzugxG01eUQwpb9I2n3&tag=${tag}`
    const data= await axios.get(url);
    const val=data.data.data.images.downsized_large
    .url
    // console.log(val);
    // const val=data.data.images.downsized_large.url;
    setgif(val);
    // console.log(data);
    setlaoded(true);
    // console.log(data.data.data.images.downsized.url)
   }
   catch(err){
    setgif("https://www.google.com/url?sa=i&url=https%3A%2F%2Fsirv.com%2Fhelp%2Farticles%2Fcustomized-error-images%2F&psig=AOvVaw1OYw_tblGQLwFztjpY5Mlv&ust=1689754444480000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCovIDol4ADFQAAAAAdAAAAABAQ")
    setlaoded(true);
   }

}
useEffect(() => {
  fetchdata()
}, []);
function clickhander(){
   fetchdata();
   settag_check(true);
}
function clickhander_tag(event){
  console.log(event.target.value);
  settag(event.target.value);
  settag_check(true);
}
  return (
    <div className='bg-green-500 w-[75%] flex flex-col items-center mt-[60px] rounded-md border-[5px] border-b-slate-400'>
    <h1 className='text-center underline font-bold text-2xl mt-[10px] mb-[20px] p-4'>A Random {tag_check==true ? (tag):("")} Gif</h1>
    {
      loaded==false ? (<Spinner className='w-1/2 h-9 mb-6 mt-3'/>):(<img src={gif} className='rounded' alt="Gif not aviable"></img>)

    }
    <input
    className='mt-[10px]'
    placeholder='Search for the gif'
    onChange={clickhander_tag}

    ></input>
   
    <button onClick={clickhander} className='mt-[20px] mb-[20px] bg-orange-400 w-1/3 font-semibold tranform transition duration-300 hover:scale-125 rounded-sm  hover:bg-orange-200 '>
      Generate
    </button>
    </div>
  )
}

export default Tag