import { logger } from "@/shared/logger/logger"
import { NextRequest, NextResponse } from "next/server"

interface log{
    username: string,             
    level: string,             
    message: string , 

}

export async function POST(request: NextRequest) {
    if(request.method == "POST") {
        if(request.body != null) {            
            const body : log = await request.json() 
            console.log(new Date)
            if(body.level !== undefined && body.username !== undefined && body.message !== undefined) {
                logger.log(body.level, body.message, {'usuario': body.username });
            } else {
                return new NextResponse(JSON.stringify({"message": "é necessário informar no body as informações: username, level, message(opcional)"}), { status: 500 });
            }    
            return new NextResponse(undefined, { status: 201, headers: { 'Content-Type': 'application/json' } });
        }
        return new NextResponse(JSON.stringify({"message": "é necessário informar no body as informações: username, level, message(opcional)"}), { status: 500 });
    }
}

