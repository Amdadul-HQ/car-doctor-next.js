import { connectDB } from "@/components/lib/connectDB"
import { services } from "@/components/lib/services"

export const GET = async()=>{
    const db = await connectDB()
    const servicesCollection = db.collection('services')
    try{
        await servicesCollection.deleteMany()
        const resp = await servicesCollection.insertMany(services)
        return Response.json({message:"Services Added successful"},{status:200})
    }
    catch(error){
        return Response.json({message:"Something want wrong"},{status:400})
    }
}