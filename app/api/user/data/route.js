import connectDB from "@/config/db";
import User from "@/models/User";
import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function GET(request) {
    
    try {
        
        const { userId } = getAuth(request)

        await connectDB()
        let user = await User.findById(userId)

        // Auto-create the user in MongoDB if missing (fallback when webhooks haven't run yet)
        if (!user) {
            const client = await clerkClient()
            const clerkUser = await client.users.getUser(userId)
            const userData = {
                _id: clerkUser.id,
                email: clerkUser.emailAddresses?.[0]?.emailAddress || "",
                name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
                imageUrl: clerkUser.imageUrl,
            }
            user = await User.create(userData)
        }

        return NextResponse.json({success:true, user})

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }

}