import React from 'react'
import demo from '../assets/logos/logo.png'

const Testimonial = () => {
  return (
    <div className='flex space-x-5 py-10 px-10 bg-gradient-to-tr from-[#192c28] from-70% to-[#121315] text-white'>
        <div className="card bg-[#0b0b0b] py-10 h-52 px-10 w-1/3 flex items-center justify-around space-x-5 rounded-md shadow-xl">
            <img src={demo} alt="" className='w-20 h-20 rounded-full' />
            <div className="box space-y-2">
                <h5 className="text-xl font-bold text-center">Arshad</h5>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nisi vitae dolore ipsa accusamus at ut maiores deserunt blanditiis nostrum</p>
            </div>
        </div>
        <div className="card bg-[#0b0b0b] py-10 h-52 px-10 w-1/3 flex items-center justify-around space-x-5 rounded-md shadow-xl">
            <img src={demo} alt="" className='w-20 h-20 rounded-full' />
            <div className="box space-y-2">
                <h5 className="text-xl font-bold text-center">Arshad</h5>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nisi vitae dolore ipsa accusamus at ut maiores deserunt blanditiis nostrum</p>
            </div>
        </div>
        <div className="card bg-[#0b0b0b] py-10 h-52 px-10 w-1/3 flex items-center justify-around space-x-5 rounded-md shadow-xl">
            <img src={demo} alt="" className='w-20 h-20 rounded-full' />
            <div className="box space-y-2">
                <h5 className="text-xl font-bold text-center">Arshad</h5>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nisi vitae dolore ipsa accusamus at ut maiores deserunt blanditiis nostrum</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial