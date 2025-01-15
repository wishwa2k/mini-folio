import React from 'react'
import image from '../../public/Sample.jpg'
import { BiLogoFacebook, BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'

const Home = () => {
  return (
    <div id ='home' className='flex min-h-screen w-full
    items-center justify-center'>

        <div className='flex flex-col items-center justify-center
        gap-8 p-5 text-center'>
            <img src={image} alt="" className='w-[250px]
            sm:w-[300px] rounded-full'/>

            <div className="space-y-1 sm:space-y-3">
            <h1 className='bg-gradient-to-r
            from-teal-400 to-teal-600
            bg-clip-text text-4xl font-semibold
            text-transparent md:text-5xl lg:text-6xl
            '>Your Name</h1>
            <h3 className='bg-gradient-to-r
            from-teal-400 to-teal-600
            bg-clip-text text-4xl font-semibold
            text-transparent md:text-2xl lg:text-3xl
            '>Job Role</h3>
            <p className='max-w-[500px] text-sm
             text-gray-500'>Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem Ipsum has been the indus
                try's standard dummy text ever
                 since the 1500s, when an unknown , and more recently with deskto
                 p publishing software like Aldus PageMaker including ver
                 sions of Lorem Ipsum.</p>
             </div>
        
        <div className="flex gap-3">
            <BiLogoGithub className='h-10 w-10 cursor-pointer
            rounded-full border-2 border-transparent
             bg-teal-600 p-2 text-white transition-all
             duration-200 hover:scale-110 hover:border-teal-600
             hover:bg-white hover:text-teal-600
             md:h-12 md:w-12' />

            <BiLogoFacebook className='h-10 w-10 cursor-pointer
            rounded-full border-2 border-transparent
             bg-teal-600 p-2 text-white transition-all
             duration-200 hover:scale-110 hover:border-teal-600
             hover:bg-white hover:text-teal-600
             md:h-12 md:w-12' />

            <BiLogoInstagram className='h-10 w-10 cursor-pointer
            rounded-full border-2 border-transparent
             bg-teal-600 p-2 text-white transition-all
             duration-200 hover:scale-110 hover:border-teal-600
             hover:bg-white hover:text-teal-600
             md:h-12 md:w-12' />

            <BiLogoLinkedin className='h-10 w-10 cursor-pointer
            rounded-full border-2 border-transparent
             bg-teal-600 p-2 text-white transition-all
             duration-200 hover:scale-110 hover:border-teal-600
             hover:bg-white hover:text-teal-600
             md:h-12 md:w-12' />


         </div>

        </div>
    </div>
  )
}

export default Home