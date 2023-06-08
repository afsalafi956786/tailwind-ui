import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare

} from 'react-icons/fa'

function Footer() {
  return (
    <div className='max-w-[1240px] bg-black mx-auto py-16 px-4 grid  lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
        <p className='py-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin profes</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
        </div>
      </div>

      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>Solution</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
        </div>

        <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentaion</li>
                <li className='py-2 text-sm'>Gauid</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
        </div>

        <div>
            <h6 className='font-medium text-gray-400'>Comapany</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>blog</li>
                <li className='py-2 text-sm'>press</li>
                <li className='py-2 text-sm'>Carreias</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Comapany</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>blog</li>
                <li className='py-2 text-sm'>press</li>
                <li className='py-2 text-sm'>Carreias</li>
            </ul>
        </div>
           
      </div>

    </div>
  )
}

export default Footer