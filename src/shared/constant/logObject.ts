import fs from 'fs';
import path from 'path';

export default function listarArquivosLogs() {
    const logFolderPath = path.join(process.cwd(), 'logs');
    const logFileNames = fs.readdirSync(logFolderPath).filter(fileName => fileName.startsWith('log'));;
    console.log("TODOS OS ARQUIVOS DISPONIVEIS: " + logFileNames)
  
   
  }