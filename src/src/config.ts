import { ServerConfig } from "@server/defines";
import { EnabledModules, Module } from "@server/modules/defines";

/**
 * Enabled modules
 *
 * You can specify what module/s to start
 */
const modules: Module[] = [
  "http",
  "websockets"
];

/**
 * CORS Domains white-list
 *
 * Here you specify the allowed cors-domains
 * ref Access-Control-Allow-Origin. Basically all front-end
 * domains that would connect to the api must be registered here.
 *
 */
const corsDomainList = [
  "http://localhost:3000",
  "https://maple-treasures.netlify.app",
  "https://4b728330a8d5.ngrok-free.app",
  "https://eebb7c73dcab.ngrok-free.app",
  "https://shirkingly-tweediest-loriann.ngrok-free.dev",
];

/**
 * define application config
 *
 */
const AppConfig: ServerConfig = {
  modules: modules as Module[],
  http: {
    corsDomainList,
    requestLimitPerMinute: 60
  },
};

export default AppConfig;
