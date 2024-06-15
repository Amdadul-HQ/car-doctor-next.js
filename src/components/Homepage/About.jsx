import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <section className='my-32 grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-x-16'>
            <div >
                <div className='relative'>
                <Image src='/assets/images/about_us/person.jpg' alt='PersonImage' style={{ width: '100%', height: 'auto',borderRadius:'10px' }} width={460} height={473}/>
                <Image className='absolute -bottom-10 -right-10 border-[10px] rounded-lg border-white' src='/assets/images/about_us/parts.jpg' alt='PersonImage' width={330} height={330}/>
                </div>
            </div>
            <div className='space-y-4'>
                <p className='text-primary text-xl font-bold'>About Us</p>
                <h1 className='text-6xl font-bold max-w-[500px]'>We are qualified & of experience in this field</h1>
                <p className='text-lg font-normal'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text-lg font-normal'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
        </section>
    );
};

export default About;