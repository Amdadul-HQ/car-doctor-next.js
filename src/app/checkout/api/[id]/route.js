import { connectDB } from "@/components/lib/connectDB"

export const POST = async(request)=>{
    const booking = await request.json()

    const db = await connectDB()
    const bookingCollection = db.collection('booking')
    try{
        const newBooking = await bookingCollection.insertOne(booking)
        return Response.json({message:'booking Successful'},{status:200})
    }
    catch(error){
        console.log(error);
        return Response.json({message:'something want wrong'},{status:400})
    }
}