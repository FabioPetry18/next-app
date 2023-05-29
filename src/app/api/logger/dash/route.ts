import { logger } from "@/shared/logger/logger"
import { NextRequest, NextResponse  } from "next/server"
import fs from 'fs';
import path from 'path';


export async function POST(request: NextRequest ) {
  interface LogEntry {
    level: string;
    message: string;
    usuario: string;
    timestamp: string;
  }

  if (request.method === "POST") {
    const logFolderPath = path.join(process.cwd(), 'logs');
    const logFileNames = fs.readdirSync(logFolderPath)
      .filter(fileName => fileName.startsWith('log'))
      .map(fileName => path.join(logFolderPath, fileName));

    let logEntry: LogEntry[] = [];

    try {
      for (const file of logFileNames) {
        const data = await fs.promises.readFile(file, 'utf8');
        const entry = data.split('\r\n').filter(Boolean).map((log) => JSON.parse(log));
        entry.map((line) => logEntry.push(line));
      }


      return new NextResponse(JSON.stringify({ logEntry }), { status: 201, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
      return new NextResponse(JSON.stringify({ "message": "Erro ao ler os arquivos de log" }), { status: 400 });
    }
  }
}

