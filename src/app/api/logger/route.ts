import { logger } from "@/shared/logger/logger"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    

    if(request.method == "POST") {
        logger.error("Clicou no botão")

        return new NextResponse(JSON.stringify({}), { status: 201, headers: { 'Content-Type': 'application/json' } });

    }
}