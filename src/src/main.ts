import { Server } from "@server/index"
// import { logger } from "@server/modules/logs"
import { Log } from "@server/logs"

export default async (application: Server) => {
  // logger.info({ something: 1})
  Log.error('errorrrr');
  Log.warn('warn');
  Log.info('hehe');
  Log.system('hahaha');
  // logger.warn('war');
  // logger.debug('war');
  // const log = application.modules.getModule('logs');
}