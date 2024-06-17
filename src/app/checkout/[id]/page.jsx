'use client'
import { getServiceDetails } from '@/components/services/getServices';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const CheckoutPage = ({params}) => {
    const [service,setService] = useState({})
    const {data} = useSession()
    const firstName = data?.user?.name.split(' ')[0];
    const lastName = data?.user?.name.split(' ')[1];
    const loadService = async()=>{
        const details = await getServiceDetails(params.id)
        setService(details.service)
    }
    const {_id,title,description,img,price,facility,service_id} = service || {};
    const handleOrder= async(e)=>{
        e.preventDefault()
        const newBooking = {
            email:data?.user?.email,
            name:data?.user?.name,
            address:e.target.address.value,
            phone:e.target.phone.value,
            data:e.target.date.value,
            message:e.target.message.value,
            serviceTitle:title,
            serviceID:_id,
            service_id,
            price,
            description,
            img
        }        
        const res = await fetch('http://localhost:3000/checkout/api/newbooking',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newBooking)
        })
        console.log(res);
    }
    useEffect(()=>{
        loadService()
    },[params])
    return (
        <section className='max-w-screen-xl mx-auto'>
            <div style={{
                background: `linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(/assets/images/checkout/checkout.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center',
                borderRadius:'16px'
            }} className='h-[300px] w-full flex justify-center items-end' >
                <p className='bg-orange text-lg font-medium text-white rounded-t-xl py-2 px-4 w-fit'>Home/Checkout</p>
            </div>
            <div className='bg-[#F3F3F3] p-24 mt-10 rounded-xl'>
                <form onSubmit={handleOrder} className='space-y-6'>
                    <div className='flex gap-x-5'>
                    <div className='mt-4 space-y-2 w-1/2'>
                        <label className='text-[#444] text-lg font-semibold' htmlFor='firstName'>First Name</label>
                        <br />
                        <input  type="text" defaultValue={firstName} name='firstName' placeholder="First Name" id='firstName' className="input py-4 input-bordered w-full" required />
                    </div>
                    <div className='mt-4 space-y-2 w-1/2'>
                        <label className='text-[#444] text-lg font-semibold' htmlFor='lastName'>Last Name</label>
                        <br />
                        <input  type="text" defaultValue={lastName} name='lastName' placeholder="Last Name" id='lastName' className="input py-4 input-bordered w-full" required />
                    </div>
                    </div>
                    <div className='flex gap-x-5'>
                    <div className='mt-4 space-y-2 w-1/2'>
                        <label className='text-[#444] text-lg font-semibold' htmlFor='phone'>Your Phone</label>
                        <br />
                        <input  type="tel" name='phone' placeholder="Your Phone" id='phone' className="input py-4 input-bordered w-full" required />
                    </div>
                    <div className='mt-4 space-y-2 w-1/2'>
                        <label className='text-[#444] text-lg font-semibold' htmlFor='email'>Your Email</label>
                        <br />
                        <input  type="email" defaultValue={data?.user?.email} name='email' placeholder="Your Email" id='email' className="input py-4 input-bordered w-full" required />
                    </div>
                    </div>
                    <div className='flex gap-x-5'>
                    <div className='mt-4 space-y-2 w-1/2'>
                        <label className='text-[#444] text-lg font-semibold' htmlFor='address'>Your Address</label>
                        <br />
                        <input  type="text" name='address' placeholder="Your Address" id='address' className="input py-4 input-bordered w-full" required />
                    </div>
                    <div className='mt-4 space-y-2 w-1/2'>
                        <label className='text-[#444] text-lg font-semibold' htmlFor='date'>Date</label>
                        <br />
                        <input  type="date" defaultValue={new Date().getDate()} name='date' id='date' className="input py-4 input-bordered w-full" required />
                    </div>
                    </div>
                    <div>
                    <label className='text-[#444] text-lg font-semibold' htmlFor='message'>Your Message</label>
                        <br />
                    <textarea id='message' name='message' placeholder="Message" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </div>
                    <div>
                    <button type='submit' className='btn btn-primary w-full border border-orange rounded-md text-lg font-semibold hover:bg-orange hover:text-white transition duration-300'>Order Confirm</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CheckoutPage;