import WebsocketClient, { WSMessageIn, IncomingMessage } from '@server/modules/websockets/client';
import { WSHandler } from '@server/modules/websockets/defines';

/**
 * on connect handler
 *
 * @param client
 * @param req
 */
const onConnect = (client: WebsocketClient, req: IncomingMessage) => {
  const ipAddress = client.ipAddress;
  const jwtData = client.authData;
  client.send({ message: `Welcome xxxxx from ${ipAddress}`, data: { jwtData } })
};

/**
 * handles on message
 *
 * @param client
 * @param data
 */
const onMessage = (client: WebsocketClient, data: WSMessageIn) => {
};

/**
 * handle on socket close
 *
 * @param client
 */
const onClose = (client: WebsocketClient) => {
  const ipAddress = client.ipAddress;
  const jwtData = client.authData;
  // console.log("goodbye!")
};

/**
 * web socket handler object
 *
 */
const handler: WSHandler = {
  onConnect,
  onMessage,
  onClose,
};

export default handler;