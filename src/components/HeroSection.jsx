import React from 'react';
import { Download } from 'lucide-react';
import hero from '../assets/hero.png';
import resumePDF from '../assets/Resume_Current_2026.pdf';

const HeroSection = () => {
  return (
    <section className='relative w-full' data-aos='zoom-in-up'>
      <div className='absolute top-0 inset-x-0 h-64 flex items-start'>
        <div className='h-24 w-2/3 bg-gradient-to-br from-[#0c7fac] blur-2xl opacity-40'>
        </div>
        <div className='h-20 w-3/4 bg-gradient-to-r from-[#289eff] opacity-40 blur-2xl'>
        </div>
      </div>

      <div className='w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative py-24'>
        <div className='grid lg:grid-cols-2 gap-10 xl:gap-14 relative'>
          <div className='lg:py-6'>
            <div className='text-left'>
              <h1 className='pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl'>
                Hi, I'm <span className='text-primary'>Christian</span>{' '}
                <span className='wave' aria-hidden='true'>👋</span>
              </h1>
            </div>
            
            <p className='text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl'>
                I am an ERP Consultant and former Full Stack Developer with experience in ERP implementation, software development, business process analysis, technical support, and sportsbook risk and settlement operations. My technical background includes Microsoft SQL Server, ASP.NET (C#), Angular, React, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, and REST APIs. Before graduating with a Bachelor's degree in Information Systems from Adamson University in 2025, I had already gained several years of professional experience across different industries. I enjoy solving business and technical challenges and building solutions that help organizations work more efficiently.

            </p>
            <div className='flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max lg:mx-0'>
                <button className='px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center'>
                    <span className='absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary border-2 border-transparent group-hover:border-primary'>

                    </span>
                    <span className='relative flex items-center justify-center text-white'>
                        Hire Me
                    </span>

                </button>
                <button className='border border-cyan-400 px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center'>
                    <div className='hover:scale-105 transition-all ease-in-out flex justify-center items-center relative'>
                        <div className='svg-container flex items-center gap-2'>
                            <Download size={18} className='text-cyan-400' />
                            <div className='download-loader text-white hidden' />
                            <a href={resumePDF}
                               download="Resume_Current_2026.pdf"
                               className='text-cyan-400'>
                              Download Resume
                            </a>
                        </div>
                    </div>
                </button>

            </div>
          </div>
            <div className='lg:h-full md:flex'>
                  <div className='w-full h-96 lg:h-full flex items-center relative'>
                    {/* <div className='absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-r from-[#0c64ac] opacity-25'>
                    </div> */}
                    <div className='absolute h-full z-10 p-2 top-1/2 -translate-y-1/2 lg:right-3 md:right-40 sm:right-16 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-lg border border-cyan-500 overflow-hidden'>
                      <img src={hero} alt="Hero pic"
                      width={500}
                      height="auto"
                      className='w-full h-full object-cover' />
                    </div>
                  </div>
                
            </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection