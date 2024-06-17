import { connectDB } from "@/components/lib/connectDB"

export const POST = async(request) =>{
    const newBooking = await request.json()
    const db = await connectDB()
    const bookingCollection = db.collection('booking')
    try{
     const res = await bookingCollection.insertOne(newBooking)
     return Response.json({message:'booking successful'},{status:200})
    }
    catch(error){
     return Response.json({message:"something want wrong"},{status:400})
    }
}