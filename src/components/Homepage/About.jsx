import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <section className='my-32 grid grid-cols-1 lg:grid-cols-2 container mx-auto'>
            <div >
                <div className='relative'>
                <Image src='/assets/images/about_us/person.jpg' alt='PersonImage' style={{ width: '100%', height: 'auto',borderRadius:'10px' }} width={460} height={473}/>
                <Image className='absolute -bottom-10 -right-10 border-[10px] rounded-lg border-white' src='/assets/images/about_us/parts.jpg' alt='PersonImage' width={330} height={330}/>
                </div>
            </div>
            <div></div>
        </section>
    );
};

export default About;