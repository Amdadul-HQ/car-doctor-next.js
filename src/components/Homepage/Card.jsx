import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({item}) => {
  return (
    <div
      key={item._id}
      className="border p-6 rounded-md space-y-8 hover:scale-105 transition-all duration-300"
    >
      <Image style={{width:'100%',height:'208px',borderRadius:'8px'}} width={500} height={208} src={item.img} alt="" />
      <h3 className="text-bigText text-2xl font-bold">{item.title}</h3>
      <div className="flex justify-between items-center">
        <p className="text-primary text-xl font-semibold">
          Price: ${item.price}
        </p>
        <Link href={'/'}>
          <button className="text-primary p-6 border scale-75 hover:scale-100 hover:text-black hover:bg-orange transition duration-300 rounded-full">
            <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
