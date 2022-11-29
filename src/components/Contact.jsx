import React from 'react'

const Contact = () => {
 return (
  <div name='contact' className='w-full text-gray-200 h-screen bg-[#5dabeb] flex justify-center items-center p-4'>
   <form method='POST' action="https://getform.io/f/c1900021-a4a3-456f-90df-3a7b02baba9f" className='flex flex-col max-w-[600px] w-full'>
     <div className='lg:text-4xl flex flex-col justify-center items-center sm:text-right pb-8 pl-4'>
      <p className='text-4xl font-bold inline border-b-4 border-[#ade1e5]'>Contact/Hire Us</p>
      <p className='text-gray-200 py-4'>Feel free to reach out if you want free consultation for a personal trainer or when you can start workingout.</p>
     </div>
     <input className='bg-[#f9f2e7] p-2 text-black' type="text" placeholder='name' name='name' />
     <input className='my-4 p-2 bg-[#f9f2e7] text-black' type="text" placeholder='Email' name='email' />
     <textarea className='bg-[#f9f2e7] p-2 text-black' name="message"  rows="10" placeholder='Message'></textarea>
     <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#FF6973] hover:text-black hover:border-[#ffffff]'>Let's Connect</button>
   </form>
   
  </div>
 )
}

export default Contact
