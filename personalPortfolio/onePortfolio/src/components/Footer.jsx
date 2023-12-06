import React from 'react'
import {
    FiLinkedin,
    FiGithub,
    FiYoutube
} from 'react-icons/fi';

const Footer = () => {
    const footer = [
        {
            id: 1,
            icon: <FiLinkedin size={25} />,
            href: "https://www.linkedin.com/in/AbdMajidKhn/",
        },
        {
            id: 2,
            icon: <FiGithub size={25} />,
            href: "https://github.com/AbdMajidKhn",
        },
    ]
    return (
        <footer className='w-full bg-gradient-to-t from-gray-900 to-black pt-10'>
            <div className='container mx-auto pb-5'>
                <div className='flex items-center justify-around'>

                    <div class="md:text-3xl text-2xl font-bold -tracking-wide ">
                        <span class="text-white from-white">
                         AMK
                        </span>
                    </div>

                    <div className='flex space-x-6 items-center justify-center'>
                        {
                            footer.map(({ id, icon, href }) => (
                                <a 
                                key={id}
                                 className=' text-white hover:text-rose-600 hover:scale-125 duration-300' href={href} >
                                    {icon} 
                                </a>

                            ))}
                    </div>

                    <p className=' hidden md:block text-white text-md'>
                        &copy;2023 Computer Scientist Abdul Majid Khan
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer