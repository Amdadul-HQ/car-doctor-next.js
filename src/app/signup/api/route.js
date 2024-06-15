import { connectDB } from "@/components/lib/connectDB";

export const POST = async (req) => {
    const newUser = await req.json()
    try{
        const db = await connectDB()
        const userCollection = db.collection('users')
        const isExist = await userCollection.findOne({email:newUser.email})
        if(isExist){
            return Response.json({message:"User Already Exist"},{status:304})
        }
        const result= await userCollection.insertOne(newUser)
        return Response.json({message:"User Created"},{status:200})
    }
    catch(error){
        console.log(error);
        return Response.json({message:"Something wrong"},{status:500})
    }
}