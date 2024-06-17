import { connectDB } from "@/components/lib/connectDB"

export const GET = async(request,{params})=>{
    const db = await connectDB()
    const bookingCollection = await db.collection('booking')
    try{
        const mybooking = await bookingCollection.find({email:params.email}).toArray()
        return Response.json({mybooking})
    }
    catch(error){
        return Response.json({message:"something wrong"})
    }
}