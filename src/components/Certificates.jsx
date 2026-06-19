import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';

const Certificates = () => {
    const certifications = [
        {
            id: 1,
            title: 'IT Specialist Databases',
            issuer:'Pearson',
            date:'May 12, 2023',
            link:'https://www.credly.com/badges/90be62a3-7566-4b51-b906-e987b7d5a3b4/public_url',
            desc:'Earners of this badge demonstrate foundational knowledge of how to design and query relational databases, such as MySQL, Microsoft SQL Server, or Oracle.'
        },
        {
            id: 2,
            title: 'Enterprise Design Thinking Practitioner',
            issuer:'IBM',
            date:'September 12, 2023',
            link:'https://www.credly.com/badges/eddfe493-3642-4db0-b87e-ca0fe0a43171/public_url',
            desc:'The earner has acquired knowledge of applying Enterprise Design Thinking and its value. As a Practitioner, the badge earner finds opportunities to try it out in their every day work.'
        },
        {
            id: 3,
            title: 'Enterprise Design Thinking - Team Essentials for AI',
            issuer:'IBM',
            date:'September 13, 2023',
            link:'https://www.credly.com/badges/33bad0c9-ab5d-4d3c-8773-76fbc8a5ec7f/public_url',
            desc:'This badge earner has demonstrated proficiency in using Enterprise Design Thinking concepts and activities to design responsible artificial intelligence systems with intention and a focus on people.'
        }
    ]

  return (
    <section className='text-white py-20' id='certificates'>
        <div className='max-w-7xl mx-auto px-6 lg:px-16'>
            <div>
                <p className='text-primary text-sm uppercase tracking-widest mb-2 font-semibold'>Achievements</p>
                <h2 className='text-4xl md:text-5xl font-extrabold text-white'>
                    Certifications.
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                {certifications.map((cert)=> (
                    <div key={cert.id} data-aos='zoom-in'
                    /* Added flex, flex-col, h-full, and fixed rounded-2xl */
                    className='group relative bg-[#111a3e] border border-[#1f1641] p-6 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_-5_rgba(6,162,194,0.2)] flex flex-col h-full'>
                        
                        <div className='absolute -top-4 -right-4 bg-primary p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform'>
                            <Award className='text-white' size={24}/>
                        </div>
                        
                        <div className='flex items-center gap-4 mb-4 text-xs text-gray-400'>
                            <span className='flex items-center gap-1'>
                                <ShieldCheck size={14} className='text-primary'/>
                                {cert.issuer}
                            </span>
                            <span className='flex items-center gap-1'>
                                <Calendar size={14}/>
                                {cert.date}
                            </span>
                        </div>
                        
                        <h3 className='text-xl font-bold mb-3 group-hover:text-primary transition-colors'>
                            {cert.title}
                        </h3>
                        
                        {/* Removed line-clamp-2 and added flex-grow */}
                        <p className='text-gray-400 text-sm mb-6 flex-grow'>
                            {cert.desc}
                        </p>
                        
                        {/* Added mt-auto and self-start to keep the button aligned nicely at the bottom */}
                        <a href={cert.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 mt-auto self-start'>
                            View Certificate <ExternalLink size={14}/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Certificates;