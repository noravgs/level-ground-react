import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {
 return (
  <div name='home' className='w-full h-screen bg-[#072a57]'>
   {/*container*/}
   <div className="flex flex-col justify-center px-6 py-3 h-screen bg-main w-full bg-center bg-cover">
    <h1 className='text-4xl sm:text-7xl font:bold text-white'>WHERE GRIT MEETS OPPORTUNITY</h1>
    <h2 className='text-[#9a9b9b] py-4 max-w[700px]'>Fitness has no finish line Workout with us</h2>
    <div>
      <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FF6973] hover:text-black hover:border-[#ffffff]'>View Classes <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300' /></button>
    </div>
    <div>
    
    </div>
 </div>
  </div>
 )
}

export default Home
