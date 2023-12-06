import React from 'react';
import { Link } from "react-scroll"
import HeroImage from "../assets/heroImage.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const Home = () => {
    return (
        <div id="home"
            className=' h-140 w-full bg-gradient-to-b from-black via-black to-gray-800  pt-48'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className=' text-4xl sm:text-7xl font-bold text-white'>I am a Front-end web Developer</h2>
                    <p className=' text-gray-300 py-4  max-w-md'> As a Computer Science graduate and Front-End Developer, I specialize in creating dynamic and interactive web applications, leveraging expertise in HTML, CSS, Bootstrap, React.js, Node.js, and Express.js to deliver seamless user experiences.
        
                    </p>
                    <div>

                        <Link to='portfolio'
                            spy={true}
                            smooth={true}
                            duration={400}
                            offset={-60}
                            className="transition-all duration-400"
                        > <button className=' group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r 
                         from-cyan-500 to-blue-500  cursor-pointer '>
                                Portfolio
                                <span className=' group-hover:rotate-90 duration-300'>
                                    <MdOutlineKeyboardArrowRight size={30} className=' ml-1' />
                                </span>
                            </button></Link>

                    </div>
                </div>
                <div><img src={HeroImage} alt="my profile here" className=' rounded-2xl mx-auto  w-2/3 md:w-full' /></div>
            </div>
        </div>
    )
}

export default Home