import { getServiceDetails } from '@/components/services/getServices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceDetails = async ({params}) => {
    const {service} = await getServiceDetails(params.id)
    const {img,title,description,facility,price,_id} = service
    console.log(service);
    return (
        <section className='container mx-auto my-10'>
            <div style={{
                background: `linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(/assets/images/checkout/checkout.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center',
                borderRadius:'16px'
            }} className='h-[300px] w-full flex mb-32 justify-center items-end' >
                <p className='bg-primary text-lg font-medium text-white rounded-t-xl py-2 px-4 w-fit'>Home/Checkout</p>
            </div>
            <div className='grid grid-cols-3 gap-x-6'>
                <div className='col-span-2'>
                    <div>
                        <Image src={img} width={752} height={400} style={{width:'100%',borderRadius:'10px'}} alt=''/>
                    </div>
                    <h1 className='text-4xl font-bold mt-4'>{title}</h1>
                    <p className='text-base font-medium mt-4'>{description}</p>
                    <div className='grid grid-cols-2 gap-6 mt-4'>
                        {facility.map((item,index) => <div className='bg-[#F3F3F3] p-5 border-t-primary rounded-xl border-2' key={index}>
                            <h4 className='text-xl font-bold'>{item.name}</h4>
                            <p>{item.details}</p>
                        </div>)}
                    </div>
                </div>
                <div>
                    <h1 className='text-4xl font-bold'>PRICE: $ {price}</h1>
                    <Link href={`/checkout/${_id}`}><button className='text-xl text-white w-full btn btn-primary'>Proceed Checkout</button></Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;