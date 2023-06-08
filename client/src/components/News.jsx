import React from 'react'

function News() {
  return (
    <div className='bg-black  w-full py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
            <div className='lg:col-span-2 my-4 '>
                <h1 className='text-white md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to iptimize your flow?</h1>
                <p className='text-white'>Signup up to our newsletter and stay up to date.</p>
            </div>
          <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                <button className='bg-[#00df9a] w-[200px] text-black rounded-md font-medium my-6 ml-4 font-bold py-3   hover:bg-gray-800'>Notify me</button>
            </div>
          <p className='text-white'>Me care about the protection of your data. Read our <span className='text-[#00df9a]'>privacy policy.</span></p>
          </div>

        </div>
        News
    </div>
  )
}

export default News