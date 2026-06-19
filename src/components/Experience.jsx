import React from 'react';
import { Briefcase, Bug, Building, Calendar, Code, Database, FileCode, Layout } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { Terminal } from 'lucide-react';
import { Layers } from 'lucide-react';


const Experience = () => {
    const Skills=[
        {
            id:1,
            name: 'HTML & CSS',
            width:'90%',
            icon:Layout
        },
         {
            id:2,
            name: 'React js',
            width:'70%',
            icon: Cpu
        },
         {
            id:3,
            name: 'Javascript',
            width:'80%',
            icon: Terminal
        },
        {
            id:4,
            name: 'Figma',
            width:'80%',
            icon: Layers
        },
        {   id:5,
            name: 'C#',
            width:'88%',
            icon: Bug
        },
        {   id:6,
            name: 'Microsoft SQL',
            width:'90%',
            icon: Database
        },
        {   id:7,
            name: 'Tailwind',
            width:'70%',
            icon: Code
        },
        {   id:8,
            name: 'Python',
            width:'82%',
            icon: FileCode
        },
        
        
    ];
    const Experiences =[
        {
            id:1,
            role:'ERP Consultant',
            company:'HashMicro',
            date:'Nov. 2025 - Present'
        },
        {
            id:2,
            role:'Full Stack Developer',
            company:'E-Med Healthcare Solutions',
            date:'Apr. 2025 - Oct. 2025'
        },
        {
            id:3,
            role:'Sportsbook Risk & Settlement Analyst',
            company:'Wanfang Tech',
            date:'Sept. 2019 - Feb. 2022'
        },
        {
            id:4,
            role:'Technical Support  Representative',
            company:'IBEX Global',
            date:'Apr. 2017 - Aug. 2019'
        },
        {
            id:5,
            role:'FrontEnd Developer Intern/Businesss Analyst Intern',
            company:'BlastAsia',
            date:'486 Hours'
        }
    ]
  return (
    <section className='text-white py-20 relative overflow-hidden' id='skills'>
        <div className='max-w-7xl mx-auto px-6 lg:px-16 relative z-10'>
            <div className='grid md:grid-cols-2 gap-16 items-start'>
                <div data-aos='fade-right'>
                    <h2 className='text-4xl md:text-5xl font-extrabold mb-12'>
                        Technical <span className='text-primary'>Skills</span>
                    </h2>
                    <div className='space-y-8'>
                        {Skills.map((skill)=>{
                            const SkillIcon = skill.icon;
                            return(
             <div key={skill.id} className='group'>
                    <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center gap-3'>
                            <div className='p-2 bg-[#111a3e] rouded-lg group-hover:bg-primary transition-colors duration-300'>
                                <SkillIcon size={20} className='text-primary group-hover:text-white'/>                                
                            </div>
                            <span className='font-medium tracking-wide'>
                                {skill.name}
                           </span>
                        </div>
                                <span className='text-primary font-bold'>
                                    {skill.width}
                                </span>
                                </div>
                                <div className='h-2 w-full bg[#131d30] rouded-full p-0.5'>
                                    <div
                                    className='h-full rounded-full bg-linear-to-r from-primary to-cyan-400 shadow-[0_0_10px_#06a2c2]' style={{width: skill.width}}>
                                    </div>
                                </div>
                        </div>

                                
                            );
                        })}
                    </div>
                </div>
                <div className='fade-left'>
                        <h2 className='text-3xl md:text-5xl font-extrabold mb-12'>
                            Work <span className='text-primary'>Experience</span>
                        </h2>
                        <div className='space-y-6'>
                            {Experiences.map((exp)=>(
                                <div key={exp.id}
                                className='group relative p-6 rounded-2xl bg-[#1f1641] hover:border-primary/50 transition-all duration-300'>
                                    <div className='flex gap-4'>
                                        <div className='shrink-0 mt-1'>
                                            <div className='p-3 bg-[#050816] rounded-xl border border-gray-800 group-hover:border-primary transition-colors'>
                                                <Briefcase className='text-primary'size={24}/>
                                            </div>
                                        </div>
                                    <div className='grow'>
                                        <h3 className='text-xl font-bold text-white group-hover:text-primary transition-colors'>
                                            {exp.role}
                                       </h3>
                                    <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-gray-400'>
                                        <span className='flex items-center gap 1.5'>
                                            <Building size={14} className='text-primary' />
                                            {exp.company}
                                        </span>
                                        <span className='flex items-center gap-1.5'>
                                            <Calendar size={14} className='text-primary' />
                                            {exp.date}

                                        </span>

                                    </div>   

                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            </div>

        </div>

    </section>
  )
};

export default Experience;