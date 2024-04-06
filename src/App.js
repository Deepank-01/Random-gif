import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'
function App() {
  return (

    <div className=' relative flex flex-col background min-h-[100vh] items-center'>
      <h1 className='w-[75vw] bg-white mt-[40px]  text-center font-bold text-xl rounded-xl p-2 '>Random GIF</h1>
      <div className='flex flex-col w-full items-center'>
       <Random/>
       <Tag/>
      </div>
    </div>
  )
}

export default App
