import listarArquivosLogs from "@/shared/constant/logObject"
import { logger } from "@/shared/logger/logger"

export default function BtnLogger()  {
  listarArquivosLogs()
  logger.error("ocorreu teste erro")
  
}