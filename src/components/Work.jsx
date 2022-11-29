import React from 'react'
// import { data } from '../Data/data.js'
import Training from '../assets/images/ourgym.jpg'
import Trainer from '../assets/images/training.jpg'
import { Link } from 'react-scroll'

const Work = () => {

 // projects file
//  const project = data;
 //setProject(data);
//  sm:grid grid-cols-1
return (
  <div name='work' className="mx-auto flex justify-around w-full h-full text-center bg-[#072a57] text-white">
<div className='lg:text-4xl flex flex-col justify-center items-center sm:text-right pb-8 pl-4'>
         <p className='text-3xl font-bold inline border-b-4 border-[#ade1e5]'>HIRE US</p>
     </div>
  
    
     <div className="max-w-lg h-auto">
  <img src={Training} alt="leftPlaceholde" className="max-w-lg h-auto" />
<h4 className="gap-4 text-center py-8">VISIT THE GYM</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facere veniam laborum temporibus omnis eaque quia molestiae libero quas voluptatum voluptate neque excepturi, voluptas expedita?</p>
<button className='text-white group border-2 px-6 py-3 my-2 hover:bg-[#FF6973] hover:text-black hover:border-[#ffffff]'>View Classes</button>
</div>
<div className="max-w-lg h-auto">
  <img src={Trainer} alt="leftPlaceholde" className="max-w-lg h-auto flex justify-center" />
<h4 className="gap-4 text-center py-8">HAVE US VISIT YOU</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facere veniam laborum temporibus omnis eaque quia molestiae libero quas voluptatum voluptate neque excepturi, voluptas expedita?</p>

<button className='text-white group border-2 px-6 py-3 my-2 hover:bg-[#FF6973] hover:text-black hover:border-[#ffffff]'><Link to="contact" smooth={true} duration={500}>HIRE US</Link></button>
</div>
</div>

);
};

export default Work;