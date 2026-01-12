import { Server } from "@server/index"
import { cache } from "@server/modules/cache"

import { mysql } from "@server/modules/mysql"
import { createTableAlias } from "@server/modules/mysql/methods";

import BlockedIpList, { BlockedIpListTable } from "./models/tables/blockediplistTable";
import { getCurrentTimestamp } from "@server/lib/datetime";
import { Block } from "ethers";

export default async (application: Server) => {
  // const tables = await mysql().getTables();

  // i have something
  // console.log("hello!")

  // const Cache = cache();
  // console.log(Cache)

  // const isConnected = cache().isConnected()
  // console.log(isConnected)

  // application.modules.getModule('cache')

  // const ddd = await BlockedIpList.insert({
  //   ip_address: getCurrentTimestamp()
  // })



  // const db = BlockedIpList.db();
  // const result = await db.query(`SELECT * FROM blocked_ip_list`, []);
  // console.log(result)

  // const results = await BlockedIpList.selectWhere({}, [], { ip_address: 'desc' })
  // console.log(results)


  // const result = await BlockedIpList.selectWhere({}, [], { ip_address: 'desc' })
  // const result = await BlockedIpList.selectById('019bad17-127e-77ac-a3b5-71e8cc364cae')
  // const result = await BlockedIpList.updateWhere({ id: '019bad17-127e-77ac-a3b5-71e8cc364cae' }, { ip_address: 'hahaha'})
  // const result = await BlockedIpList.deleteWhere({ $eq: { 'ip_address': null }}, true)
  // const result = await BlockedIpList.deleteWhere({ id: '019bad17-127e-77ac-a3b5-71e8cc364cae' }, false)
  
  // console.log(result)


  const pagination = await BlockedIpList.paginate(1, 10);
  console.log(pagination);

}