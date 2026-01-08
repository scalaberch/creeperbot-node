import { HttpNext, HttpRequest, HttpResponse } from '@server/modules/http/defines';
import { Log } from "@server/logs"

export const handleCallback = (req: HttpRequest, res: HttpResponse) => {
  const data = req.getBody();
  Log.info('', data)

  return res.outputSuccess({ data }, '')
}

export default {
  handleCallback
}