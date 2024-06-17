'use client'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const MyBooking = () => {
    const session = useSession()
    const [booking,setBooking] = useState([])
    const loadDate = async () =>{
        const resp = await fetch(`http://localhost:3000/mybooking/api/${session?.data?.user?.email}`)
        const res = await resp.json()
        return setBooking(res?.mybooking)
    }
    console.log(booking);
    useEffect(()=>{
        loadDate()
    },[session])
    return (
        <section className='container mx-auto'>
            <div style={{
                background: `linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(/assets/images/checkout/Rectangle1548.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center',
                borderRadius:'16px'
            }} className='h-[300px] w-full flex justify-center items-end' >
                <p className='bg-primary text-lg font-medium text-white rounded-t-xl py-2 px-4 w-fit'>MY BOOKING</p>
            </div>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Service Image</th>
        <th>Service Name</th>
        <th>Booking Date</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
  </table>
</div>
            </div>
        </section>
    );
};

export default MyBooking;