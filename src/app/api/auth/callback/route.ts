import { logger } from "@/shared/logger/logger";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    if(request.method == "GET") {
        const {searchParams} = new URL(request.url)
        const token = searchParams.get('token')
        const  cookieExpireTime = 60 
        const redirectUrl = new URL('/', request.url)
        return NextResponse.redirect(redirectUrl, {
            headers: {
                'Set-Cookie': `token=${token}; path=/; max-age=${cookieExpireTime}`
            }
        })

    }
}

