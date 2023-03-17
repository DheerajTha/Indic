import React from 'react'
import './Hero.css';
import { HiArrowSmRight } from "react-icons/hi";
import Typewriter from './type';


const Hero = () => {
  return (
    <>
    <div className='container-fluid px-0 top-banner'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 text-center mx-auto'>
                    <h1> Are You Looking <span> For an IT Service? </span></h1>
                    <p className='hero-text'>We Provide It-Service </p>
                    <Typewriter text='  App Development  , Web Development  ' />
                    <p className='hero-text'>Keep Secure Your It-Service ,</p>
                    <div className='mt-4'>
                        <button className='button me-auto'> Contact Us <HiArrowSmRight/> </button>
                    </div>
                </div>


            </div>
        </div>

    </div>
    </>
  )
}

export default Hero;