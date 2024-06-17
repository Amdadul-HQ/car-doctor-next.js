import React from 'react';
import Card from './Card';
import { getServices } from '../services/getServices';

// const getServices = async()=>{
//     const res = await fetch('http://localhost:3000/services/api/getAll')
//     const services = res.json()
//     return services
// }

const Services = async () => {
    const {services} = await getServices()
    return (
        <section className='my-32 max-w-screen-xl mx-auto'>
           <div className="space-y-4">
                <p className='text-primary text-xl font-bold text-center'>Service</p>
                <h1 className='text-center text-5xl font-bold'>Our Service Area</h1>
                <p className="text-smText text-base font-normal max-w-[720px] mx-auto text-center">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
           </div>
           <div className="grid grid-cols-3 gap-6 mt-10">
                {
                    services && services.map(item => <Card key={item.id} item={item} />)
                }
           </div>
        </section>
    );
};

export default Services;