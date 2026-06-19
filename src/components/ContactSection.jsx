import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMapMarked } from 'react-icons/fa';

const ContactSection = () => {
    const contactInfo =[
        {
            id: 1,
            icon: FaEnvelope,
            title: 'Email',
            value: 'ce.umlas1995@gmail.com',
            link: 'mailto:ce.umlas1995@gmail.com'
        },
        {
            id: 2,
            icon: FaPhone,
            title: 'Phone',
            value: '+639954941700',
            link: '(+63)9954941700'
        },
        {
            id: 3,
            icon: FaLinkedin,
            title: 'LinkedIn',
            value: 'LinkedIn.com',
            link: 'www.linkedin.com/in/christian-ellis-umlas-312391233'
        },
        {
            id: 4,
            icon: FaMapMarked,
            title: 'Location',
            value: 'Bocaue, Bulacan, Philippines',
            link: null
        }
        
    ]
  return (
    <section className='py-20 bg-gray-900' id='contact'>
        <div className='container mx-auto px-4 max-w-6xl'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl md:text-5xl font-extrabold text-white mb-2'>
                    Let's Connect.
                </h2>
                <div className='w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'>                   
                </div>
            </div>
                <div className='grid md:grid-cols-2 gap-8'>
                    <div>
                        <p className='text-gray-400 mb-8 leading-relaxed'>
                        I’m currently open to full-time opportunities in web development and software engineering, while also welcoming freelance projects and collaborations. If you’re hiring or have a role that matches my skill set, feel free to reach out. I’m always ready to contribute, learn, and grow in a professional team environment.
                        </p>
                    <div className='space-y-6'>
                        {contactInfo.map((info)=>{
                            const Icon = info.icon;
                            return(
                                <div key={info.id}
                                className='flex items-center gap-4 group'>
                                    <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                                    <Icon size={18} className='text-primary' />
                                    </div>
                                    <div>
                                        <h4 className='text-white font-medium text-sm'>
                                            {info.title}
                                        </h4>
                                        {info.link ? ( <a href={info.link}
                                            className='text-gray-400 text-sm hover:text-primary transition-colors'
                                            target={info.title === 'Location' ? '_self' : '_blank'} 
                                            rel={info.title === 'Location' ? '' :'noopener noreferrer'}>
                                                {info.value}
                                                </a>
                                        ) : (
                                            <p className='text-gray-400 text-sm'>
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                    </div>
                        {/* Contact Form */}
                        <div className='bg-gray-800 rounded-lg p-6'>
                            <form>
                                <div className='mb-4'>
                                    <label htmlfor="email"
                                    className='text-white block mb-2 text-sm font-medium'>
                                        Email
                                    </label>
                                    <input type="email" id='email'
                                    className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors'
                                    placeholder='your@email.com' required />
                                </div>

                                <div className='mb-6'>
                                    <label htmlfor="Message"
                                    className='text-white block mb-2 text-sm font-medium'>
                                        Message
                                    </label>
                                    <textarea
                                    type="message" id='message'
                                    className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors'
                                    placeholder='Your Message....' required
                                    rows="4" />
                                </div>
                                <button 
                                type='submit'
                                className='w-full px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/80'>
                                    Send Message
                                </button>
                            </form>
                            

                        </div>
                </div>
        </div>

    </section>
  );
};

export default ContactSection;