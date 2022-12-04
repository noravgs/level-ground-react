import React from 'react'
import Skill from '../Skill'

const Classes = () => {
 return (
  <div name='skills' className='w-full h-screen bg-[#5dabeb] text-white font-bold pt-20'>
  {/* container */}
  <div></div>
  <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
   <div className='lg:text-4xl flex flex-row justify-center items-center sm:text-right pb-8 pl-4'>
     <p className='text-4xl font-bold inline border-b-4 border-[#cdfa04]'>Services</p>
     
   </div>
   <div></div>
    <div className='skills w-full grid grid-cols-2 sm:grid-cols-1 gap-6 text-center py-10'>
      <div className="skillsGrid flex justify-between">
                <Skill source="https://www.svgrepo.com/show/195212/hand-grip-grip.svg" alt="The logo icon for hand-grip" title="Hand-grip" content="Stretch Cold-pressed hella man braid, glossier organic aesthetic drinking vinegar etsy photo booth butcher."/>
                <Skill source="https://www.svgrepo.com/show/195214/weight.svg" alt="The logo icon for weight" title="Weight" content="Weights Listicle ramps fixie lo-fi hashtag mukbang food truck kickstarter vice street art selfies."/>
              <Skill source="https://www.svgrepo.com/show/195220/chest-sports-and-competition.svg" alt="The logo icon for HTML 5" title="HTML 5" content="Muscle Live-edge austin art party celiac salvia. Keffiyeh humblebrag knausgaard tbh."/>
              <Skill source="https://www.svgrepo.com/show/195232/punching-bag.svg" alt="The logo icon for CSS3" title="CSS 3" content="Boxing Pitchfork helvetica 8-bit scenester four dollar toast sriracha gastropub chia."/>
           <Skill source="https://www.svgrepo.com/show/195243/treadmill.svg" alt="The logo icon for TailwindCSS" title="Twilwind CSS" content="Cycling Pabst godard pok pok humblebrag cloud bread, listicle you probably haven't heard of them."/>
            <Skill source="https://www.svgrepo.com/show/195239/jumping-rope-skipping-rope.svg" alt="The logo icon for TailwindCSS" title="Twilwind CSS" content="Jumping Next level palo santo ugh vaporware waistcoat lo-fi chambray poutine vexillologist af."/>
                      
           </div>            
       
      
    </div>
  </div>

  
 </div>
  // <div name='classes' className='w-full h-screen bg-[#5dabeb] text-gray-200 pt-20'>
   
  //  <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
  //   <div className='lg:text-4xl flex flex-col justify-center items-center sm:text-right pb-8 pl-4'>
  //     <p className='text-4xl font-bold inline border-b-4 border-[#ade1e5] pt-20'>CLASSES</p>
      
  //   </div>
  //   <div></div>
  //    <div className='classes w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
  //      <p className='sm:text-right text-4xl font-bold py-4'>These are the classes and workouts we offer</p>
  //      <div className="skillsGrid grid grid-cols-4 text-sm">
  //               <Skill source="https://www.svgrepo.com/show/195212/hand-grip-grip.svg" alt="The logo icon for hand-grip" title="Hand-grip" content="Stretch Cold-pressed hella man braid, glossier organic aesthetic drinking vinegar etsy photo booth butcher."/>
  //               <Skill source="https://www.svgrepo.com/show/195214/weight.svg" alt="The logo icon for weight" title="Weight" content="Weights Listicle ramps fixie lo-fi hashtag mukbang food truck kickstarter vice street art selfies."/>
  //               <Skill source="https://www.svgrepo.com/show/195220/chest-sports-and-competition.svg" alt="The logo icon for HTML 5" title="HTML 5" content="Muscle Live-edge austin art party celiac salvia. Keffiyeh humblebrag knausgaard tbh."/>
  //               <Skill source="https://www.svgrepo.com/show/195232/punching-bag.svg" alt="The logo icon for CSS3" title="CSS 3" content="Boxing Pitchfork helvetica 8-bit scenester four dollar toast sriracha gastropub chia."/>
  //               <Skill source="https://www.svgrepo.com/show/195243/treadmill.svg" alt="The logo icon for TailwindCSS" title="Twilwind CSS" content="Cycling Pabst godard pok pok humblebrag cloud bread, listicle you probably haven't heard of them."/>
  //               <Skill source="https://www.svgrepo.com/show/195239/jumping-rope-skipping-rope.svg" alt="The logo icon for TailwindCSS" title="Twilwind CSS" content="Jumping Next level palo santo ugh vaporware waistcoat lo-fi chambray poutine vexillologist af."/>
                
               
              

               
  //           </div>            
        
       
  //    </div>
  //  </div>

   
  // </div>
 )
}

export default Classes
